import type { ProjectItem } from "./types";

export const projects: ProjectItem[] = [
  {
    title: "Hierarchical Metric-Semantic Edge Fusion Navigation System",
    subtitle: "Real-time robotics perception and path planning on embedded edge hardware.",
    technologies: ["NVIDIA Jetson", "ZeroMQ", "TensorRT", "OpenCV", "ESP32", "C++", "Python"],
    highlights: [
      "Implemented distributed microservices on NVIDIA Jetson Orin Nano using ZeroMQ.",
      "Optimized SegFormer and Moondream2 VLM via TensorRT FP16 and llama.cpp quantization.",
      "Designed a custom Semantic Polar Histogram algorithm for reactive path planning.",
      "Built a hardware-level reflex loop with ESP32 and ultrasonic sensors.",
    ],
    metrics: ["35% performance improvement", "30 FPS inference", "20% latency reduction"],
    sceneVariant: "navigation",
  },
  {
    title: "StudySage - AI-Powered Learning Assistant",
    subtitle: "Asynchronous AI pipeline for real-time educational interactions.",
    technologies: ["Python", "LLMs", "Google Cloud APIs", "React.js", "Flask"],
    highlights: [
      "Developed an asynchronous processing pipeline integrating Google Cloud APIs and LLM services.",
      "Enabled responsive real-time interactions for learning assistant workflows.",
    ],
    sceneVariant: "aiFlow",
  },
  {
    title: "Dungeon Escape - FPGA SoC Game",
    subtitle: "Hardware-software co-design game architecture on Zynq-7000.",
    technologies: ["C++", "UART/I2C protocols", "FPGA", "Zynq-7000"],
    highlights: [
      "Designed hardware-software co-design architecture on FPGA SoC.",
      "Integrated custom hardware IP blocks for sensor processing and gameplay responsiveness.",
    ],
    sceneVariant: "fpga",
  },
];
