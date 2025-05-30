import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { blogService } from '../../../services/blogService'
import { useDebounce } from '../../../hooks/useDebounce'
import Editor from '../components/Editor'
import toast from 'react-hot-toast'

export default function EditorPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    tags: []
  })
  const [isLoading, setIsLoading] = useState(!!id)

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const data = await blogService.getBlogById(id)
          setBlog(data)
        } catch (error) {
          console.error('Error fetching blog:', error)
          toast.error('Failed to load blog')
          navigate('/editor', { replace: true })
        } finally {
          setIsLoading(false)
        }
      }
      
      fetchBlog()
    }
  }, [id, navigate])

  if (isLoading) {
    return (
      <div className="loading-container animate-fadeIn">
        <div className="spinner animate-float"></div>
        <p className="animate-pulse">✨ Loading editor...</p>
      </div>
    )
  }

  return (
    <div className="editor-page animate-fadeIn">
      <Editor initialBlog={blog} blogId={id} />
    </div>
  )
}
