import React, { useState, useRef, useEffect } from 'react';
import { FaMinus, FaSquare, FaTimes } from 'react-icons/fa';
import { useWindowManager } from '../hooks/useWindowManager.jsx';

const Window = ({ window, children }) => {
  const { 
    closeWindow, 
    minimizeWindow, 
    maximizeWindow, 
    focusWindow,
    updateWindowPosition,
    updateWindowSize 
  } = useWindowManager();
  
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const windowRef = useRef(null);

  const handleMouseDown = (e) => {
    if (e.target.closest('.window-controls')) return;
    
    focusWindow(window.id);
    setIsDragging(true);
    
    const rect = windowRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, globalThis.innerWidth - 200));
    const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, globalThis.innerHeight - 100));
    
    updateWindowPosition(window.id, { x: newX, y: newY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragOffset]);

  const windowStyle = {
    left: window.isMaximized ? 0 : window.position.x,
    top: window.isMaximized ? 0 : window.position.y,
    width: window.isMaximized ? '100vw' : window.size.width,
    height: window.isMaximized ? 'calc(100vh - 48px)' : window.size.height,
    zIndex: window.zIndex,
    display: window.isMinimized ? 'none' : 'block'
  };

  return (
    <div
      ref={windowRef}
      className="window absolute pointer-events-auto"
      style={windowStyle}
      onClick={() => focusWindow(window.id)}
    >
      {/* Window Header */}
      <div
        className="window-header cursor-move"
        onMouseDown={handleMouseDown}
      >
        <div className="flex items-center">
          <span className="font-medium text-sm">{window.title}</span>
        </div>
        
        <div className="window-controls flex items-center space-x-1">
          <button
            onClick={() => minimizeWindow(window.id)}
            className="w-6 h-6 rounded-full bg-yellow-500 hover:bg-yellow-400 flex items-center justify-center transition-colors"
          >
            <FaMinus className="text-xs text-yellow-900" />
          </button>
          <button
            onClick={() => maximizeWindow(window.id)}
            className="w-6 h-6 rounded-full bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors"
          >
            <FaSquare className="text-xs text-green-900" />
          </button>
          <button
            onClick={() => closeWindow(window.id)}
            className="w-6 h-6 rounded-full bg-red-500 hover:bg-red-400 flex items-center justify-center transition-colors"
          >
            <FaTimes className="text-xs text-red-900" />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="bg-white h-full overflow-auto" style={{ height: 'calc(100% - 40px)' }}>
        {children}
      </div>
    </div>
  );
};

export default Window;