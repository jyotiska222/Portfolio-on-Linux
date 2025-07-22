import React from 'react';
import { useWindowManager } from '../hooks/useWindowManager.jsx';
import Window from './Window';
import AboutMeApp from './apps/AboutMeApp';
import ProjectsFolder from './apps/ProjectsFolder';
import ContactApp from './apps/ContactApp';

const WindowManager = () => {
  const { windows } = useWindowManager();

  const getAppComponent = (componentName) => {
    const components = {
      AboutMeApp,
      ProjectsFolder,
      ContactApp
    };
    return components[componentName] || (() => <div>App not found</div>);
  };

  return (
    <div className="absolute inset-0 pointer-events-none">
      {windows.map((window) => {
        const AppComponent = getAppComponent(window.component);
        return (
          <Window
            key={window.id}
            window={window}
          >
            <AppComponent />
          </Window>
        );
      })}
    </div>
  );
};

export default WindowManager;