const mongoose = require('mongoose');
const Blog = require('../models/Blog');
require('dotenv').config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/inkflow', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected for seeding...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

// Sample blog data across different streams/topics
const sampleBlogs = [
  // Technology & Programming
  {
    title: "🚀 The Future of Web Development: What's Coming in 2024",
    content: `The web development landscape is evolving at breakneck speed, and 2024 promises to bring some exciting changes that will reshape how we build and interact with web applications.

**AI-Powered Development Tools**
Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are becoming integral parts of the developer workflow. These tools are helping developers write code faster, debug more efficiently, and even generate entire components from simple descriptions.

**The Rise of Edge Computing**
Edge computing is moving processing closer to users, reducing latency and improving performance. Frameworks like Next.js and Nuxt.js are already embracing edge functions, and we're seeing more platforms offering edge deployment options.

**WebAssembly Goes Mainstream**
WebAssembly (WASM) is finally hitting its stride. With languages like Rust, Go, and C++ compiling to WASM, we're seeing performance-critical applications running in browsers at near-native speeds. This opens up possibilities for complex applications like video editors, games, and scientific simulations running entirely in the browser.

**Progressive Web Apps Evolution**
PWAs are becoming more powerful with new APIs for file system access, advanced camera controls, and better offline capabilities. The line between web and native apps continues to blur.

**Sustainability in Web Development**
Green coding practices are gaining traction. Developers are becoming more conscious of their carbon footprint, optimizing for energy efficiency, and choosing hosting providers that use renewable energy.

The future is bright, and these trends will shape how we build the web for years to come!`,
    tags: ['technology', 'web-development', 'ai', 'future-trends', 'programming'],
    status: 'published'
  },

  // Lifestyle & Personal Development
  {
    title: "🌱 Building Sustainable Daily Habits That Actually Stick",
    content: `We've all been there – January 1st rolls around, and we're full of motivation to change our lives. We set ambitious goals, create elaborate routines, and then... by February, we're back to our old ways. Sound familiar?

**The Science Behind Habit Formation**
Research shows that it takes an average of 66 days to form a new habit, not the commonly cited 21 days. The key is starting small and being consistent rather than trying to overhaul your entire life overnight.

**The 1% Better Principle**
Instead of trying to run a marathon tomorrow, start with a 5-minute walk. Instead of reading for 2 hours, start with 2 pages. Small improvements compound over time, leading to remarkable results.

**Habit Stacking: Your Secret Weapon**
Link new habits to existing ones. After I pour my morning coffee (existing habit), I write in my journal for 5 minutes (new habit). This creates a natural trigger and makes the new habit easier to remember.

**The Environment Design**
Make good habits obvious and bad habits invisible. Want to read more? Place books around your house. Want to eat healthier? Keep fruits visible and hide the junk food.

**Tracking Without Obsessing**
Use simple tracking methods like a habit tracker app or a simple calendar with checkmarks. The goal isn't perfection – it's consistency.

**The Power of Identity**
Instead of saying "I want to exercise," say "I am someone who prioritizes their health." This shift in identity makes the behavior feel natural rather than forced.

Remember, sustainable change happens gradually. Be patient with yourself, celebrate small wins, and focus on progress, not perfection.`,
    tags: ['lifestyle', 'habits', 'personal-development', 'productivity', 'wellness'],
    status: 'published'
  },

  // Travel & Adventure
  {
    title: "🏔️ Solo Backpacking Through the Himalayas: Lessons from the Trail",
    content: `Three months ago, I embarked on a solo backpacking journey through the Himalayas. What started as a quest for adventure became a profound journey of self-discovery.

**The Decision to Go Solo**
Traveling alone, especially in challenging terrain, isn't for everyone. But there's something magical about being completely responsible for your own experience. Every decision, from which trail to take to where to rest, becomes deeply personal.

**Preparation: More Than Just Gear**
Physical preparation was crucial – months of hiking with a weighted pack, cardio training, and building endurance. But mental preparation was equally important. Learning to be comfortable with uncertainty and embracing the unknown.

**The People You Meet**
Contrary to what you might think, solo travel doesn't mean being alone. I met incredible people – fellow trekkers, local guides, village families who invited me for tea. These connections were more meaningful because I was fully present and open to them.

**Challenges That Became Gifts**
Getting lost for 6 hours taught me to trust my instincts. A sudden snowstorm that forced me to shelter in a tea house led to one of the most beautiful conversations with an elderly Sherpa about life philosophy.

**The Silence and Solitude**
In our hyper-connected world, true silence is rare. Walking for hours with only the sound of your footsteps and breathing creates a meditative state that's impossible to replicate in daily life.

**What the Mountains Taught Me**
Mountains don't care about your schedule, your ego, or your plans. They teach patience, humility, and respect. Every step forward is earned, and every view is a reward for perseverance.

**Coming Back Changed**
I returned with more than just photos and stories. I came back with a deeper understanding of my own resilience, a appreciation for simple pleasures, and a perspective that has changed how I approach challenges in everyday life.

If you're considering a solo adventure, my advice is simple: prepare well, start small, and trust yourself. The mountains are waiting.`,
    tags: ['travel', 'adventure', 'solo-travel', 'himalayas', 'personal-growth', 'backpacking'],
    status: 'published'
  },

  // Food & Cooking
  {
    title: "🍜 The Art of Ramen: From Instant to Authentic",
    content: `Ramen is more than just a quick meal – it's a culinary art form that has captivated food lovers worldwide. Let's explore the journey from instant packets to authentic, soul-warming bowls.

**Understanding the Basics**
True ramen consists of four essential components: the broth (dashi), noodles (men), tare (seasoning base), and toppings. Each element plays a crucial role in creating the perfect bowl.

**The Soul of Ramen: The Broth**
A good ramen broth can take 12-24 hours to develop. Tonkotsu (pork bone) broth requires constant simmering to extract the collagen, creating that rich, creamy texture. Chicken-based broths offer a lighter but equally complex flavor profile.

**Noodle Knowledge**
Fresh ramen noodles have a specific texture and alkalinity that you can't get from dried pasta. The kansui (alkaline mineral water) gives ramen noodles their characteristic chewiness and yellow color.

**Regional Variations**
- **Tonkotsu**: Rich pork bone broth from Kyushu
- **Shoyu**: Soy sauce-based, clear and light
- **Miso**: Fermented soybean paste, hearty and warming
- **Shio**: Salt-based, the purest expression of ingredients

**Building Your Home Ramen**
Start with quality ingredients. Even if you use store-bought broth, fresh noodles and thoughtful toppings can elevate your bowl significantly. Soft-boiled eggs, chashu pork, nori, and green onions are classic additions.

**The Ritual of Eating**
Ramen is meant to be eaten quickly while hot. The slurping isn't just acceptable – it's encouraged! It aerates the broth and enhances the flavors.

**Beyond the Bowl**
Ramen represents comfort, community, and craftsmanship. It's a dish that brings people together and showcases how simple ingredients can create something extraordinary.

Whether you're making instant ramen or spending a day crafting the perfect bowl, remember that ramen is about more than food – it's about taking time to nourish both body and soul.`,
    tags: ['food', 'cooking', 'ramen', 'japanese-cuisine', 'culinary-arts'],
    status: 'published'
  },

  // Health & Fitness
  {
    title: "💪 Strength Training for Beginners: Your First 30 Days",
    content: `Starting a strength training routine can be intimidating, but it's one of the best investments you can make in your health. Here's your complete guide to the first 30 days.

**Why Strength Training Matters**
Beyond building muscle, strength training improves bone density, boosts metabolism, enhances mental health, and increases functional strength for daily activities. It's not just about looking good – it's about feeling strong and capable.

**Week 1-2: Foundation Building**
Focus on bodyweight exercises and learning proper form:
- Squats: 3 sets of 8-12 reps
- Push-ups (modified if needed): 3 sets of 5-10 reps
- Planks: 3 sets of 15-30 seconds
- Glute bridges: 3 sets of 10-15 reps

**Week 3-4: Adding Resistance**
Introduce light weights or resistance bands:
- Goblet squats with dumbbell
- Dumbbell rows
- Overhead press with light weights
- Deadlifts with proper form

**The Importance of Rest**
Muscles grow during recovery, not during workouts. Aim for 48 hours of rest between training the same muscle groups. Sleep and nutrition are just as important as the exercises themselves.

**Tracking Progress**
Keep a simple log of exercises, sets, reps, and how you feel. Progress isn't always about lifting heavier – it might be doing one more rep or feeling more stable during an exercise.

**Common Beginner Mistakes**
- Doing too much too soon
- Neglecting warm-up and cool-down
- Focusing only on "mirror muscles"
- Comparing yourself to others

**Nutrition for Strength**
Protein is crucial for muscle recovery and growth. Aim for 0.8-1g per pound of body weight. Don't forget carbohydrates for energy and healthy fats for hormone production.

Remember, everyone starts somewhere. The strongest people in the gym were once beginners too. Focus on consistency over perfection, and celebrate every small victory along the way.`,
    tags: ['fitness', 'strength-training', 'health', 'beginner-guide', 'exercise'],
    status: 'published'
  },

  // Creative Arts
  {
    title: "🎭 The Renaissance of Digital Art: NFTs and Beyond",
    content: `Digital art has exploded into mainstream consciousness, challenging traditional notions of art ownership, value, and creativity. Let's explore this fascinating intersection of technology and artistic expression.

**The Digital Art Revolution**
Digital art isn't new – artists have been creating with computers since the 1960s. What's new is the recognition, market value, and accessibility that blockchain technology has brought to digital creators.

**Understanding NFTs**
Non-Fungible Tokens (NFTs) provide a way to prove ownership and authenticity of digital assets. While controversial, they've opened new revenue streams for digital artists and created a global marketplace for digital art.

**Tools of the Trade**
Modern digital artists use sophisticated software like Procreate, Adobe Creative Suite, Blender for 3D art, and emerging AI tools like Midjourney and DALL-E. Each tool offers unique possibilities for creative expression.

**The Democratization of Art**
Social media platforms have given artists direct access to audiences without traditional gatekeepers. Instagram, TikTok, and specialized platforms like ArtStation have become virtual galleries where artists can build followings and sell work.

**AI as a Creative Partner**
Artificial Intelligence isn't replacing artists – it's becoming a powerful creative tool. Artists are using AI to generate ideas, create textures, and explore new aesthetic possibilities while maintaining their unique creative vision.

**The Future of Digital Art**
Virtual and Augmented Reality are opening new frontiers for immersive art experiences. Imagine walking through a painting or interacting with sculptures that respond to your presence.

**Challenges and Opportunities**
Issues like copyright, environmental concerns of blockchain technology, and market speculation need addressing. However, the opportunities for creative expression and global reach are unprecedented.

**Getting Started**
Whether you're a traditional artist looking to go digital or a complete beginner, start with free tools like GIMP or Krita. Focus on fundamentals like composition, color theory, and storytelling – the medium may be digital, but the principles of good art remain timeless.

The digital art world is vast and constantly evolving. Embrace experimentation, connect with other artists online, and remember that technology is just a tool – your creativity is what makes art truly meaningful.`,
    tags: ['digital-art', 'nft', 'creativity', 'technology', 'art-market'],
    status: 'published'
  },

  // Business & Entrepreneurship
  {
    title: "🚀 From Side Hustle to Startup: My Journey Building a SaaS Company",
    content: `Two years ago, I was working a 9-to-5 job and coding on weekends. Today, I'm running a SaaS company with 10,000+ users. Here's the unfiltered story of that journey.

**The Problem That Started It All**
As a project manager, I was frustrated with existing task management tools. They were either too simple or overwhelmingly complex. I started building a solution for myself, not knowing it would become a business.

**Nights and Weekends**
For six months, I spent every evening and weekend coding. My social life suffered, but I was driven by the vision of solving a real problem. The key was setting small, achievable goals and celebrating tiny wins.

**Validation Before Building**
Before writing a single line of code for the public version, I talked to 50+ potential users. Their feedback shaped every feature decision. Many entrepreneurs build first and validate later – that's backwards.

**The MVP Launch**
My Minimum Viable Product was embarrassingly simple – just three core features. But it solved the main problem, and that's what mattered. I launched on Product Hunt and got 200 signups on day one.

**The Struggle Phase**
Months 6-12 were the hardest. Growth was slow, churn was high, and I questioned everything. I almost gave up three times. The breakthrough came when I started focusing on customer success rather than just acquisition.

**Finding Product-Market Fit**
The moment I knew we had something special was when users started referring friends without being asked. Our Net Promoter Score jumped from 6 to 47 in three months.

**Scaling Challenges**
Success brings new problems. Server costs skyrocketed, customer support became overwhelming, and I realized I needed help. Hiring the first employee was terrifying but necessary.

**Lessons Learned**
- Start with a problem you personally experience
- Talk to customers constantly
- Build for retention, not just acquisition
- Don't scale too early
- Take care of your mental health

**The Road Ahead**
We're now processing millions of tasks monthly and have a team of 8. But we're still just getting started. The goal isn't just to build a successful company – it's to genuinely improve how people work.

**Advice for Aspiring Entrepreneurs**
Start before you feel ready. You'll never have all the answers upfront. Focus on solving real problems for real people, and the business model will follow. Most importantly, enjoy the journey – it's going to be a wild ride.`,
    tags: ['entrepreneurship', 'startup', 'saas', 'business', 'side-hustle'],
    status: 'published'
  }
];

