import { useEffect, useRef, useCallback } from 'react';
import { saveResumeDraft, getLastSaveTime } from '../utils/localStorage';

// Custom hook for auto-saving resume drafts
const useAutoSave = (data, options = {}) => {
  const {
    delay = 2000, // Auto-save delay in milliseconds
    enabled = true, // Whether auto-save is enabled
    onSave = null, // Callback when save occurs
    onError = null, // Callback when save fails
  } = options;

  const timeoutRef = useRef(null);
  const lastDataRef = useRef(null);
  const isMountedRef = useRef(true);

  // Manual save function
  const saveNow = useCallback(async () => {
    if (!enabled || !data) return false;

    try {
      const success = saveResumeDraft(data);
      if (success && onSave) {
        onSave(new Date().toISOString());
      }
      return success;
    } catch (error) {
      console.error('Auto-save error:', error);
      if (onError) {
        onError(error);
      }
      return false;
    }
  }, [data, enabled, onSave, onError]);

  // Schedule auto-save
  const scheduleAutoSave = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (!enabled || !data) return;

    timeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        saveNow();
      }
    }, delay);
  }, [enabled, data, delay, saveNow]);

  // Effect to handle auto-save when data changes
  useEffect(() => {
    if (!enabled || !data) return;

    // Check if data has actually changed
    const currentDataString = JSON.stringify(data);
    const lastDataString = lastDataRef.current;

    if (currentDataString !== lastDataString) {
      lastDataRef.current = currentDataString;
      scheduleAutoSave();
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [data, enabled, scheduleAutoSave]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isMountedRef.current = false;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Get last save time
  const getLastSave = useCallback(() => {
    return getLastSaveTime();
  }, []);

  // Check if there are unsaved changes
  const hasUnsavedChanges = useCallback(() => {
    if (!data) return false;
    
    const lastSave = getLastSaveTime();
    if (!lastSave) return true;

    const currentDataString = JSON.stringify(data);
    const lastDataString = lastDataRef.current;
    
    return currentDataString !== lastDataString;
  }, [data]);

  return {
    saveNow,
    getLastSave,
    hasUnsavedChanges,
    isAutoSaveEnabled: enabled,
  };
};

export default useAutoSave;
