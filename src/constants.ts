export interface MentorProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  expertise: ExpertiseArea[];
  career: CareerItem[];
  toolkit: ToolkitCategory[];
  philosophy: string;
  location: string;
  languages: string[];
  calendly: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
}

export interface CareerItem {
  role: string;
  company: string;
  description: string;
  period?: string;
}

export interface ToolkitCategory {
  category: string;
  items: string[];
}

export interface Dialogue {
  sentences: string[];
}

export const DIALOGUES: Dialogue[] = [
  {
    sentences: ["Hello!", "What's up?", "Me I'm in a good mood.", "I am progressing so much on my current project."]
  },
  {
    sentences: ["Do you know what I service I provide?", "I recommend you the mentorship.", "First 30minutes free."]
  }
];

export const MENTOR_DATA: MentorProfile = {
  name: "Frederic Nouel",
  title: "Executive Tech Lead | Game Dev Veteran | Growth Architect",
  tagline: "Bridging the gap between complex technical challenges and market-ready products.",
  bio: "With over 20 years of experience shipping 45+ titles across mobile and console, Frederic blends deep technical execution with high-level strategic leadership. From founding and scaling startups in Tokyo to architecting serverless cloud backends, he specializes in taking products from zero to a massive scale.",
  expertise: [
    {
      title: "Game Development & Engineering",
      description: "Advanced Godot 4 & Unity; building custom engines and real-time multiplayer architecture.",
      icon: "Gamepad2"
    },
    {
      title: "Cloud Infrastructure & DevOps",
      description: "Architecting scalable backends on GCP (Cloud Run, Pub/Sub, CI/CD) and enterprise system integrations.",
      icon: "Cloud"
    },
    {
      title: "Engineering & Leadership",
      description: "Scaling high-performing teams, establishing Agile cultures, and navigating technical recruitment.",
      icon: "Users"
    },
    {
      title: "Growth & Product Strategy",
      description: "Rapid MVP prototyping, validating product-market fit, and engineering automated data pipelines.",
      icon: "TrendingUp"
    },
    {
      title: "Entrepreneurship in Japan",
      description: "Navigating the Tokyo startup ecosystem, fundraising (grants), and co-founder dynamics.",
      icon: "Globe"
    },
    {
      title: "Founder Mentoring",
      description: "Navigating the Tokyo startup ecosystem, fundraising (grants), and co-founder dynamics.",
      icon: "Handshake"
    }
  ],
  career: [
    {
      role: "Independent Developer & Growth Engineer",
      company: "TinyHoopers",
      description: "Scaled TinyHoopers to 80K+ downloads and built a social community of 50K+ followers using automated serverless pipelines."
    },
    {
      role: "Strategic Consultant",
      company: "Games & Tech Industries",
      description: "Advised blockchain ventures and architected high-volume BI engines for market leaders."
    },
    {
      role: "Co-Founder & COO",
      company: "3rdKind Inc.",
      description: "Spent a decade scaling a 29-person team and managing technical integrations for global IPs like TV Tokyo and Sanrio."
    },
    {
      role: "Community Leader",
      company: "La French Tech Tokyo",
      description: "Former President, bridging the gap between entrepreneurs, VCs, and the Japanese government."
    }
  ],
  toolkit: [
    {
      category: "Game Engines",
      items: ["Godot 4 (GDScript)", "Unity (C#)", "Custom (C/C++)"]
    },
    {
      category: "Backend & Ops",
      items: ["GCP Services", "Python", "Github CI/CD"]
    },
    {
      category: "AI & Web",
      items: ["AI Agents", "LLM API Integration", "JavaScript"]
    },
    {
      category: "Design",
      items: ["Figma", "Blender", "Photoshop"]
    }
  ],
  philosophy: "I believe in 'Production-Ready' as a mindset. Whether you are coding a P2P multiplayer stack or scaling a startup team, the goal is to bridge the gap between complex technical challenges and market-ready products—fast.",
  location: "Tokyo / Remote",
  languages: ["French (Native)", "English (Fluent)", "Japanese (Business)"],
  calendly: "https://calendly.com/papanouel/30min-call"
};
