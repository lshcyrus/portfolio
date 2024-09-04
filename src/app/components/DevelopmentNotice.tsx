'use client'

import React, { useState, useEffect } from 'react';

const DevelopmentNotice = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Hide after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-sm">
      <p className="font-semibold mb-2">Website Under Development</p>
      <p className="text-sm">
        This website is still in development, and the portfolio is being updated. 
        Thank you for your patience!
      </p>
      <button 
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 text-white hover:text-gray-200"
      >
        ✕
      </button>
    </div>
  );
};

export default DevelopmentNotice;