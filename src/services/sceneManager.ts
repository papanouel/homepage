import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';

export class SceneManager {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private controls: OrbitControls;
  private mixers: THREE.AnimationMixer[] = [];
  private clock: THREE.Timer;
  private container: HTMLElement;
  private frameId?: number;
  private character?: THREE.Group;
  private raycaster: THREE.Raycaster;
  private mouse: THREE.Vector2;
  private onCharacterClick?: () => void;

  private isDisposed: boolean = false;
  private isPaused: boolean = false;

  constructor(container: HTMLElement) {
    console.log('SceneManager: Initializing...');
    this.container = container;
    this.scene = new THREE.Scene();
    this.clock = new THREE.Timer();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    // Camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    this.camera.position.set(-3.2, 2.2, 3.2);

    // Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(this.renderer.domElement);

    // Context loss handling
    this.renderer.domElement.addEventListener('webglcontextlost', (event) => {
      event.preventDefault();
      console.warn('SceneManager: WebGL context lost');
      if (this.frameId) cancelAnimationFrame(this.frameId);
    }, false);

    this.renderer.domElement.addEventListener('webglcontextrestored', () => {
      console.log('SceneManager: WebGL context restored');
      this.animate();
    }, false);

    // Visibility handling
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
    document.addEventListener('visibilitychange', this.onVisibilityChange);

    // Controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.minPolarAngle = 0;
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minAzimuthAngle = -Math.PI / 2;
    this.controls.maxAzimuthAngle = 0;
    this.controls.target.set(0, 1, 0);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    this.scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.5);
    this.scene.add(hemisphereLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7);
    this.scene.add(directionalLight);

