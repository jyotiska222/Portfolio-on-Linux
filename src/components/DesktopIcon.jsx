import React from 'react';

const DesktopIcon = ({ icon, isSelected, onClick, onDoubleClick }) => {
  const IconComponent = icon.icon;

  return (
    <div
      className={`desktop-icon absolute select-none ${isSelected ? 'bg-blue-500 bg-opacity-30 border border-blue-400' : ''
        }`}
      style={{
        left: icon.position.x,
        top: icon.position.y,
        width: '80px',
        height: '80px'
      }}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      <div className="flex flex-col items-center justify-center h-full text-white">
        <IconComponent className="text-3xl mb-1" />
        <span className="text-xs text-center leading-tight px-1">
          {icon.name}
        </span>
      </div>
    </div>
  );
};

export default DesktopIcon;