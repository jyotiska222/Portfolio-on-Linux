import React, { createContext, useContext, useReducer } from 'react';

const WindowContext = createContext();

const windowReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_WINDOW':
      const newWindow = {
        id: action.payload.id || Date.now().toString(),
        title: action.payload.title,
        component: action.payload.component,
        position: action.payload.position || { x: 100, y: 100 },
        size: action.payload.size || { width: 800, height: 600 },
        isMinimized: false,
        isMaximized: false,
        zIndex: Math.max(...state.windows.map(w => w.zIndex), 0) + 1
      };
      return {
        ...state,
        windows: [...state.windows, newWindow],
        activeWindowId: newWindow.id
      };

    case 'CLOSE_WINDOW':
      return {
        ...state,
        windows: state.windows.filter(w => w.id !== action.payload.id),
        activeWindowId: state.activeWindowId === action.payload.id 
          ? state.windows.find(w => w.id !== action.payload.id)?.id || null
          : state.activeWindowId
      };

    case 'MINIMIZE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(w => 
          w.id === action.payload.id 
            ? { ...w, isMinimized: true }
            : w
        )
      };

    case 'MAXIMIZE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(w => 
          w.id === action.payload.id 
            ? { ...w, isMaximized: !w.isMaximized, isMinimized: false }
            : w
        )
      };

    case 'RESTORE_WINDOW':
      return {
        ...state,
        windows: state.windows.map(w => 
          w.id === action.payload.id 
            ? { ...w, isMinimized: false }
            : w
        )
      };

    case 'FOCUS_WINDOW':
      const maxZ = Math.max(...state.windows.map(w => w.zIndex), 0);
      return {
        ...state,
        windows: state.windows.map(w => 
          w.id === action.payload.id 
            ? { ...w, zIndex: maxZ + 1 }
            : w
        ),
        activeWindowId: action.payload.id
      };

    case 'UPDATE_WINDOW_POSITION':
      return {
        ...state,
        windows: state.windows.map(w => 
          w.id === action.payload.id 
            ? { ...w, position: action.payload.position }
            : w
        )
      };

    case 'UPDATE_WINDOW_SIZE':
      return {
        ...state,
        windows: state.windows.map(w => 
          w.id === action.payload.id 
            ? { ...w, size: action.payload.size }
            : w
        )
      };

    default:
      return state;
  }
};

export const WindowProvider = ({ children }) => {
  const [state, dispatch] = useReducer(windowReducer, {
    windows: [],
    activeWindowId: null
  });

  const openWindow = (windowConfig) => {
    dispatch({ type: 'OPEN_WINDOW', payload: windowConfig });
  };

  const closeWindow = (id) => {
    dispatch({ type: 'CLOSE_WINDOW', payload: { id } });
  };

  const minimizeWindow = (id) => {
    dispatch({ type: 'MINIMIZE_WINDOW', payload: { id } });
  };

  const maximizeWindow = (id) => {
    dispatch({ type: 'MAXIMIZE_WINDOW', payload: { id } });
  };

  const restoreWindow = (id) => {
    dispatch({ type: 'RESTORE_WINDOW', payload: { id } });
  };

  const focusWindow = (id) => {
    dispatch({ type: 'FOCUS_WINDOW', payload: { id } });
  };

  const updateWindowPosition = (id, position) => {
    dispatch({ type: 'UPDATE_WINDOW_POSITION', payload: { id, position } });
  };

  const updateWindowSize = (id, size) => {
    dispatch({ type: 'UPDATE_WINDOW_SIZE', payload: { id, size } });
  };

  return (
    <WindowContext.Provider value={{
      windows: state.windows,
      activeWindowId: state.activeWindowId,
      openWindow,
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      restoreWindow,
      focusWindow,
      updateWindowPosition,
      updateWindowSize
    }}>
      {children}
    </WindowContext.Provider>
  );
};

export const useWindowManager = () => {
  const context = useContext(WindowContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowProvider');
  }
  return context;
};