    this.initLoaders();
    this.onResize = this.onResize.bind(this);
    this.onPointerDown = this.onPointerDown.bind(this);
    window.addEventListener('resize', this.onResize);
    this.renderer.domElement.addEventListener('pointerdown', this.onPointerDown);
    (window as any).sceneManager = this;
    this.animate();
  }

  private onPointerDown(event: PointerEvent) {
    const rect = this.renderer.domElement.getBoundingClientRect();
    console.log('PointerDown event fired. Character:', !!this.character, 'Callback:', !!this.onCharacterClick, 'Rect:', rect.width, rect.height);
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    console.log('Mouse NDC:', this.mouse.x, this.mouse.y);

    this.raycaster.setFromCamera(this.mouse, this.camera);
    console.log('Raycaster origin:', this.raycaster.ray.origin.x, this.raycaster.ray.origin.y, this.raycaster.ray.origin.z);
    console.log('Raycaster direction:', this.raycaster.ray.direction.x, this.raycaster.ray.direction.y, this.raycaster.ray.direction.z);
    
    // Check all objects in scene for debugging
    const allIntersects = this.raycaster.intersectObjects(this.scene.children, true);
    if (allIntersects.length > 0) {
      console.log('Hit object:', allIntersects[0].object.name || allIntersects[0].object.type);
    }

    if (this.character) {
      const intersects = this.raycaster.intersectObject(this.character, true);
      if (intersects.length > 0) {
        console.log('Character hit detected! Distance:', intersects[0].distance);
        this.onCharacterClick?.();
      } else {
        console.log('Character NOT hit by raycaster');
      }
    }
  }

  public setOnCharacterClick(callback: () => void) {
    console.log('Setting character click callback');
    this.onCharacterClick = callback;
  }

  public getCharacterScreenPosition(): { x: number; y: number } | null {
    if (!this.character) {
      // console.log('getCharacterScreenPosition: character is null');
      return null;
    }

    const vector = new THREE.Vector3();
    this.character.updateMatrixWorld();
    const box = new THREE.Box3().setFromObject(this.character);
    
    if (box.isEmpty()) {
      // console.log('getCharacterScreenPosition: box is empty');
      return null;
    }

    vector.set(
      (box.min.x + box.max.x) / 2,
      box.max.y - 0.1,
      (box.min.z + box.max.z) / 2
    );

    vector.project(this.camera);

    if (vector.z > 1) {
      // console.log('getCharacterScreenPosition: character is behind camera');
      return null;
    }

    const rect = this.renderer.domElement.getBoundingClientRect();
    // For absolute positioning inside the container
    return {
      x: (vector.x * 0.5 + 0.5) * rect.width,
      y: (-(vector.y * 0.5) + 0.5) * rect.height,
    };
  }

  private initLoaders() {
    const dracoLoader = new DRACOLoader();
    // Use a very reliable CDN version
    dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);

    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    console.log('Using base URL:', baseUrl);

    // Load Environment
    console.log(`Attempting to load primary model: ${baseUrl}models/papanouel_space_v2_1.glb`);
    gltfLoader.load(`${baseUrl}models/papanouel_space_v2_1.glb?v=${Date.now()}`, (gltf) => {
      console.log('SUCCESS: Primary model loaded');
      this.setupModel(gltf.scene, gltf.animations);
    }, 
    (xhr) => {
      if (xhr.total > 0) {
        console.log('Primary progress: ' + Math.round(xhr.loaded / xhr.total * 100) + '%');
      }
    },
    (error) => {
      const msg = error instanceof Error ? error.message : 'Unknown error';
      console.error('ERROR: Primary model failed:', msg);
      
      console.log(`Attempting fallback model: ${baseUrl}models/papanouel.glb`);
      gltfLoader.load(`${baseUrl}models/papanouel.glb?v=${Date.now()}`, (gltf) => {
        console.log('SUCCESS: Fallback model loaded');
        this.setupModel(gltf.scene, gltf.animations);
      }, 
      (xhr) => {
        if (xhr.total > 0) {
          console.log('Fallback progress: ' + Math.round(xhr.loaded / xhr.total * 100) + '%');
        }
      },
      (fallbackError) => {
        const fallbackMsg = fallbackError instanceof Error ? fallbackError.message : 'Unknown error';
        console.error('CRITICAL: Fallback model failed:', fallbackMsg);
        this.addErrorCube();
      });
    });

    // Load Character
    console.log(`Attempting to load character model: ${baseUrl}models/papanouel.glb`);
    gltfLoader.load(`${baseUrl}models/papanouel.glb?v=${Date.now()}`, (gltf) => {
      console.log('SUCCESS: Character model loaded');
      this.setupCharacter(gltf.scene, gltf.animations);
    },
    undefined,
    (error) => {
      console.error('ERROR: Character model failed:', error);
    });
  }

  private setupModel(model: THREE.Group, animations: THREE.AnimationClip[]) {
    // Remove the test cube if it exists
    //const testCube = this.scene.getObjectByName('testCube');
    //if (testCube) this.scene.remove(testCube);

    // Load and apply texture
    const textureLoader = new THREE.TextureLoader();
    const baseUrl = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
    console.log(`Loading texture: ${baseUrl}models/baked_v6.jpg`);
    const bakedTexture = textureLoader.load(`${baseUrl}models/baked_v6.jpg`, 
      (tex) => {
        console.log('SUCCESS: Texture loaded');
        tex.flipY = false;
        tex.colorSpace = THREE.SRGBColorSpace;
      },
      undefined,
      (err) => console.error('ERROR: Failed to load texture:', err)
    );

    const bakedMaterial = new THREE.MeshBasicMaterial({
      map: bakedTexture,
    });

    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        console.log('Environment mesh found:', child.name);
        (child as THREE.Mesh).material = bakedMaterial;
        // If it's a collision mesh (often named cube_X or similar), make it non-raycastable
        if (child.name.toLowerCase().includes('cube') || child.name.toLowerCase().includes('collision')) {
          child.raycast = () => {};
          console.log('Disabled raycasting for potential collision mesh:', child.name);
        }
      }
    });

    // Center and scale model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    
    console.log('Model stats - Size:', size.x, size.y, size.z, 'Center:', center.x, center.y, center.z);

    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = 4 / maxDim;
      model.scale.setScalar(scale);
      model.position.sub(center.multiplyScalar(scale));
      model.position.y = 0;
    }

    this.scene.add(model);

    // Handle animations
    if (animations && animations.length > 0) {
      console.log(`Animations found in environment: ${animations.length}`);
      const mixer = new THREE.AnimationMixer(model);
      animations.forEach(clip => {
        mixer.clipAction(clip).play();
      });
      this.mixers.push(mixer);
    }

    // Adjust camera
    this.camera.position.set(-3.2, 2.0, 3.2);
    this.controls.target.set(0, 1, 0);
    this.controls.update();
  }

  private setupCharacter(model: THREE.Group, animations: THREE.AnimationClip[]) {
    this.character = model;
    console.log('Setting up character. Meshes found:', model.getObjectsByProperty('isMesh', true).length);
    // Character setup based on old code
    model.position.set(0, 0.15, -0.84);
    model.scale.set(0.8, 0.8, 0.8);
    console.log('Character position:', model.position.x, model.position.y, model.position.z);
    console.log('Character scale:', model.scale.x, model.scale.y, model.scale.z);
    this.scene.add(model);
    console.log('Character added to scene. Visible:', model.visible);
    model.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        console.log('Character mesh found:', child.name, 'Raycastable:', child.raycast !== undefined);
      }
    });

    if (animations && animations.length > 0) {
      console.log(`Animations found in character: ${animations.length}`);
      const mixer = new THREE.AnimationMixer(model);
      mixer.timeScale = 0.5;
      
      const typingClip = animations.find(clip => clip.name === 'typing');
      if (typingClip) {
        mixer.clipAction(typingClip).play();
      } else {
        mixer.clipAction(animations[0]).play();
      }
      
      this.mixers.push(mixer);
    }
  }

  private addErrorCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ color: 0xff0000, wireframe: true });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.y = 0.5;
    this.scene.add(cube);
    console.log('Added red error cube');
  }

  private onVisibilityChange() {
    if (document.hidden) {
      console.log('SceneManager: Tab hidden, pausing...');
      this.isPaused = true;
    } else {
      console.log('SceneManager: Tab visible, resuming...');
      this.isPaused = false;
      // Reset clock to avoid huge delta
      this.clock.update();
    }
  }

  private onResize() {
    if (this.isDisposed) return;
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
  }

  private animate() {
    if (this.isDisposed) return;
    this.frameId = requestAnimationFrame(this.animate.bind(this));
    
    if (this.isPaused) return;

    this.clock.update();
    // Cap delta to 0.1s to prevent huge jumps after backgrounding
    const delta = Math.min(this.clock.getDelta(), 0.1);

    this.mixers.forEach(mixer => mixer.update(delta));

    this.controls.update();
    
    try {
      this.renderer.render(this.scene, this.camera);
    } catch (error) {
      console.error('SceneManager: Render error:', error);
      // If it's a context lost error, it's handled by the listener
    }
  }

  public dispose() {
    console.log('SceneManager: Disposing...');
    this.isDisposed = true;
    if (this.frameId) cancelAnimationFrame(this.frameId);
    window.removeEventListener('resize', this.onResize);
    document.removeEventListener('visibilitychange', this.onVisibilityChange);
    this.renderer.domElement.removeEventListener('pointerdown', this.onPointerDown);
    this.renderer.dispose();
    if (this.container.contains(this.renderer.domElement)) {
      this.container.removeChild(this.renderer.domElement);
    }
  }

  public focusOn(position: THREE.Vector3, target: THREE.Vector3) {
    gsap.to(this.camera.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration: 1.5,
      ease: 'power2.inOut',
    });
    gsap.to(this.controls.target, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1.5,
      ease: 'power2.inOut',
    });
  }
}
