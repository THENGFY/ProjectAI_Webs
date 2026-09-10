/**
 * ProjectAI — Theme Manager
 * Supports Background 1 (Enterprise Dark) & Background 2 (Warm Editorial Light)
 */
(function() {
  const THEME_KEY = 'projectai_theme';

  function getActiveTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') {
      return saved;
    }
    // Default to Light Mode (Background 2: Warm Editorial Light)
    return 'light';
  }

  function applyTheme(theme) {
    const root = document.documentElement;
    const isDark = theme === 'dark';
    
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Update all theme toggle buttons and icons
    const icons = document.querySelectorAll('.theme-toggle-icon');
    icons.forEach(icon => {
      // In dark mode: show 'light_mode' icon so clicking will switch to light
      // In light mode: show 'dark_mode' icon so clicking will switch to dark
      icon.textContent = isDark ? 'light_mode' : 'dark_mode';
    });

    const buttons = document.querySelectorAll('.theme-toggle-btn');
    buttons.forEach(btn => {
      const tooltip = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      btn.setAttribute('aria-label', tooltip);
      btn.setAttribute('title', tooltip);
    });
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
  }

  // Export to window
  window.toggleProjectAiTheme = toggleTheme;

  // Initialize immediately on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initToggleButtons);
  } else {
    initToggleButtons();
  }

  function initToggleButtons() {
    applyTheme(getActiveTheme());

    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
      btn.removeEventListener('click', handleToggleClick);
      btn.addEventListener('click', handleToggleClick);
    });
  }

  function handleToggleClick(e) {
    e.preventDefault();
    toggleTheme();
  }

  // Cross-tab synchronization
  window.addEventListener('storage', (e) => {
    if (e.key === THEME_KEY && e.newValue) {
      applyTheme(e.newValue);
    }
  });
})();
