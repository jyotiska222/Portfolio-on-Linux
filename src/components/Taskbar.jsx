import React, { useState, useEffect } from 'react';
import { FaUbuntu, FaWifi, FaVolumeUp, FaBatteryFull, FaUser, FaSearch, FaFolder, FaFirefox, FaTerminal, FaCode } from 'react-icons/fa';
import { useWindowManager } from '../hooks/useWindowManager.jsx';
import StartMenu from './StartMenu';

const Taskbar = () => {
  const { windows, activeWindowId, restoreWindow, focusWindow } = useWindowManager();
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Close start menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isStartMenuOpen && !event.target.closest('.start-menu-container')) {
        setIsStartMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isStartMenuOpen]);

  const handleStartMenuToggle = (e) => {
    e.stopPropagation();
    setIsStartMenuOpen(!isStartMenuOpen);
  };

  const handleWindowClick = (window) => {
    if (window.isMinimized) {
      restoreWindow(window.id);
    }
    focusWindow(window.id);
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  };



  return (
    <>
      {/* Start Menu */}
      {isStartMenuOpen && (
        <div className="start-menu-container fixed z-50">
          <StartMenu onClose={() => setIsStartMenuOpen(false)} />
        </div>
      )}

      {/* Taskbar */}
      <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900 bg-opacity-90 backdrop-blur-md border-t border-gray-800 shadow-lg z-40">
        <div className="flex items-center h-full px-1">

          {/* Start Button */}
          <button
            onClick={handleStartMenuToggle}
            className={`h-10 w-12 mx-1 flex items-center justify-center rounded hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-150 ${isStartMenuOpen ? 'bg-gray-700 bg-opacity-70' : ''
              }`}
          >
            <FaUbuntu className="text-orange-500 text-xl" />
          </button>

          {/* Task View Button (Windows key equivalent) */}
          <button className="h-10 w-12 mx-1 flex items-center justify-center rounded hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-150">
            <div className="grid grid-cols-2 gap-0.5">
              <div className="w-1 h-1 bg-gray-300 rounded-sm"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-sm"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-sm"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-sm"></div>
            </div>
          </button>

          {/* Window Buttons */}
          <div className="flex items-center flex-1 px-2">
            {windows.filter(w => !w.isMinimized).map((window) => (
              <button
                key={window.id}
                onClick={() => handleWindowClick(window)}
                className={`h-10 px-3 mx-1 flex items-center rounded hover:bg-gray-700 hover:bg-opacity-50 transition-all duration-150 max-w-48 ${activeWindowId === window.id
                  ? 'bg-gray-700 bg-opacity-50 border-b-2 border-blue-500'
                  : ''
                  }`}
                title={window.title}
              >
                <span className="text-gray-200 text-sm truncate font-normal">
                  {window.title}
                </span>
              </button>
            ))}
          </div>

          {/* System Tray */}
          <div className="flex items-center space-x-1 px-2">


            {/* System Icons */}
            <div className="flex items-center space-x-1 px-2">
              <div className="p-2 hover:bg-gray-700 hover:bg-opacity-40 rounded-md transition-all duration-200 cursor-pointer group">
                <FaWifi className="text-gray-300 text-sm group-hover:text-white group-hover:scale-110 transition-all duration-200" />
              </div>
              <div className="p-2 hover:bg-gray-700 hover:bg-opacity-40 rounded-md transition-all duration-200 cursor-pointer group">
                <FaVolumeUp className="text-gray-300 text-sm group-hover:text-white group-hover:scale-110 transition-all duration-200" />
              </div>
              <div className="p-2 hover:bg-gray-700 hover:bg-opacity-40 rounded-md transition-all duration-200 cursor-pointer group">
                <FaBatteryFull className="text-gray-300 text-sm group-hover:text-white group-hover:scale-110 transition-all duration-200" />
              </div>
            </div>

            {/* Separator */}
            <div className="w-px h-6 bg-gray-600 bg-opacity-50 mx-2"></div>

            {/* Clock */}
            <button className="px-4 py-2 hover:bg-gray-700 hover:bg-opacity-40 rounded-lg transition-all duration-200 group">
              <div className="text-right">
                <div className="text-white text-sm font-medium leading-tight group-hover:text-gray-100 transition-colors duration-200">
                  {formatTime(currentTime)}
                </div>
                <div className="text-gray-400 text-xs leading-tight group-hover:text-gray-300 transition-colors duration-200">
                  {formatDate(currentTime)}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;