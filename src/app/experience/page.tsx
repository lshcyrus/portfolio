import React from 'react';

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Robot Engineer Intern",
    company: "Fase Technology Group Limited",
    duration: "June 2024 - September 2024",
    description: [
      "Collaborated with the project team and developed a control system for robotic arm DOBOT CR5 using Python and Flask WSGI Framework, together with usage of SenseTime SensePower and ESP32-CAM for object detection and image recognition.",
      "Implemented a TCP/IP communication protocol between the robotic arm and the ESP32-CAM for real-time data transmission and control using Python, Lua and Arduino IDE.",
      "Utilized NVIDIA Jetson Nano for real-time video processing and object detection, achieving over 90% accuracy in object recognition tasks.",
    ],
    technologies: ["Python", "TCP/IP", "Flask WSGI Framework", "Arduino", "ESP32-CAM", "Lua", "C++", "NVIDIA Jetson Nano", "NVIDIA CUDA", "NVIDIA TensorRT", "PyTorch"]
  },
  {
    title: "Software Engineer Intern",
    company: "Peanut KING Solution Limited",
    duration: "April 2024 - May 2024",
    description: [
      "Partnered efficiently with the marketing team and performed Search Engine Optimization (SEO) by renewing interface of home page using Next.js, resulting in an 18% increase in the number of new users",
      "Implemented Google Analytics to track user behavior and optimize website performance",
    ],
    technologies: ["React", "Node.js", "JavaScript", "Next.js", "HTML", "CSS", "Docker"]
  },
  {
    title: "Software Engineer Intern",
    company: "Peanut KING Solution Limited",
    duration: "June 2023 - September 2023",
    description: [
      "Redesigned and implemented 3 front-end of online education platform: Dashboard, Student panel and Admin panel using React.js, HTML and CSS",
      "Maintained back-end of online education platform using Python, Django and AWS Linux 2, successfully addressed and solved 2 previous back-end issues",
      "Collaborated effectively with the teaching team and implemented Wall following algorithm for autonomous robotic maze car using Arduino IDE",
      "Assisted in HKU Engineering Academy For the Talented 2023 and conducted Arduino code reviews for over 50 participants from diverse backgrounds",
    ],
    technologies: ["React", "Node.js", "JavaScript", "Django"]
  }
];

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          EXPERIENCE
        </h1>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-gray-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-blue-600 after:border-2 after:box-content after:border-gray-200 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
                  {exp.duration.split(' - ')[0]}
                </time>
                <div className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</div>
              </div>
              <div className="text-gray-800 dark:text-gray-200">{exp.company}</div>
              <div className="text-gray-600 dark:text-gray-400 mb-2">{exp.duration}</div>
              <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;