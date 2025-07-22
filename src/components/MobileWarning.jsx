import React from 'react';
import { FaDesktop, FaTabletAlt } from 'react-icons/fa';

const MobileWarning = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-6">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center space-x-4 mb-6">
            <FaDesktop className="text-4xl text-blue-400" />
            <FaTabletAlt className="text-4xl text-blue-400" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-4">
            Desktop Experience Required
          </h1>
          <p className="text-gray-300 leading-relaxed">
            This portfolio is designed to simulate a Linux desktop environment 
            and is optimized for desktop and tablet viewing only.
          </p>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-lg font-semibold text-white mb-3">
            For the best experience:
          </h2>
          <ul className="text-gray-300 text-left space-y-2">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Visit on a desktop computer
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Use a tablet in landscape mode
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Ensure screen width is at least 768px
            </li>
          </ul>
        </div>
        
        <div className="mt-6 text-sm text-gray-400">
          <p>Thank you for your understanding!</p>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;