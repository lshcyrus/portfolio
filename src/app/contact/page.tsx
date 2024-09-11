import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const contactLinks = [
    { name: 'GitHub', url: 'https://github.com/lshcyrus', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/cyrus-lee-shing-hei', icon: FaLinkedin },
    { name: 'Instagram', url: 'https://www.instagram.com/lshcyrus', icon: FaInstagram },
    { name: 'Email', url: 'mailto:cyruslshei@gmail.com', icon: FaEnvelope },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-16 sm:pt-24 p-4 sm:p-8 md:p-16 lg:p-24 dark:bg-gray-900">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        CONTACT ME
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl w-full">
        {contactLinks.map((link, index) => (
          <Link
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <link.icon className="text-2xl mr-3 text-gray-700 dark:text-gray-300" />
            <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{link.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
