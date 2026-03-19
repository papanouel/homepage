import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SceneManager } from '@/services/sceneManager';
import { SpeechBubble } from './SpeechBubble';
import { DIALOGUES } from '@/constants';

export const HeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneManagerRef = useRef<SceneManager | null>(null);
  const [activeDialogue, setActiveDialogue] = useState<{ index: number; sentence: number } | null>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  
  // Use refs for state that shouldn't trigger SceneManager re-init
  const isFirstTimeRef = useRef(true);
  const lastDialogueIndexRef = useRef<number | null>(null);

  const updateBubblePosition = useCallback(() => {
    if (sceneManagerRef.current && bubbleRef.current) {
      const pos = sceneManagerRef.current.getCharacterScreenPosition();
      if (pos) {
        bubbleRef.current.style.left = `${pos.x}px`;
        bubbleRef.current.style.top = `${pos.y}px`;
        bubbleRef.current.style.display = 'block';
      } else {
        bubbleRef.current.style.display = 'none';
      }
    }
  }, []);

  const advanceDialogue = useCallback(() => {
    setActiveDialogue((prev) => {
      if (!prev) return null;
      const sentences = DIALOGUES[prev.index].sentences;
      if (prev.sentence < sentences.length - 1) {
        return { ...prev, sentence: prev.sentence + 1 };
      }
      return null;
    });
  }, []);

  const closeDialogue = useCallback(() => {
    setActiveDialogue(null);
  }, []);

  // SceneManager Lifecycle
  useEffect(() => {
    console.log('HeroScene: Component mounted');
    if (containerRef.current && !sceneManagerRef.current) {
      const sm = new SceneManager(containerRef.current);
      sceneManagerRef.current = sm;

      sm.setOnCharacterClick(() => {
        setActiveDialogue((prev) => {
          if (prev !== null) {
            const sentences = DIALOGUES[prev.index].sentences;
            if (prev.sentence < sentences.length - 1) {
              return { ...prev, sentence: prev.sentence + 1 };
            }
            return null;
          }

          let nextIndex = 0;
          if (!isFirstTimeRef.current) {
            const availableIndices = DIALOGUES.map((_, i) => i).filter(i => i !== lastDialogueIndexRef.current);
            nextIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
          }
          
          isFirstTimeRef.current = false;
          lastDialogueIndexRef.current = nextIndex;
          return { index: nextIndex, sentence: 0 };
        });
      });
    }

    return () => {
      console.log('HeroScene: Component unmounting');
      if (sceneManagerRef.current) {
        sceneManagerRef.current.dispose();
        sceneManagerRef.current = null;
      }
    };
  }, []);

  // Position Update Interval
  useEffect(() => {
    const interval = setInterval(updateBubblePosition, 16);
    return () => clearInterval(interval);
  }, [updateBubblePosition]);

  return (
    <div className="relative w-full h-full">
      <div 
        ref={containerRef} 
        className="w-full h-full opacity-100"
      />
      {activeDialogue !== null && (
        <div 
          ref={bubbleRef}
          style={{ 
            position: 'absolute', 
            pointerEvents: 'none',
            zIndex: 1000,
            transform: 'translate(-50%, -100%)',
            marginTop: '-40px'
          }}
        >
          <SpeechBubble
            sentence={DIALOGUES[activeDialogue.index].sentences[activeDialogue.sentence]}
            onComplete={closeDialogue}
            onAdvance={advanceDialogue}
          />
        </div>
      )}
    </div>
  );
};
