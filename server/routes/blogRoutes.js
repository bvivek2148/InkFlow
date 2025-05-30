
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Get all blogs
router.get('/', blogController.getAllBlogs);

// Get blog by ID
router.get('/:id', blogController.getBlogById);

// Create new blog
router.post('/', blogController.createBlog);

// Update blog
router.put('/:id', blogController.updateBlog);

// Delete blog
router.delete('/:id', blogController.deleteBlog);

// Save or update draft (alternative endpoint)
router.post('/save-draft', blogController.saveDraft);

// Publish blog (alternative endpoint)
router.post('/publish', blogController.publishBlog);

module.exports = router;

