import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, setTheme, effectiveTheme } = useTheme();

  const themes = [
    { value: 'light', icon: '☀️', label: 'Light' },
    { value: 'dark', icon: '🌙', label: 'Dark' },
    { value: 'system', icon: '💻', label: 'System' }
  ];

  return (
    <div className="relative">
      <div className="flex items-center space-x-1 bg-surface border border-border-color rounded-lg p-1">
        {themes.map(({ value, icon, label }) => (
          <button
            key={value}
            onClick={() => setTheme(value)}
            className={`
              flex items-center space-x-1 px-3 py-1.5 rounded-md text-sm font-medium
              transition-all duration-200 ease-in-out
              ${theme === value 
                ? 'bg-primary text-white shadow-sm' 
                : 'text-text-secondary hover:text-text-primary hover:bg-surface-elevated'
              }
            `}
            title={`Switch to ${label} theme`}
          >
            <span className="text-base">{icon}</span>
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;