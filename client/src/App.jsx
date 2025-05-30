import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import HomePage from './features/blog/pages/HomePage'
import EditorPage from './features/blog/pages/EditorPage'
import ViewBlogPage from './features/blog/pages/ViewBlogPage'
import './assets/styles/App.css'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/editor" element={<EditorPage />} />
            <Route path="/editor/:id" element={<EditorPage />} />
            <Route path="/blog/:id" element={<ViewBlogPage />} />
          </Routes>
        </main>
        <Toaster position="bottom-right" />
      </div>
    </ThemeProvider>
  )
}

export default App