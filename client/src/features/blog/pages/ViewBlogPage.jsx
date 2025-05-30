import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { blogService } from '../../../services/blogService';
import Button from '../../../components/Button';
import toast from 'react-hot-toast';

export default function ViewBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const data = await blogService.getBlogById(id);
        setBlog(data);
      } catch (error) {
        console.error('Error fetching blog:', error);
        toast.error('Failed to load blog');
        navigate('/', { replace: true });
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlog();
  }, [id, navigate]);

  const handleDeleteClick = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmDelete = async () => {
    setIsDeleting(true);
    try {
      await blogService.deleteBlog(id);
      toast.success(`${blog.status === 'draft' ? 'Draft' : 'Blog'} deleted successfully`);
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error deleting blog:', error);
      toast.error('Failed to delete blog');
    } finally {
      setIsDeleting(false);
      setShowConfirmDialog(false);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmDialog(false);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading blog...</p>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="empty-state">
        <h2>Blog not found</h2>
        <p>The blog you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="back-link">
          Back to Home
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(blog.updatedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="blog-view-page">
      <article className="blog-article">
        <header className="blog-header">
          <h1>{blog.title}</h1>
          <div className="blog-meta">
            <span>Last updated: {formattedDate}</span>
            <div className="blog-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <div className="blog-content">
          {blog.content.split('\n').map((paragraph, index) => (
            paragraph ? <p key={index}>{paragraph}</p> : <br key={index} />
          ))}
        </div>

        <footer className="blog-footer">
          <div className="blog-actions">
            <Link to="/" className="back-link">
              Back to Home
            </Link>
            <div className="action-buttons">
              <Link to={`/editor/${blog._id}`} className="edit-link">
                Edit Blog
              </Link>
              <button
                onClick={handleDeleteClick}
                className="delete-button"
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </footer>
      </article>

      {/* Confirmation Dialog */}
      {showConfirmDialog && (
        <div className="confirm-dialog-overlay">
          <div className="confirm-dialog">
            <h3>Confirm Delete</h3>
            <p>
              Are you sure you want to delete this {blog.status === 'draft' ? 'draft' : 'blog'}?
              <br />
              <strong>"{blog.title || 'Untitled'}"</strong>
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
  );
}

