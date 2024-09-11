import Link from 'next/link';
import Header from '../components/Header';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

const projects: Project[] = [
  // Add more projects here
  {
    title: "Robotics Control System",
    description: "Effectively collaborated with the project team and developed a control system for robotic arm DOBOT CR5.",
    technologies: ["Python", "ESP32-CAM", "Arduino", "TCP/IP", "Flask WSGI Framework"],
  },
  {
    title: "Peanut KING Education Homepage",
    description: "Redesigned and developed the education homepage for Peanut KING Solution Limited.",
    technologies: ["React", "Next.js", "HTML", "CSS", "JavaScript", "AWS EC2", "Ubuntu", "Docker"],
    link: "https://github.com/lshcyrus/Peanut-King-Solution-Limited-EduHome",
  },
  {
    title: "Peanut KING Education Platform",
    description: "Maintained and developed the online education platform for Peanut KING Solution Limited.",
    technologies: ["React", "Node.js", "JavaScript", "Django", "Python", "HTML", "CSS", "AWS EC2", "Ubuntu"],
    link: "https://peanutkingeducation.com/sign-in.html",
  },
  {
    title: "Uno",
    description: "Replicated the classic game Uno using C++. Implemented the game logic, player interaction, and card shuffling.",
    technologies: ["C++"],
    link: "https://github.com/lshcyrus/Uno",
  }
  
];

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-16 lg:p-24 dark:bg-gray-900">
      <div className="w-full max-w-6xl">
        <Header title="PROJECTS" />
        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-black dark:text-white">{project.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
              <div className="mb-3">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">Technical Skills:</h3>
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {project.link && (
                <Link href={project.link} target="_blank" rel="noopener noreferrer" 
                  className="inline-block text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium mt-2">
                  View Project
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
