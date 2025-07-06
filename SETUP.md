# Setup Guide for Professional Resume Builder

This guide will help you set up and run the Professional Resume Builder application on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **MongoDB** - You can use either:
  - Local MongoDB installation - [Download here](https://www.mongodb.com/try/download/community)
  - MongoDB Atlas (cloud) - [Sign up here](https://www.mongodb.com/cloud/atlas)
- **Google Cloud Console Account** (for OAuth setup)

## Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API
4. Go to "Credentials" and create OAuth 2.0 Client IDs
5. Add your domain to authorized origins:
   - For development: `http://localhost:3000`
   - For production: your deployed domain
6. Copy the Client ID and Client Secret

## Environment Configuration

1. Copy the `.env.example` file to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Fill in your environment variables in the `.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/resumebuilder
   GOOGLE_CLIENT_ID=your_google_client_id_here
   GOOGLE_CLIENT_SECRET=your_google_client_secret_here
   JWT_SECRET=your_random_jwt_secret_here
   PORT=4000
   ```

3. Create a `.env` file in the `client` folder with:
   ```env
   REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id_here
   REACT_APP_LOGIN_URL=http://localhost:4000/auth/login
   REACT_APP_SIGNUP_URL=http://localhost:4000/auth/signup
   ```

## Installation Steps

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd professional-resume-builder
   ```

2. **Install server dependencies:**
   ```bash
   npm install
   ```

3. **Install client dependencies:**
   ```bash
   npm run client-install
   ```

4. **Start MongoDB** (if using local installation):
   ```bash
   mongod
   ```

## Running the Application

### Development Mode (Recommended)
Run both client and server concurrently:
```bash
npm run dev
```

This will start:
- Backend server on `http://localhost:4000`
- Frontend React app on `http://localhost:3000`

### Production Mode
1. Build the client:
   ```bash
   cd client && npm run build
   ```

2. Start the server:
   ```bash
   npm start
   ```

## Available Scripts

- `npm run dev` - Run both client and server in development mode
- `npm run server` - Run only the backend server
- `npm run client` - Run only the React frontend
- `npm run client-install` - Install client dependencies
- `npm start` - Run the server in production mode

## Troubleshooting

### Common Issues

1. **Port already in use:**
   - Change the PORT in your `.env` file
   - Kill the process using the port: `lsof -ti:4000 | xargs kill -9`

2. **MongoDB connection issues:**
   - Ensure MongoDB is running
   - Check your MONGO_URI in the `.env` file
   - For Atlas, ensure your IP is whitelisted

3. **Google OAuth not working:**
   - Verify your Google Client ID in both `.env` files
   - Check that your domain is added to authorized origins
   - Ensure the Google+ API is enabled

4. **Dependencies issues:**
   - Delete `node_modules` and `package-lock.json`
   - Run `npm install` again
   - For client: `cd client && rm -rf node_modules package-lock.json && npm install`

## Features

- ✅ Google OAuth Authentication
- ✅ Real-time Resume Preview
- ✅ PDF Export
- ✅ Responsive Design
- ✅ Data Persistence
- ✅ Multiple Resume Sections
- ✅ Professional Templates

## Support

If you encounter any issues, please check the troubleshooting section above or create an issue in the repository.
