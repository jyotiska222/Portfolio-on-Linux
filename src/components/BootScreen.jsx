import React, { useState, useEffect } from 'react';
import { bootMessages } from '../data/bootMessages';

const BootScreen = ({ onBootComplete }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentMessageIndex >= bootMessages.length) {
      setIsComplete(true);
      setTimeout(() => {
        onBootComplete();
      }, 1500);
      return;
    }

    const currentMessage = bootMessages[currentMessageIndex];
    const timer = setTimeout(() => {
      setDisplayedMessages(prev => [...prev, currentMessage.text]);
      setCurrentMessageIndex(prev => prev + 1);
      setProgress(((currentMessageIndex + 1) / bootMessages.length) * 100);
    }, currentMessage.delay);

    return () => clearTimeout(timer);
  }, [currentMessageIndex, onBootComplete]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-8 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        {/* <div className="mb-8">
          <h1 className="text-2xl font-bold mb-2">Linux Portfolio OS v1.0</h1>
          <p className="text-green-300">Copyright (C) 2025 Portfolio Systems</p>
          <div className="border-t border-green-600 mt-4 pt-4">
            <p className="text-sm">Booting from /dev/portfolio...</p>
          </div>
        </div> */}

        {/* Boot Messages */}
        <div className="space-y-1 mb-8 min-h-[300px]">
          {displayedMessages.map((message, index) => (
            <div key={index} className="flex items-center">
              <span className="text-green-500 mr-2">[</span>
              <span className="text-blue-400 mr-2">OK</span>
              <span className="text-green-500 mr-2">]</span>
              <span className="text-green-300">{message}</span>
            </div>
          ))}

          {/* Cursor */}
          {!isComplete && (
            <div className="flex items-center">
              <span className="animate-pulse">█</span>
            </div>
          )}
        </div>

        {/* Progress Bar */}

        {/* Boot Steps */}


        {/* Completion Message */}
      </div>
    </div>
  );
};

export default BootScreen;