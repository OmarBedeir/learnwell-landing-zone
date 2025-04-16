
export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  price: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
  category: string;
  rating: number;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "Web Development Masterclass",
    description: "Learn HTML, CSS, JavaScript, React, and Node.js to become a full-stack web developer from scratch.",
    instructor: "Alex Morgan",
    price: 89.99,
    duration: "40 hours",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "Programming",
    rating: 4.8
  },
  {
    id: "2",
    title: "Data Science Essentials",
    description: "Master the fundamentals of data science, including Python, data analysis, machine learning, and visualization.",
    instructor: "Sarah Chen",
    price: 94.99,
    duration: "35 hours",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    category: "Data Science",
    rating: 4.9
  },
  {
    id: "3",
    title: "UX/UI Design Fundamentals",
    description: "Learn the principles of user experience and interface design to create intuitive, beautiful digital products.",
    instructor: "Maya Johnson",
    price: 79.99,
    duration: "25 hours",
    level: "Beginner",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "Design",
    rating: 4.7
  },
  {
    id: "4",
    title: "Digital Marketing Strategy",
    description: "Develop comprehensive digital marketing skills including SEO, social media, content marketing, and analytics.",
    instructor: "James Wilson",
    price: 84.99,
    duration: "30 hours",
    level: "All Levels",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Marketing",
    rating: 4.6
  },
  {
    id: "5",
    title: "Artificial Intelligence Foundations",
    description: "Understand the core principles of AI including machine learning, neural networks, and practical applications.",
    instructor: "David Kim",
    price: 99.99,
    duration: "45 hours",
    level: "Advanced",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    category: "AI & Machine Learning",
    rating: 4.9
  },
  {
    id: "6",
    title: "Business Leadership Skills",
    description: "Develop essential leadership abilities including decision-making, team management, and strategic planning.",
    instructor: "Emily Carter",
    price: 74.99,
    duration: "20 hours",
    level: "Intermediate",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "Business",
    rating: 4.7
  }
];
