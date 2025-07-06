// Application constants for MakeYourResume

export const APP_CONFIG = {
  name: 'MakeYourResume',
  version: '1.0.0',
  description: 'Professional Resume Builder',
  author: 'Soumya',
  year: '2025',
};

export const API_ENDPOINTS = {
  login: process.env.REACT_APP_LOGIN_URL || 'http://localhost:4000/auth/login',
  signup: process.env.REACT_APP_SIGNUP_URL || 'http://localhost:4000/auth/signup',
  generatePDF: '/create-pdf',
  savePDF: '/fetch-pdf',
  saveResume: '/save-resume',
  getResume: '/get-resume',
};

export const VALIDATION_RULES = {
  name: {
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s\-']{2,}$/,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  phone: {
    minLength: 10,
    maxLength: 15,
  },
  url: {
    pattern: /^https?:\/\/.+/,
  },
};

export const FORM_STEPS = {
  PROFILE: 1,
  EDUCATION: 2,
  PROJECTS: 3,
  EXPERIENCE: 4,
  EXTRAS: 5,
};

export const SOCIAL_PLATFORMS = {
  linkedin: {
    name: 'LinkedIn',
    baseUrl: 'https://linkedin.com/in/',
    pattern: /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9\-]+\/?$/,
  },
  github: {
    name: 'GitHub',
    baseUrl: 'https://github.com/',
    pattern: /^https?:\/\/(www\.)?github\.com\/[a-zA-Z0-9\-]+\/?$/,
  },
  twitter: {
    name: 'Twitter',
    baseUrl: 'https://twitter.com/',
    pattern: /^https?:\/\/(www\.)?twitter\.com\/[a-zA-Z0-9_]+\/?$/,
  },
};

export const RESUME_SECTIONS = {
  PERSONAL_INFO: 'Personal Information',
  EDUCATION: 'Education',
  PROJECTS: 'Projects',
  EXPERIENCE: 'Experience',
  SKILLS: 'Skills & Languages',
};

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  AUTH_FAILED: 'Authentication failed. Please try again.',
  VALIDATION_FAILED: 'Please check your input and try again.',
  SAVE_FAILED: 'Failed to save. Please try again.',
  LOAD_FAILED: 'Failed to load data. Please refresh and try again.',
};

export const SUCCESS_MESSAGES = {
  SAVE_SUCCESS: 'Successfully saved!',
  LOGIN_SUCCESS: 'Welcome back!',
  SIGNUP_SUCCESS: 'Account created successfully!',
  PDF_GENERATED: 'Resume PDF generated successfully!',
};
