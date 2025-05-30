import { Link } from 'react-router-dom'
import { useState } from 'react'
import { blogService } from '../../../services/blogService'
import toast from 'react-hot-toast'

export default function BlogCard({ blog, type, onDelete }) {
  const { _id, title, content, tags, updatedAt } = blog
  const [isDeleting, setIsDeleting] = useState(false)
  const [showConfirmDialog, setShowConfirmDialog] = useState(false)

  // Format date
  const formattedDate = new Date(updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  // Truncate content for preview
  const previewContent = content.length > 120
    ? content.substring(0, 120) + '...'
    : content

  const handleDeleteClick = () => {
    setShowConfirmDialog(true)
  }

  const handleConfirmDelete = async () => {
    setIsDeleting(true)
    try {
      await blogService.deleteBlog(_id)
      toast.success(`${type === 'draft' ? 'Draft' : 'Blog'} deleted successfully`)
      onDelete(_id) // Notify parent component to remove from list
    } catch (error) {
      console.error('Error deleting blog:', error)
      toast.error('Failed to delete blog')
    } finally {
      setIsDeleting(false)
      setShowConfirmDialog(false)
    }
  }

  const handleCancelDelete = () => {
    setShowConfirmDialog(false)
  }

  return (
    <div className={`blog-card ${type}`}>
      {/* Status Badge */}
      <div className="blog-status-badge">
        <span className={`status-indicator ${type}`}>
          {type === 'published' ? '🌟 Published' : '📝 Draft'}
        </span>
      </div>

      <div className="blog-card-content">
        <h3 className="blog-card-title">
          {title || 'Untitled Draft'}
        </h3>

        <p className="blog-card-preview">
          {previewContent || 'No content yet'}
        </p>

        {tags.length > 0 && (
          <div className="blog-card-tags">
            {tags.slice(0, 3).map(tag => (
              <span key={tag} className="tag">
                #{tag}
              </span>
            ))}
            {tags.length > 3 && (
              <span className="tag more-tag">
                +{tags.length - 3} more
              </span>
            )}
          </div>
        )}

        {/* Reading Time Estimate */}
        <div className="blog-meta">
          <span className="reading-time">
            📖 {Math.max(1, Math.ceil(content.length / 1000))} min read
          </span>
          <span className="word-count">
            {content.split(' ').length} words
          </span>
        </div>
      </div>
      
      <div className="blog-card-footer">
        <div className="footer-info">
          <span className="last-updated">
            🕒 {formattedDate}
          </span>
        </div>

        <div className="blog-card-actions">
          <Link
            to={`/blog/${_id}`}
            className="action-btn view-btn"
            title="View blog"
          >
            <span className="btn-icon">👁️</span>
            <span className="btn-text">View</span>
          </Link>

          <Link
            to={`/editor/${_id}`}
            className="action-btn edit-btn"
            title="Edit blog"
          >
            <span className="btn-icon">✏️</span>
            <span className="btn-text">Edit</span>
          </Link>

          <button
            onClick={handleDeleteClick}
            className="action-btn delete-btn"
            disabled={isDeleting}
            title="Delete blog"
          >
            <span className="btn-icon">🗑️</span>
            <span className="btn-text">
              {isDeleting ? 'Deleting...' : 'Delete'}
            </span>
          </button>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Confirm Delete</h3>
            <p>
              Are you sure you want to delete this {type === 'draft' ? 'draft' : 'blog'}?
              <br />
              <strong>"{title || 'Untitled'}"</strong>
            </p>
            <p className="warning-text">This action cannot be undone.</p>

            <div className="confirm-dialog-actions">
              <button
                onClick={handleCancelDelete}
                className="cancel-button"
                disabled={isDeleting}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="confirm-delete-button"
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
