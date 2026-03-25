import type { ExperienceItem } from "./types";

export const experiences: ExperienceItem[] = [
  {
    company: "Hong Kong Centre for Logistics Robotics",
    role: "Engineer Intern",
    period: "May 2025 - Present",
    highlights: [
      "Developed a high-performance bilingual corporate site with Next.js 15 and Strapi CMS.",
      "Integrated three.js interactions and SSR-oriented architecture to improve engagement and SEO.",
      "Containerized full stack deployment with Docker and automated CI/CD through GitHub Actions.",
    ],
    technologies: [
      "Next.js 15",
      "Strapi",
      "Three.js",
      "Docker",
      "GitHub Actions",
      "CI/CD",
    ],
  },
  {
    company: "Fase Technology Group Limited",
    role: "Robotics Engineer Intern",
    period: "Jun 2024 - Oct 2024",
    highlights: [
      "Developed kinematic control algorithms for DOBOT and AUBO robotic arms using Python and C++.",
      "Engineered a real-time computer vision pipeline on NVIDIA Jetson Nano with TensorRT and achieved over 90% detection accuracy.",
      "Implemented TCP/IP socket communication between edge devices and microcontrollers for synchronized actuation.",
    ],
    technologies: [
      "Python",
      "C++",
      "NVIDIA Jetson Nano",
      "TensorRT",
      "TCP/IP",
      "OpenCV",
    ],
  },
  {
    company: "Peanut KING Solution Limited",
    role: "Software Engineer Intern",
    period: "Jun 2023 - May 2024",
    highlights: [
      "Developed and deployed an educational platform using React.js 18, Django, Docker, and AWS EC2.",
      "Supported 10+ schools and educational institutions with over 200 students.",
      "Improved maintainability and delivery cadence through practical full-stack engineering workflows.",
    ],
    technologies: ["React.js", "Django", "Docker", "AWS EC2", "Linux", "JavaScript"],
  },
];
