import type { ActivityItem, EducationItem, SkillCategory } from "./types";

export const profile = {
  name: "Lee Shing Hei, Cyrus",
  role: "Full Stack Engineer | Robotics & AI Specialist",
  slogan:
    "Crafting innovative solutions at the intersection of software, robotics, and AI.",
  introduction:
    "Computer Engineering student at CUHK focused on production-ready software, intelligent robotic systems, and scalable cloud-native deployment.",
  about:
    "I build high-performance, user-centric systems by combining full-stack engineering with applied AI and embedded robotics. My work spans web platforms, computer vision pipelines on edge devices, and real-time control architectures.",
  contact: {
    email: "cyruslshei@gmail.com",
    phone: "+852-68026678",
    linkedin: "https://www.linkedin.com/in/cyrus-lee-shing-hei",
    github: "https://github.com/lshcyrus",
    resumePath: "/resume.pdf",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Languages",
    items: ["JavaScript/TypeScript", "C++", "Python", "SQL", "Bash"],
  },
  {
    title: "Robotics & AI",
    items: [
      "PyTorch",
      "TensorFlow",
      "TensorRT",
      "YOLOv8",
      "OpenCV",
      "ROS (Fundamental)",
      "LLM/VLM Integration",
    ],
  },
  {
    title: "Embedded System",
    items: [
      "NVIDIA Jetson (Orin/Nano)",
      "ESP32",
      "Arduino",
      "UART/I2C protocols",
      "FPGA (Zynq-7000)",
    ],
  },
  {
    title: "Software & Infrastructure",
    items: [
      "Docker",
      "Linux (Ubuntu)",
      "ZeroMQ",
      "React.js/Next.js",
      "Django",
      "Flask",
      "PostgreSQL",
      "Git",
      "CI/CD",
    ],
  },
];

export const education: EducationItem[] = [
  {
    school: "The Chinese University of Hong Kong",
    degree: "Bachelor of Engineering in Computer Engineering",
    period: "Expected May 2026",
    achievements: [
      "CUHK Faculty of Engineering Admission Scholarship",
      "Professor Charles K. Kao Student Creativity Award (PCKKSCA) 2025 - Undergraduate Group Champion",
    ],
  },
];

export const activities: ActivityItem[] = [
  {
    team: "CUHK Robocon Team",
    role: "Core Member",
    period: "Sep 2024 - Present",
    highlights: [
      "Implemented YOLOv8-based computer vision on NVIDIA Jetson platforms for semi-autonomous competition robots.",
      "Collaborated on sensor fusion strategies and robotics system integration.",
      "Contributed to prototyping and tuning with C++, Raspberry Pi, Arduino Due, and VESC Tool.",
    ],
  },
];
