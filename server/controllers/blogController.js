const Blog = require('../models/Blog');

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updatedAt: -1 });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new blog
exports.createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      ...req.body,
      updatedAt: Date.now()
    });
    const savedBlog = await blog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        updatedAt: Date.now()
      },
      { new: true }
    );
    
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Save or update draft
exports.saveDraft = async (req, res) => {
  try {
    const { id, title, content, tags } = req.body;

    if (id) {
      // Update existing draft
      const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags,
          status: 'draft',
          updatedAt: Date.now()
        },
        { new: true }
      );

      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      res.status(200).json(updatedBlog);
    } else {
      // Create new draft
      const blog = new Blog({
        title,
        content,
        tags,
        status: 'draft',
        updatedAt: Date.now()
      });

      const savedBlog = await blog.save();
      res.status(201).json(savedBlog);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Publish blog
exports.publishBlog = async (req, res) => {
  try {
    const { id, title, content, tags } = req.body;

    if (!title || !content) {
      return res.status(400).json({ message: 'Title and content are required for publishing' });
    }

    if (id) {
      // Update existing blog and publish
      const updatedBlog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags,
          status: 'published',
          updatedAt: Date.now()
        },
        { new: true }
      );

      if (!updatedBlog) {
        return res.status(404).json({ message: 'Blog not found' });
      }

      res.status(200).json(updatedBlog);
    } else {
      // Create new blog and publish
      const blog = new Blog({
        title,
        content,
        tags,
        status: 'published',
        updatedAt: Date.now()
      });

      const savedBlog = await blog.save();
      res.status(201).json(savedBlog);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
