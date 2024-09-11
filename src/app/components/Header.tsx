import React from 'react';

const Header = ({ title }: { title: string }) => {
  return (
    <header className="py-6 mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100 text-center">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
