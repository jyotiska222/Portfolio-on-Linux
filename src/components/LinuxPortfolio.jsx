import React, { useState, useEffect } from 'react';
import { useDeviceDetection } from '../hooks/useDeviceDetection';
import MobileWarning from './MobileWarning';
import BootScreen from './BootScreen';
import DesktopEnvironment from './DesktopEnvironment';

const LinuxPortfolio = () => {
  const { isSupported } = useDeviceDetection();
  const [currentScreen, setCurrentScreen] = useState('boot');

  useEffect(() => {
    // Ensure Linux portfolio has the correct overflow settings
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.documentElement.style.height = '100%'
    document.body.style.height = '100%'
    document.documentElement.style.scrollBehavior = 'auto'
    
    // Cleanup function
    return () => {
      // Don't reset here as it might interfere with portfolio switching
    }
  }, [])

  const handleBootComplete = () => {
    setCurrentScreen('desktop');
  };

  // Show mobile warning for unsupported devices
  if (!isSupported) {
    return <MobileWarning />;
  }

  // Show boot screen first, then desktop
  if (currentScreen === 'boot') {
    return <BootScreen onBootComplete={handleBootComplete} />;
  }

  return <DesktopEnvironment />;
};

export default LinuxPortfolio;