// Validation utilities for form inputs

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone) => {
  // Remove all non-digit characters
  const cleanPhone = phone.replace(/\D/g, '');
  // Check if it's a valid length (10-15 digits)
  return cleanPhone.length >= 10 && cleanPhone.length <= 15;
};

export const validateURL = (url) => {
  if (!url) return true; // Optional field
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

export const validateRequired = (value) => {
  return value && value.trim().length > 0;
};

export const validateName = (name) => {
  // Name should be at least 2 characters and contain only letters, spaces, hyphens, and apostrophes
  const nameRegex = /^[a-zA-Z\s\-']{2,}$/;
  return nameRegex.test(name.trim());
};

export const validateLinkedIn = (url) => {
  if (!url) return true; // Optional field
  const linkedinRegex = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-]+\/?$/;
  return linkedinRegex.test(url);
};

export const validateGitHub = (url) => {
  if (!url) return true; // Optional field
  const githubRegex = /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9\-]+\/?$/;
  return githubRegex.test(url);
};

export const getValidationMessage = (field, value) => {
  switch (field) {
    case 'email':
      return validateEmail(value) ? '' : 'Please enter a valid email address';
    case 'phone':
      return validatePhone(value) ? '' : 'Please enter a valid phone number';
    case 'firstname':
    case 'lastname':
      return validateName(value) ? '' : 'Name must be at least 2 characters and contain only letters';
    case 'linkedin':
      return validateLinkedIn(value) ? '' : 'Please enter a valid LinkedIn URL';
    case 'github':
      return validateGitHub(value) ? '' : 'Please enter a valid GitHub URL';
    case 'website':
      return validateURL(value) ? '' : 'Please enter a valid URL';
    default:
      return '';
  }
};
