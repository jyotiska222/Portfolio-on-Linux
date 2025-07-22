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
  }, [currentMessageIndex, onBootComplete, setProgress]);

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono overflow-hidden">
      <div className="p-4">

        {/* Boot Messages */}
        <div className="space-y-1 min-h-[300px]">
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
      </div>
    </div>
  );
};

export default BootScreen;