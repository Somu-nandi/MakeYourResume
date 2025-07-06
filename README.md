# Professional Resume Builder

![Made-With-React](https://img.shields.io/badge/Made_with-React-informational?style=for-the-badge&logo=react) ![Made-With-NodeJS](https://img.shields.io/badge/Made_with-NodeJS-informational?style=for-the-badge&logo=javascript) ![Made-With-Material_UI](https://img.shields.io/badge/Made_with-Material_UI-informational?style=for-the-badge&logo=material-ui)

A modern, responsive resume builder application that helps users create professional resumes with ease. Built with React.js frontend and Node.js backend.

## ✨ Features

- **Interactive Resume Builder**: Create professional resumes with a user-friendly interface
- **Google Authentication**: Secure login and session management
- **Real-time Preview**: See changes instantly as you build your resume
- **PDF Export**: Download your resume as a PDF file
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Data Persistence**: Save your progress and resume data
- **Multiple Templates**: Choose from various professional resume layouts

## 🚀 Technologies Used

- **Frontend**: React.js, Material-UI, React Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Google OAuth
- **Styling**: CSS3, Bootstrap, Material-UI
- **PDF Generation**: HTML-PDF library

## 📋 Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd resume-builder
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   npm run client-install
   ```

4. **Environment Variables**
   - Create a `.env` file in the root directory
   - Add your MongoDB connection string and Google OAuth credentials
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   JWT_SECRET=your_jwt_secret
   ```

5. **Run the application**
   ```bash
   # Run both client and server concurrently
   npm run dev

   # Or run them separately:
   # Server only (runs on http://localhost:4000)
   npm run server

   # Client only (runs on http://localhost:3000)
   npm run client
   ```

## 📱 Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Sign in with your Google account
3. Start building your resume by filling in your information
4. Preview your resume in real-time
5. Download your completed resume as a PDF

## 🏗️ Project Structure

```
resume-builder/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── hooks/          # Custom hooks
│   │   └── static/         # Static assets
│   └── package.json
├── server.js              # Express server
├── package.json           # Server dependencies
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Material-UI for the beautiful component library
- React community for excellent documentation
- Google for OAuth integration

---

<div align="center">
  <p>Built with ❤️ using React and Node.js</p>
</div>
