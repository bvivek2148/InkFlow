# InkFlow - Blog Editor Application

A full-stack blog editor application with auto-save functionality.

## Features

- Create, edit, and publish blog posts
- Auto-save drafts after 5 seconds of inactivity
- Tag management for blogs
- Separate views for published blogs and drafts
- Responsive design for all devices

## Tech Stack

### Frontend
- React.js
- React Router for navigation
- CSS for styling
- React Hot Toast for notifications

### Backend
- Node.js with Express
- MongoDB with Mongoose
- RESTful API architecture

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/inkflow.git
cd inkflow
```

2. Install dependencies
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables
- Create a `.env` file in the root directory based on the `.env.example` file

4. Start the development servers
```bash
# Start the backend server
cd server
npm run dev

# Start the frontend server in a new terminal
cd client
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/blogs | Get all blogs |
| GET | /api/blogs/:id | Get blog by ID |
| POST | /api/blogs/save-draft | Save or update a draft |
| POST | /api/blogs/publish | Publish a blog |
| DELETE | /api/blogs/:id | Delete a blog |

## Project Structure

```
inkflow/
├── client/                      # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/              # Static assets (images, icons)
│       ├── components/          # Reusable UI components
│       ├── features/            # Feature-based modules
│       ├── hooks/               # Custom React hooks
│       ├── services/            # API services
│       ├── utils/               # Helper functions
│       ├── App.jsx
│       └── main.jsx             # Entry point
├── server/                      # Node.js Backend
│   ├── config/                  # DB connection, constants
│   ├── controllers/             # Business logic
│   ├── models/                  # Mongoose schemas
│   ├── routes/                  # API endpoints
│   ├── middleware/              # Custom middleware
│   ├── utils/                   # Helper functions
│   ├── app.js                   # Express app
│   └── index.js                 # Entry point
```

## License
MIT