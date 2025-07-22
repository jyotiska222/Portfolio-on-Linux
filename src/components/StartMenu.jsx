import React from 'react';
import { FaUser, FaFolder, FaGithub, FaLinkedin, FaEnvelope, FaCog, FaPowerOff } from 'react-icons/fa';
import { useWindowManager } from '../hooks/useWindowManager.jsx';
import { desktopIcons } from '../data/desktopIcons';

const StartMenu = ({ onClose }) => {
    const { openWindow } = useWindowManager();

    const handleAppClick = (app) => {
        if (app.type === 'link') {
            window.open(app.url, '_blank');
        } else {
            openWindow({
                id: app.id,
                title: app.name,
                component: app.component,
                size: app.id === 'projects' ? { width: 900, height: 700 } : { width: 800, height: 600 }
            });
        }
        onClose();
    };

    return (
        <div className="absolute bottom-12 left-2 w-80 bg-gray-800 border border-gray-600 rounded-lg shadow-2xl z-50">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                        <FaUser className="text-lg" />
                    </div>
                    <div>
                        <div className="font-semibold">Portfolio User</div>
                        <div className="text-sm opacity-90">Developer & Designer</div>
                    </div>
                </div>
            </div>

            {/* Applications */}
            <div className="p-4">
                <h3 className="text-gray-300 text-sm font-semibold mb-3">Applications</h3>
                <div className="space-y-1">
                    {desktopIcons.map((app) => {
                        const IconComponent = app.icon;
                        return (
                            <button
                                key={app.id}
                                onClick={() => handleAppClick(app)}
                                className="w-full flex items-center p-2 rounded hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                            >
                                <IconComponent className="text-lg mr-3" />
                                <div className="text-left">
                                    <div className="text-sm font-medium">{app.name}</div>
                                    <div className="text-xs text-gray-400 capitalize">{app.type}</div>
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-600 p-2">
                <div className="flex justify-between">
                    <button className="flex items-center px-3 py-2 rounded hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                        <FaCog className="mr-2" />
                        <span className="text-sm">Settings</span>
                    </button>
                    <button className="flex items-center px-3 py-2 rounded hover:bg-gray-700 text-gray-400 hover:text-white transition-colors">
                        <FaPowerOff className="mr-2" />
                        <span className="text-sm">Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StartMenu;