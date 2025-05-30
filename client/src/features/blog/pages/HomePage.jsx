import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { blogService } from '../../../services/blogService'
import BlogCard from '../components/BlogCard'

export default function HomePage() {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedTopic, setSelectedTopic] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState('all') // 'all', 'published', 'draft'
  const [sortBy, setSortBy] = useState('newest') // 'newest', 'oldest', 'title'

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const data = await blogService.getAllBlogs()
        setBlogs(data)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchBlogs()
  }, [])

  // Handle blog deletion
  const handleBlogDelete = (deletedBlogId) => {
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog._id !== deletedBlogId))
  }

  // Filter and sort blogs
  const getFilteredAndSortedBlogs = () => {
    let filteredBlogs = blogs

    // Filter by search query
    if (searchQuery) {
      filteredBlogs = filteredBlogs.filter(blog =>
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Filter by status
    if (filterStatus !== 'all') {
      filteredBlogs = filteredBlogs.filter(blog => blog.status === filterStatus)
    }

    // Sort blogs
    filteredBlogs.sort((a, b) => {
      switch (sortBy) {
        case 'oldest':
          return new Date(a.updatedAt) - new Date(b.updatedAt)
        case 'title':
          return a.title.localeCompare(b.title)
        case 'newest':
        default:
          return new Date(b.updatedAt) - new Date(a.updatedAt)
      }
    })

    return filteredBlogs
  }

  const filteredBlogs = getFilteredAndSortedBlogs()
  const publishedBlogs = filteredBlogs.filter(blog => blog.status === 'published')
  const draftBlogs = filteredBlogs.filter(blog => blog.status === 'draft')

  // Get all unique tags for filter suggestions
  const allTags = [...new Set(blogs.flatMap(blog => blog.tags))]

  // Statistics
  const stats = {
    total: blogs.length,
    published: blogs.filter(blog => blog.status === 'published').length,
    drafts: blogs.filter(blog => blog.status === 'draft').length,
    tags: allTags.length
  }

  // Blog topics/categories
  const blogTopics = [
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'lifestyle', name: 'Lifestyle', icon: '🌟' },
    { id: 'travel', name: 'Travel', icon: '✈️' },
    { id: 'food', name: 'Food', icon: '🍽️' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'health', name: 'Health', icon: '🏥' }
  ]

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId)
    // Navigate to editor with selected topic
    window.location.href = `/editor?topic=${topicId}`
  }

  if (isLoading) {
    return (
      <div className="loading-container animate-fadeIn">
        <div className="spinner animate-float"></div>
        <p className="animate-pulse">✨ Loading your amazing blogs...</p>
      </div>
    )
  }

  return (
    <div className="modern-home-page">
      {/* Floating Background Elements */}
      <div className="floating-elements">
        <div className="floating-icon floating-icon-1">📝</div>
        <div className="floating-icon floating-icon-2">✨</div>
        <div className="floating-icon floating-icon-3">🚀</div>
        <div className="floating-icon floating-icon-4">💡</div>
        <div className="floating-icon floating-icon-5">📚</div>
        <div className="floating-icon floating-icon-6">🎨</div>
      </div>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Create Your Blog Story</h1>
          <p className="hero-subtitle">
            Transform your ideas into captivating blog posts with InkFlow's powerful editor
          </p>

          <div className="hero-search">
            <input
              type="text"
              placeholder="What do you want to write about?"
              className="hero-search-input"
            />
            <Link to="/editor" className="hero-create-btn">
              <span className="btn-icon">✨</span>
              Create
            </Link>
          </div>

          <div className="topic-selection">
            <p className="topic-label">Choose a Topic to Get Started</p>
            <div className="topic-grid">
              {blogTopics.map((topic) => (
                <button
                  key={topic.id}
                  className="topic-btn"
                  onClick={() => handleTopicSelect(topic.id)}
                >
                  <span className="topic-icon">{topic.icon}</span>
                  <span className="topic-name">{topic.name}</span>
                </button>
              ))}
            </div>
            <p className="topic-alternative">
              or <Link to="/editor" className="create-from-scratch">Create from Scratch</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Blog Collection Section */}
      {blogs.length > 0 && (
        <div className="blog-collection-section">
          {/* Collection Header with Stats */}
          <div className="collection-header">
            <div className="header-content">
              <h2 className="collection-title">📚 Your Blog Collection</h2>
              <p className="collection-subtitle">Manage and explore your creative works</p>

              {/* Statistics Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-number">{stats.total}</div>
                  <div className="stat-label">Total Blogs</div>
                </div>
                <div className="stat-card published">
                  <div className="stat-number">{stats.published}</div>
                  <div className="stat-label">Published</div>
                </div>
                <div className="stat-card drafts">
                  <div className="stat-number">{stats.drafts}</div>
                  <div className="stat-label">Drafts</div>
                </div>
                <div className="stat-card tags">
                  <div className="stat-number">{stats.tags}</div>
                  <div className="stat-label">Topics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="collection-controls">
            <div className="search-section">
              <div className="search-input-wrapper">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search blogs by title, content, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="collection-search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="clear-search-btn"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            <div className="filter-section">
              <div className="filter-group">
                <label className="filter-label">Status:</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="filter-select"
                >
                  <option value="all">All ({stats.total})</option>
                  <option value="published">Published ({stats.published})</option>
                  <option value="draft">Drafts ({stats.drafts})</option>
                </select>
              </div>

              <div className="filter-group">
                <label className="filter-label">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="title">Title A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Results Summary */}
          {(searchQuery || filterStatus !== 'all') && (
            <div className="results-summary">
              <p>
                Showing {filteredBlogs.length} of {stats.total} blogs
                {searchQuery && <span> matching "{searchQuery}"</span>}
                {filterStatus !== 'all' && <span> • {filterStatus} only</span>}
              </p>
              {filteredBlogs.length === 0 && (
                <div className="no-results">
                  <span className="no-results-icon">🔍</span>
                  <p>No blogs found matching your criteria</p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setFilterStatus('all')
                    }}
                    className="clear-filters-btn"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Blog Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="enhanced-blog-grid">
              {filterStatus === 'all' ? (
                <>
                  {publishedBlogs.length > 0 && (
                    <div className="blog-section animate-slideInUp">
                      <div className="section-header-inline">
                        <h3 className="section-title">📚 Published Blogs</h3>
                        <span className="section-count">{publishedBlogs.length}</span>
                      </div>
                      <div className="masonry-grid">
                        {publishedBlogs.map((blog, index) => (
                          <div
                            key={blog._id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            className="masonry-item animate-slideInUp"
                          >
                            <BlogCard
                              blog={blog}
                              type="published"
                              onDelete={handleBlogDelete}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {draftBlogs.length > 0 && (
                    <div className="blog-section animate-slideInUp">
                      <div className="section-header-inline">
                        <h3 className="section-title">📝 Drafts</h3>
                        <span className="section-count">{draftBlogs.length}</span>
                      </div>
                      <div className="masonry-grid">
                        {draftBlogs.map((blog, index) => (
                          <div
                            key={blog._id}
                            style={{ animationDelay: `${index * 0.1}s` }}
                            className="masonry-item animate-slideInUp"
                          >
                            <BlogCard
                              blog={blog}
                              type="draft"
                              onDelete={handleBlogDelete}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="blog-section animate-slideInUp">
                  <div className="section-header-inline">
                    <h3 className="section-title">
                      {filterStatus === 'published' ? '📚 Published Blogs' : '📝 Drafts'}
                    </h3>
                    <span className="section-count">{filteredBlogs.length}</span>
                  </div>
                  <div className="masonry-grid">
                    {filteredBlogs.map((blog, index) => (
                      <div
                        key={blog._id}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        className="masonry-item animate-slideInUp"
                      >
                        <BlogCard
                          blog={blog}
                          type={blog.status}
                          onDelete={handleBlogDelete}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="empty-collection">
              <div className="empty-icon">📝</div>
              <h3>No blogs yet</h3>
              <p>Start your blogging journey by creating your first post!</p>
              <Link to="/editor" className="create-first-blog-btn">
                <span className="btn-icon">✨</span>
                Create Your First Blog
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
