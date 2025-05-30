import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const blogService = {
  getAllBlogs: async () => {
    const response = await api.get('/blogs');
    return response.data;
  },

  getBlogById: async (id) => {
    const response = await api.get(`/blogs/${id}`);
    return response.data;
  },

  saveDraft: async (blogData) => {
    const { id, ...data } = blogData;
    if (id) {
      const response = await api.put(`/blogs/${id}`, {
        ...data,
        status: 'draft',
      });
      return response.data;
    } else {
      const response = await api.post('/blogs', {
        ...data,
        status: 'draft',
      });
      return response.data;
    }
  },

  publishBlog: async (blogData) => {
    const { id, ...data } = blogData;
    if (id) {
      const response = await api.put(`/blogs/${id}`, {
        ...data,
        status: 'published',
      });
      return response.data;
    } else {
      const response = await api.post('/blogs', {
        ...data,
        status: 'published',
      });
      return response.data;
    }
  },

  deleteBlog: async (id) => {
    const response = await api.delete(`/blogs/${id}`);
    return response.data;
  },
};

