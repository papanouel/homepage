export interface MentorProfile {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  expertise: ExpertiseArea[];
  career: CareerItem[];
  toolkit: ToolkitCategory[];
  philosophy: string;
  consultantPhilosophy: string;
  location: string;
  languages: string[];
  booking: {
    pocKickoff: string;
    discovery: string;
  };
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
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
  link?: {
    text: string;
    url: string;
  };
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
    sentences: ["Do you know what service I provide?", "I recommend you the mentorship.", "First 30minutes free."]
  },
  {
    sentences: ["I've lived in Tokyo for over 17 years now.", "It's a fantastic place for tech and design.", "The startup scene here is really unique."]
  },
  {
    sentences: ["Have you seen the TinyHoopers project?", "It started as an automation experiment.", "Now it's a full-blown game with a huge community!"]
  },
  {
    sentences: ["I love helping founders bridge the gap...", "...between complex tech and the market.", "Let's build something lean and fast!"]
  },
  {
    sentences: ["I'm a big fan of AI-assisted workflows.", "It's not about replacing humans.", "It's about making execution 10x faster."]
  }
];

export const MENTOR_DATA: MentorProfile = {
  name: "Frederic Nouel",
  title: "Consulting & Mentoring",
  tagline: "Working with founders, game developers, and companies on technical and lean process strategies to drive product growth.",
  bio: "With 25+ years at the intersection of engineering and strategy, I’ve bootstrapped a $2M revenue mobile game publisher, scaled a 500+ member Tokyo startup community, and shipped 50+ games. I help founders and developers bridge the gap between technical execution and business operations.",
  expertise: [
    {
      title: "AI Prototyping & Systems",
      description: "Rapid prototyping with LLMs, agents, and AI workflows to turn ideas into working products fast.",
      icon: "Bot"
    },
    {
      title: "Cloud & Scalable AI Infrastructure",
      description: "GCP-based architectures for AI-enabled products (Cloud Run, pipelines, real-time systems).",
      icon: "Cloud"
    },
    {
      title: "Growth Automation",
      description: "Scaling social media communities through automated content pipelines, AI workflows, and rapid iteration.",
      icon: "TrendingUp"
    },
    {
      title: "Game Development & Engineering",
      description: "Advanced Godot 4 & Unity; building custom engines and real-time multiplayer architecture.",
      icon: "Gamepad2"
    },
    {
      title: "Entrepreneurship in Japan",
      description: "Navigating the Tokyo startup ecosystem, fundraising (grants), and co-founder dynamics.",
      icon: "Lightbulb"
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
      description: "Scaled a social media ecosystem to 50K+ followers, 12K+ Discord members and 20K+ email subscribers. Converted organic growth into 80K+ Beta downloads via automated serverless pipelines.",
      link: {
        text: "More Infos",
        url: "/?page=tinyhoopers"
      }
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
  philosophy: "Reaching your goal is an equation of time and rigorous effort. My role is to help you optimize that equation—staying prepared and refusing to quit until you break through.",
  consultantPhilosophy: "The goal is to bridge the gap between complex technical challenges and market-ready products—fast. For founders launching an MVP, the surest path to success is lean, iterative execution.",
  location: "Tokyo / Remote",
  languages: ["French (Native)", "English (Fluent)", "Japanese (Business)"],
  booking: {
    pocKickoff: "https://cal.eu/papanouel/poc-kickoff",
    discovery: "https://cal.eu/papanouel/30min",
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/papanouel/",
    twitter: "https://twitter.com/papanouel",
    instagram: "https://instagram.com/tinyhoopers",
    email: "mailto:fred.nouel@gmail.com"
  }
};
