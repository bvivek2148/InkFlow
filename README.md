# ✨ InkFlow - Premium Blog Editor Platform

<div align="center">

![InkFlow Logo](https://img.shields.io/badge/InkFlow-Blog%20Editor-6366f1?style=for-the-badge&logo=feather&logoColor=white)

**A modern, full-stack blog editor with stunning UI/UX and powerful features**

[![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=flat&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express-4.18+-000000?style=flat&logo=express&logoColor=white)](https://expressjs.com/)

[🚀 Live Demo](#) • [📖 Documentation](#getting-started) • [🐛 Report Bug](https://github.com/bvivek2148/InkFlow/issues) • [✨ Request Feature](https://github.com/bvivek2148/InkFlow/issues)

</div>

---

## 🌟 Overview

InkFlow is a premium blog editor platform that combines powerful functionality with stunning visual design. Built with modern web technologies, it offers a seamless writing experience with advanced features like real-time search, smart filtering, and beautiful glass-morphism UI.

## ✨ Key Features

### 🎨 **Beautiful UI/UX Design**
- **Glass-morphism interface** with backdrop blur effects
- **Animated statistics dashboard** showing blog metrics
- **Responsive masonry grid** layout for blog cards
- **Smooth animations** and micro-interactions
- **Dark theme** with elegant gradients

### 📝 **Advanced Editor**
- **Real-time auto-save** every 5 seconds
- **Transparent form inputs** with elegant focus states
- **Tag management** with hashtag-style display
- **Reading time estimates** and word counts
- **Draft and publish** workflow

### 🔍 **Smart Search & Filtering**
- **Instant search** across titles, content, and tags
- **Advanced filtering** by status (Published/Draft)
- **Multiple sorting options** (Newest, Oldest, Title A-Z)
- **Live result counts** and filter summaries
- **Clear filters** functionality

### 📊 **Analytics Dashboard**
- **Statistics cards** showing total blogs, published, drafts, and topics
- **Visual indicators** with color-coded status badges
- **Interactive hover effects** with elevation changes
- **Real-time updates** as you create content

### 🎯 **Enhanced Blog Cards**
- **Status badges** with emojis (🌟 Published, 📝 Draft)
- **Reading time calculations** and word counts
- **Interactive tag system** with hover effects
- **Action buttons** with icons (View, Edit, Delete)
- **Elegant metadata** display

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-4.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Advanced-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-18.0+-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.18+-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0+-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Tools & Libraries
![React Router](https://img.shields.io/badge/React_Router-6.0+-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-7.0+-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-Notifications-FF6B6B?style=for-the-badge)

</div>

### 🎨 **Frontend Technologies**
- **React 18+** - Modern React with hooks and functional components
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing and navigation
- **Custom CSS** - Advanced styling with glass-morphism and animations
- **React Hot Toast** - Beautiful toast notifications

### ⚙️ **Backend Technologies**
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - Elegant MongoDB object modeling
- **CORS** - Cross-origin resource sharing middleware

### 🎯 **Key Libraries & Features**
- **Auto-save functionality** with debounced updates
- **Real-time search** with instant filtering
- **Responsive design** for all device sizes
- **Glass-morphism UI** with backdrop blur effects
- **Smooth animations** and micro-interactions

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v6.0 or higher) - [Local installation](https://docs.mongodb.com/manual/installation/) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download here](https://git-scm.com/)

### ⚡ Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/bvivek2148/InkFlow.git
   cd InkFlow
   ```

2. **Install dependencies**
   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In the server directory, create a .env file
   cd server
   touch .env
   ```

   Add the following to your `.env` file:
   ```env
   # Database
   MONGO_URI=mongodb://localhost:27017/inkflow
   # Or for MongoDB Atlas:
   # MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/inkflow

   # Server
   PORT=5000
   NODE_ENV=development
   ```

4. **Seed the database with sample data** (Optional but recommended)
   ```bash
   cd server
   npm run seed
   ```
   This will populate your database with 12 diverse blog posts across different topics!

5. **Start the development servers**

   **Terminal 1 - Backend:**
   ```bash
   cd server
   npm run dev
   ```

   **Terminal 2 - Frontend:**
   ```bash
   cd client
   npm run dev
   ```

6. **Open your browser**

   Navigate to `http://localhost:5173` and start exploring InkFlow! 🎉

### 🎯 **What You'll See**

After setup, you'll have access to:
- **12 sample blog posts** across various topics (Technology, Travel, Food, Fitness, etc.)
- **Beautiful statistics dashboard** showing your blog metrics
- **Advanced search and filtering** capabilities
- **Responsive design** that works on all devices

## 📡 API Endpoints

### Blog Management
| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `GET` | `/api/blogs` | Get all blogs | Array of blog objects |
| `GET` | `/api/blogs/:id` | Get blog by ID | Single blog object |
| `POST` | `/api/blogs` | Create new blog | Created blog object |
| `PUT` | `/api/blogs/:id` | Update existing blog | Updated blog object |
| `DELETE` | `/api/blogs/:id` | Delete a blog | Success message |

### Specialized Endpoints
| Method | Endpoint | Description | Response |
|--------|----------|-------------|----------|
| `POST` | `/api/blogs/save-draft` | Save or update a draft | Draft blog object |
| `POST` | `/api/blogs/publish` | Publish a blog | Published blog object |
| `GET` | `/api/health` | API health check | Status message |

### Request/Response Examples

**Create a new blog:**
```json
POST /api/blogs
{
  "title": "My Amazing Blog Post",
  "content": "This is the content of my blog...",
  "tags": ["technology", "web-development"],
  "status": "draft"
}
```

**Response:**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "title": "My Amazing Blog Post",
  "content": "This is the content of my blog...",
  "tags": ["technology", "web-development"],
  "status": "draft",
  "createdAt": "2023-09-06T10:30:00.000Z",
  "updatedAt": "2023-09-06T10:30:00.000Z"
}
```

## 📁 Project Structure

```
InkFlow/
├── 📁 client/                   # React Frontend Application
│   ├── 📁 public/               # Static assets
│   ├── 📁 src/
│   │   ├── 📁 assets/           # Images, icons, styles
│   │   │   └── 📁 styles/       # CSS files with glass-morphism
│   │   ├── 📁 components/       # Reusable UI components
│   │   │   ├── Button.jsx       # Enhanced button component
│   │   │   ├── Navbar.jsx       # Navigation with theme toggle
│   │   │   └── ThemeToggle.jsx  # Dark/light theme switcher
│   │   ├── 📁 features/         # Feature-based modules
│   │   │   └── 📁 blog/         # Blog-related components
│   │   │       ├── 📁 components/
│   │   │       │   ├── BlogCard.jsx    # Enhanced blog cards
│   │   │       │   ├── Editor.jsx      # Rich text editor
│   │   │       │   └── TagInput.jsx    # Tag management
│   │   │       └── 📁 pages/
│   │   │           ├── HomePage.jsx    # Dashboard with stats
│   │   │           ├── EditorPage.jsx  # Blog creation/editing
│   │   │           └── ViewBlogPage.jsx # Blog reading view
│   │   ├── 📁 hooks/            # Custom React hooks
│   │   │   └── useDebounce.js   # Debouncing for auto-save
│   │   ├── 📁 services/         # API communication
│   │   │   └── blogService.js   # Blog CRUD operations
│   │   ├── 📁 contexts/         # React contexts
│   │   │   └── ThemeContext.jsx # Theme management
│   │   ├── App.jsx              # Main app component
│   │   └── main.jsx             # Application entry point
│   ├── package.json             # Frontend dependencies
│   └── vite.config.js           # Vite configuration
├── 📁 server/                   # Node.js Backend Application
│   ├── 📁 config/               # Configuration files
│   │   └── db.js                # MongoDB connection
│   ├── 📁 controllers/          # Business logic
│   │   └── blogController.js    # Blog CRUD operations
│   ├── 📁 models/               # Database schemas
│   │   └── Blog.js              # Blog model with Mongoose
│   ├── 📁 routes/               # API route definitions
│   │   └── blogRoutes.js        # Blog-related routes
│   ├── 📁 middleware/           # Custom middleware
│   │   └── errorMiddleware.js   # Error handling
│   ├── 📁 scripts/              # Utility scripts
│   │   ├── seedBlogs.js         # Database seeding script
│   │   └── README.md            # Seeding documentation
│   ├── app.js                   # Express application setup
│   ├── index.js                 # Server entry point
│   └── package.json             # Backend dependencies
├── .gitignore                   # Git ignore rules
├── README.md                    # Project documentation
└── package.json                 # Root package configuration
```

## 🎨 Screenshots & Features

### 📊 **Dashboard with Statistics**
- Beautiful glass-morphism cards showing blog metrics
- Real-time updates as you create content
- Responsive design that adapts to all screen sizes

### 🔍 **Advanced Search & Filtering**
- Instant search across titles, content, and tags
- Smart filtering by status (Published/Draft)
- Multiple sorting options with live result counts

### ✨ **Enhanced Blog Editor**
- Transparent form inputs with elegant focus states
- Real-time auto-save every 5 seconds
- Tag management with hashtag-style display
- Reading time estimates and word counts

### 🎯 **Premium Blog Cards**
- Status badges with emojis and color coding
- Interactive hover effects with elevation
- Action buttons with smooth animations
- Elegant metadata display

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the client application:
   ```bash
   cd client
   npm run build
   ```

2. Deploy the `dist` folder to your preferred platform

### Backend (Railway/Render/Heroku)
1. Set environment variables on your platform:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   NODE_ENV=production
   ```

2. Deploy the `server` directory

### Environment Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost:27017/inkflow` |
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment mode | `development` or `production` |

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### 🐛 **Bug Reports**
Found a bug? Please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)

### ✨ **Feature Requests**
Have an idea? We'd love to hear it! Open an issue with:
- Clear description of the feature
- Use case and benefits
- Any implementation ideas

## 📝 Available Scripts

### Frontend (client/)
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Backend (server/)
```bash
npm run dev          # Start development server with nodemon
npm start            # Start production server
npm run seed         # Populate database with sample data
```

## 🔧 Troubleshooting

### Common Issues

**1. MongoDB Connection Error**
```bash
Error: connect ECONNREFUSED 127.0.0.1:27017
```
- Ensure MongoDB is running locally
- Check your `MONGO_URI` in the `.env` file
- For MongoDB Atlas, verify your connection string and network access

**2. Port Already in Use**
```bash
Error: listen EADDRINUSE :::5000
```
- Change the port in your `.env` file
- Kill the process using the port: `lsof -ti:5000 | xargs kill -9`

**3. Module Not Found**
```bash
Error: Cannot find module 'xyz'
```
- Run `npm install` in both client and server directories
- Delete `node_modules` and `package-lock.json`, then reinstall

## 📚 Learning Resources

### Technologies Used
- [React Documentation](https://reactjs.org/docs)
- [Node.js Documentation](https://nodejs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/)

### Design Inspiration
- [Glass-morphism Design](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)
- [Modern UI/UX Principles](https://material.io/design)

## 🌟 Acknowledgments

- **React Team** for the amazing framework
- **MongoDB** for the flexible database solution
- **Vite** for the lightning-fast build tool
- **Open Source Community** for inspiration and resources

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ by [bvivek2148](https://github.com/bvivek2148)**

⭐ **Star this repository if you found it helpful!** ⭐

[🚀 Live Demo](#) • [📖 Documentation](#getting-started) • [🐛 Issues](https://github.com/bvivek2148/InkFlow/issues) • [💬 Discussions](https://github.com/bvivek2148/InkFlow/discussions)

</div>