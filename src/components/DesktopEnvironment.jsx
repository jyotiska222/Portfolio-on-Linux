import React from 'react';
import Desktop from './Desktop';
import Taskbar from './Taskbar';
import WindowManager from './WindowManager';
import { WindowProvider } from '../hooks/useWindowManager.jsx';

const DesktopEnvironment = () => {
  return (
    <WindowProvider>
      <div className="h-screen w-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
        {/* Desktop Background and Icons */}
        <Desktop />
        
        {/* Window Manager for handling open applications */}
        <WindowManager />
        
        {/* Bottom Taskbar */}
        <Taskbar />
      </div>
    </WindowProvider>
  );
};

export default DesktopEnvironment;