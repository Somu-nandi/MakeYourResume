// Local storage utility functions for MakeYourResume

const STORAGE_KEYS = {
  USER: 'makeyourresume_user',
  RESUME_DRAFT: 'makeyourresume_draft',
  THEME_PREFERENCE: 'makeyourresume_theme',
  LAST_SAVE: 'makeyourresume_last_save',
};

// Generic storage functions
export const setItem = (key, value) => {
  try {
    const serializedValue = JSON.stringify(value);
    localStorage.setItem(key, serializedValue);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

export const getItem = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const removeItem = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

export const clearAll = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

// Specific storage functions for the app
export const saveUser = (userData) => {
  return setItem(STORAGE_KEYS.USER, userData);
};

export const getUser = () => {
  return getItem(STORAGE_KEYS.USER);
};

export const removeUser = () => {
  return removeItem(STORAGE_KEYS.USER);
};

export const saveResumeDraft = (resumeData) => {
  const success = setItem(STORAGE_KEYS.RESUME_DRAFT, resumeData);
  if (success) {
    setItem(STORAGE_KEYS.LAST_SAVE, new Date().toISOString());
  }
  return success;
};

export const getResumeDraft = () => {
  return getItem(STORAGE_KEYS.RESUME_DRAFT);
};

export const removeResumeDraft = () => {
  removeItem(STORAGE_KEYS.LAST_SAVE);
  return removeItem(STORAGE_KEYS.RESUME_DRAFT);
};

export const getLastSaveTime = () => {
  return getItem(STORAGE_KEYS.LAST_SAVE);
};

export const saveThemePreference = (theme) => {
  return setItem(STORAGE_KEYS.THEME_PREFERENCE, theme);
};

export const getThemePreference = () => {
  return getItem(STORAGE_KEYS.THEME_PREFERENCE, 'light');
};

// Check if localStorage is available
export const isStorageAvailable = () => {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
};

// Get storage usage info
export const getStorageInfo = () => {
  if (!isStorageAvailable()) {
    return { available: false };
  }

  const keys = Object.values(STORAGE_KEYS);
  const usage = {};
  let totalSize = 0;

  keys.forEach(key => {
    const item = localStorage.getItem(key);
    const size = item ? new Blob([item]).size : 0;
    usage[key] = { size, exists: !!item };
    totalSize += size;
  });

  return {
    available: true,
    totalSize,
    usage,
    keys: keys.length,
  };
};
