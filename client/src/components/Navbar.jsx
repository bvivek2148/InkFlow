import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          InkFlow
        </Link>

        <div className="navbar-actions">
          <div className="navbar-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/editor" className="nav-link">
              New Blog
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

