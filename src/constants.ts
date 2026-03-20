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
  socials: {
    linkedin: string;
    twitter: string;
    email: string;
  };
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
  title: "Consulting & Mentoring",
  tagline: "Working with founders, game developers, and companies on technical and lean process strategies to drive product growth.",
  bio: "With 25+ years at the intersection of engineering and strategy, I’ve bootstrapped a $2M revenue mobile game publisher, scaled a 500+ member Tokyo startup community, and shipped 50+ games. I help founders and developers bridge the gap between technical execution and business operations.",
  expertise: [
    {
      title: "Entrepreneurship in Japan",
      description: "Navigating the Tokyo startup ecosystem, fundraising (grants), and co-founder dynamics.",
      icon: "Globe"
    },
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
      title: "Growth & Product Strategy",
      description: "Rapid MVP prototyping, validating product-market fit, and engineering automated data pipelines.",
      icon: "TrendingUp"
    }
  ],
  career: [
    {
      role: "Strategic Advisor & Consultant",
      company: "Tokyo/Remote",
      description: "Advised Web3/Blockchain ventures on game team building, architecting Market Intelligence engines ecommerce company, and delivering high-impact MVPs for emerging startups."
    },
    {
      role: "Indie Game Development",
      company: "TinyHoopers",
      description: "Scaled a social media ecosystem to 50K+ followers, 12K+ Discord members and 20K+ email subscribers. Converted organic growth into 80K+ Beta downloads via automated serverless pipelines."
    },
    {
      role: "Co-Founder",
      company: "3rdKind Inc.",
      description: "Bootstrapped and led a mobile publishing studio to $2M in annual revenue, securing strategic licensing deals with top-tier icons like TV Tokyo and Sanrio."
    },
    {
      role: "President & Board Member",
      company: "La French Tech Tokyo",
      description: "Scaled the Tokyo startup ecosystem to 500+ members and secured €45K in government grants for flagship innovation initiatives."
    }
    // {
    //   role: "Early Career (2001-2010)",
    //   company: "Gameloft / Globz / Xilam",
    //   description: "Lead developer for award-winning Nintendo DS titles (Globulos Party) and architected custom engines for Nintendo Game Boy Advance."
    // }
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
  calendly: "https://calendly.com/papanouel/30min-call",
  socials: {
    linkedin: "https://www.linkedin.com/in/papanouel/",
    twitter: "https://twitter.com/papanouel",
    email: "mailto:fred.nouel@gmail.com"
  }
};
