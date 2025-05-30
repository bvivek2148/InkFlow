# InkFlow Database Seeding

This directory contains scripts to populate your InkFlow database with sample blog data.

## 🌟 What's Included

The seeding script creates diverse blog content across multiple topics:

### Published Blogs (7 posts):
- **🚀 Technology**: "The Future of Web Development: What's Coming in 2024"
- **🌱 Lifestyle**: "Building Sustainable Daily Habits That Actually Stick"
- **🏔️ Travel**: "Solo Backpacking Through the Himalayas: Lessons from the Trail"
- **🍜 Food**: "The Art of Ramen: From Instant to Authentic"
- **💪 Fitness**: "Strength Training for Beginners: Your First 30 Days"
- **🎭 Digital Art**: "The Renaissance of Digital Art: NFTs and Beyond"
- **🚀 Business**: "From Side Hustle to Startup: My Journey Building a SaaS Company"

### Draft Blogs (5 posts):
- **🎨 Design**: "The Psychology of Color in Digital Design"
- **🌍 Environment**: "Climate Change: Small Actions, Big Impact"
- **📚 Education**: "The Lost Art of Deep Reading in the Digital Age"
- **🎵 Music**: "Music Production for Beginners: Your Home Studio Setup"
- **🌟 Wellness**: "Mindfulness in the Modern Workplace"

## 🚀 How to Run

### Prerequisites
- MongoDB running locally or connection to MongoDB Atlas
- Node.js installed
- Environment variables set up (if using MongoDB Atlas)

### Steps

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies (if not already done):**
   ```bash
   npm install
   ```

3. **Run the seeding script:**
   ```bash
   npm run seed
   ```

   Or directly:
   ```bash
   node scripts/seedBlogs.js
   ```

### Expected Output
```
MongoDB Connected for seeding...
Cleared existing blogs...
Added 7 published blogs
Added 5 draft blogs
✅ Database seeded successfully!
Total blogs created: 12
```

## ⚠️ Important Notes

- **This script will DELETE all existing blogs** before adding the sample data
- Make sure you have a backup if you have important data
- The script will automatically close the database connection when finished

## 🎨 Customization

You can easily modify the `seedBlogs.js` file to:
- Add more blog posts
- Change the content or topics
- Adjust the tags
- Modify the published/draft status

## 🔧 Troubleshooting

### Connection Issues
- Ensure MongoDB is running locally on port 27017
- Check your `MONGO_URI` environment variable if using Atlas
- Verify your network connection

### Permission Issues
- Make sure the script has read/write permissions
- Check that your MongoDB user has the necessary permissions

### Data Issues
- If blogs don't appear, check the MongoDB logs
- Verify the database name matches your application configuration

## 📝 Blog Content Overview

The sample blogs cover diverse topics to showcase your InkFlow application:

- **Technology & Programming**: Web development trends, AI tools
- **Lifestyle & Personal Development**: Habit formation, productivity
- **Travel & Adventure**: Solo travel experiences, outdoor activities
- **Food & Cooking**: Culinary arts, cooking techniques
- **Health & Fitness**: Exercise routines, wellness tips
- **Creative Arts**: Digital art, NFTs, creative tools
- **Business & Entrepreneurship**: Startup journeys, business advice
- **Education & Learning**: Reading habits, skill development
- **Music & Audio**: Production techniques, home studios
- **Wellness & Mindfulness**: Workplace wellness, stress management

This variety demonstrates how your blog platform can handle different content types and audiences!
