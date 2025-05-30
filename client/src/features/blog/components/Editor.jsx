import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { blogService } from '../../../services/blogService'
import { useDebounce } from '../../../hooks/useDebounce'
import Button from '../../../components/Button'
import TagInput from './TagInput'
import toast from 'react-hot-toast'

export default function Editor({ initialBlog, blogId }) {
  const navigate = useNavigate()
  const [blog, setBlog] = useState(initialBlog || {
    title: '',
    content: '',
    tags: []
  })
  const [isSaving, setIsSaving] = useState(false)
  const [lastSaved, setLastSaved] = useState(null)

  // Debounce blog changes for auto-save
  const debouncedBlog = useDebounce(blog, 5000)

  // Auto-save effect
  useEffect(() => {
    // Skip initial render and empty content
    if (!debouncedBlog.title && !debouncedBlog.content) return
    
    const autoSave = async () => {
      if (!isSaving && (debouncedBlog.title || debouncedBlog.content)) {
        await handleSaveDraft(true)
      }
    }
    
    autoSave()
  }, [debouncedBlog])

  const handleChange = (e) => {
    const { name, value } = e.target
    setBlog(prev => ({ ...prev, [name]: value }))
  }

  const handleTagsChange = (tags) => {
    setBlog(prev => ({ ...prev, tags }))
  }

  const handleSaveDraft = async (isAutoSave = false) => {
    setIsSaving(true)
    try {
      const savedBlog = await blogService.saveDraft({
        ...blog,
        id: blogId || undefined
      })
      
      setLastSaved(new Date())
      
      if (!blogId) {
        navigate(`/editor/${savedBlog._id}`, { replace: true })
      }
      
      if (!isAutoSave) {
        toast.success('Draft saved successfully')
      } else {
        toast.success('Auto-saved draft')
      }
    } catch (error) {
      console.error('Error saving draft:', error)
      toast.error('Failed to save draft')
    } finally {
      setIsSaving(false)
    }
  }

  const handlePublish = async () => {
    if (!blog.title.trim()) {
      toast.error('Please add a title before publishing')
      return
    }
    
    if (!blog.content.trim()) {
      toast.error('Please add content before publishing')
      return
    }
    
    setIsSaving(true)
    try {
      const publishedBlog = await blogService.publishBlog({
        ...blog,
        id: blogId || undefined
      })
      
      toast.success('Blog published successfully')
      navigate(`/blog/${publishedBlog._id}`)
    } catch (error) {
      console.error('Error publishing blog:', error)
      toast.error('Failed to publish blog')
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="modern-editor-container animate-scaleIn">
      {/* Editor Header */}
      <div className="modern-editor-header animate-slideInDown">
        <div className="editor-title-section">
          <h2 className="editor-page-title">
            ✍️ {blogId ? 'Edit Your Blog' : 'Create New Blog'}
          </h2>
          <p className="editor-subtitle">
            {blogId ? 'Make your changes and update your blog' : 'Transform your ideas into a captivating story'}
          </p>
        </div>

        {lastSaved && (
          <div className="auto-save-indicator animate-fadeIn">
            <span className="save-icon">💾</span>
            <span className="save-text">Auto-saved at {lastSaved.toLocaleTimeString()}</span>
          </div>
        )}
      </div>

      {/* Editor Form */}
      <div className="modern-editor-form">
        <div className="form-section animate-slideInUp">
          <label className="form-label">
            <span className="label-text">📝 Blog Title</span>
            <span className="label-required">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            placeholder="Enter your captivating blog title..."
            className="modern-title-input"
          />
        </div>

        <div className="form-section animate-slideInUp">
          <label className="form-label">
            <span className="label-text">🏷️ Tags</span>
            <span className="label-optional">(optional)</span>
          </label>
          <TagInput
            tags={blog.tags}
            onChange={handleTagsChange}
          />
        </div>

        <div className="form-section animate-slideInUp">
          <label className="form-label">
            <span className="label-text">📖 Content</span>
            <span className="label-required">*</span>
          </label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            placeholder="Start writing your amazing blog content here... Let your creativity flow and share your unique perspective with the world!"
            className="modern-content-input"
          />
        </div>
      </div>

      {/* Enhanced Action Buttons */}
      <div className="modern-editor-actions animate-slideInUp">
        <div className="action-buttons-container">
          <Button
            onClick={() => handleSaveDraft(false)}
            disabled={isSaving}
            variant="outline"
            className="modern-save-btn"
          >
            <span className="btn-icon">📝</span>
            <span className="btn-text">
              {isSaving ? 'Saving...' : 'Save Draft'}
            </span>
          </Button>

          <Button
            onClick={handlePublish}
            disabled={isSaving || !blog.title.trim() || !blog.content.trim()}
            variant="primary"
            className="modern-publish-btn"
          >
            <span className="btn-icon">🚀</span>
            <span className="btn-text">
              {isSaving ? 'Publishing...' : 'Publish Blog'}
            </span>
          </Button>
        </div>

        <div className="action-hints">
          <p className="hint-text">
            💡 Your work is automatically saved every 5 seconds
          </p>
          {(!blog.title.trim() || !blog.content.trim()) && (
            <p className="validation-hint">
              ⚠️ Title and content are required to publish
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
