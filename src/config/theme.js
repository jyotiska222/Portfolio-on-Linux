// Theme configuration objects for color schemes
export const themeConfig = {
  light: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#8B5CF6',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    surfaceElevated: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    textMuted: '#9CA3AF',
    border: '#E5E7EB',
    borderLight: '#F3F4F6',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6'
  },
  dark: {
    primary: '#60A5FA',
    secondary: '#34D399',
    accent: '#A78BFA',
    background: '#0F172A',
    surface: '#1E293B',
    surfaceElevated: '#334155',
    text: '#F1F5F9',
    textSecondary: '#94A3B8',
    textMuted: '#64748B',
    border: '#334155',
    borderLight: '#475569',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171',
    info: '#60A5FA'
  }
};

// CSS custom properties mapping
export const getCSSVariables = (theme) => {
  const colors = themeConfig[theme];
  const cssVars = {};
  
  Object.entries(colors).forEach(([key, value]) => {
    cssVars[`--color-${key}`] = value;
  });
  
  return cssVars;
};

// Utility function to get theme colors
export const getThemeColors = (theme) => themeConfig[theme];