// Draft blogs for variety
const draftBlogs = [
  {
    title: "🎨 The Psychology of Color in Digital Design",
    content: `Color isn't just about aesthetics – it's a powerful tool that influences emotions, behaviors, and decision-making. In digital design, understanding color psychology can make the difference between a good interface and a great one.

**The Emotional Impact of Color**
Red evokes urgency and passion, making it perfect for call-to-action buttons. Blue conveys trust and stability, which is why it's favored by financial institutions. Green suggests growth and harmony, often used in wellness and environmental apps.

**Cultural Considerations**
Color meanings vary across cultures. While white represents purity in Western cultures, it's associated with mourning in some Eastern cultures. Global brands must consider these nuances when designing for international audiences.

**Accessibility and Inclusion**
Color-blind users make up about 8% of men and 0.5% of women. Designing with sufficient contrast and not relying solely on color to convey information ensures your design is accessible to everyone.

[This is a work in progress - need to add more sections on color theory, practical applications, and case studies...]`,
    tags: ['design', 'psychology', 'ux-ui', 'color-theory'],
    status: 'draft'
  },

  {
    title: "🌍 Climate Change: Small Actions, Big Impact",
    content: `Climate change can feel overwhelming, but individual actions do matter. Here are practical ways to reduce your carbon footprint without completely overhauling your lifestyle.

**Transportation Choices**
- Walk, bike, or use public transport when possible
- Consider electric or hybrid vehicles for your next car purchase
- Combine errands into single trips
- Work from home when possible to reduce commuting

**Energy at Home**
- Switch to LED bulbs
- Unplug electronics when not in use
- Use programmable thermostats
- Consider renewable energy options

[Draft note: Need to expand on diet choices, waste reduction, and community involvement...]`,
    tags: ['environment', 'climate-change', 'sustainability', 'lifestyle'],
    status: 'draft'
  },

  {
    title: "📚 The Lost Art of Deep Reading in the Digital Age",
    content: `In our age of infinite scroll and bite-sized content, the ability to read deeply and thoughtfully is becoming a rare skill. Yet it's more important than ever.

**What We've Lost**
Studies show that our attention spans are decreasing, and our ability to focus on long-form content is diminishing. We've become accustomed to skimming, scanning, and jumping between topics rather than diving deep into ideas.

**The Neuroscience of Reading**
Deep reading activates different neural pathways than skimming. It engages areas of the brain responsible for critical thinking, empathy, and complex reasoning. When we read deeply, we're literally rewiring our brains for better thinking.

[Work in progress - planning to add sections on practical strategies for deep reading, book recommendations, and creating a reading environment...]`,
    tags: ['reading', 'education', 'digital-wellness', 'productivity'],
    status: 'draft'
  },

  {
    title: "🎵 Music Production for Beginners: Your Home Studio Setup",
    content: `Creating music has never been more accessible. With just a computer and some basic equipment, you can set up a home studio that rivals professional setups from decades past.

**Essential Equipment**
- Audio interface (Focusrite Scarlett series is great for beginners)
- Studio monitors or quality headphones
- Microphone (dynamic for vocals, condenser for instruments)
- MIDI keyboard
- Acoustic treatment (even blankets can help!)

**Software Options**
Free options: GarageBand (Mac), Reaper (affordable), Audacity
Professional: Pro Tools, Logic Pro, Ableton Live, FL Studio

**Your First Recording**
Start simple - record yourself humming a melody, then add a simple beat. The goal isn't perfection; it's getting comfortable with the process.

[Draft notes: Need to expand on mixing basics, common beginner mistakes, and building a workflow...]`,
    tags: ['music', 'production', 'home-studio', 'creativity', 'audio'],
    status: 'draft'
  },

  {
    title: "🌟 Mindfulness in the Modern Workplace",
    content: `Stress, burnout, and constant connectivity are defining features of modern work life. Mindfulness practices offer a way to navigate these challenges while maintaining performance and well-being.

**The Science Behind Mindfulness**
Research shows that regular mindfulness practice reduces cortisol levels, improves focus, and enhances emotional regulation. Companies like Google, Apple, and Goldman Sachs have implemented mindfulness programs with measurable results.

**Simple Workplace Practices**
- 2-minute breathing exercises between meetings
- Mindful walking to the coffee machine
- Single-tasking instead of multitasking
- Mindful listening during conversations

[Planning to add: case studies, implementation strategies, overcoming workplace resistance to mindfulness...]`,
    tags: ['mindfulness', 'workplace', 'stress-management', 'productivity', 'wellness'],
    status: 'draft'
  }
];

// Function to seed the database
const seedBlogs = async () => {
  try {
    // Clear existing blogs
    await Blog.deleteMany({});
    console.log('Cleared existing blogs...');

    // Add published blogs
    const publishedBlogs = await Blog.insertMany(sampleBlogs);
    console.log(`Added ${publishedBlogs.length} published blogs`);

    // Add draft blogs
    const drafts = await Blog.insertMany(draftBlogs);
    console.log(`Added ${drafts.length} draft blogs`);

    console.log('✅ Database seeded successfully!');
    console.log(`Total blogs created: ${publishedBlogs.length + drafts.length}`);
    
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    mongoose.connection.close();
  }
};

// Run the seeding
const runSeed = async () => {
  await connectDB();
  await seedBlogs();
};

runSeed();
