import React, { useState } from 'react';
import { desktopIcons } from '../data/desktopIcons';
import DesktopIcon from './DesktopIcon';
import { useWindowManager } from '../hooks/useWindowManager.jsx';
import wallpaper from '../assets/ubuntu-22-04-jammy-jellyfish-wallpaper-800x450.jpg';

const Desktop = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const { openWindow } = useWindowManager();

  const handleIconClick = (iconId) => {
    setSelectedIcon(iconId);
  };

  const handleIconDoubleClick = (icon) => {
    if (icon.type === 'link') {
      window.open(icon.url, '_blank');
    } else if (icon.component) {
      openWindow({
        id: icon.id,
        title: icon.name,
        component: icon.component,
        size: icon.id === 'projects' ? { width: 900, height: 700 } : { width: 800, height: 600 }
      });
    }
    setSelectedIcon(null);
  };

  const handleDesktopClick = (e) => {
    if (e.target === e.currentTarget) {
      setSelectedIcon(null);
    }
  };

  return (
    <div 
      className="absolute inset-0"
      onClick={handleDesktopClick}
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Desktop Icons */}
      {desktopIcons.map((icon) => (
        <DesktopIcon
          key={icon.id}
          icon={icon}
          isSelected={selectedIcon === icon.id}
          onClick={() => handleIconClick(icon.id)}
          onDoubleClick={() => handleIconDoubleClick(icon)}
        />
      ))}
      
      {/* Desktop Context Menu could be added here */}
    </div>
  );
};

export default Desktop;