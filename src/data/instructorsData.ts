
export interface Instructor {
  id: string;
  name: string;
  title: string;
  bio: string;
  image: string;
  expertise: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

export const instructors: Instructor[] = [
  {
    id: "1",
    name: "Alex Morgan",
    title: "Senior Web Developer",
    bio: "Alex has over 10 years of experience in web development and has worked with companies like Google and Facebook. He specializes in modern JavaScript frameworks and loves teaching beginners.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    expertise: ["JavaScript", "React", "Node.js", "Full-Stack Development"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  },
  {
    id: "2",
    name: "Sarah Chen",
    title: "Data Scientist & AI Researcher",
    bio: "Sarah holds a PhD in Computer Science and has published numerous papers on machine learning. She brings complex data science concepts to life with practical, real-world examples.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    expertise: ["Python", "Machine Learning", "Data Analysis", "AI"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com"
    }
  },
  {
    id: "3",
    name: "James Wilson",
    title: "Digital Marketing Director",
    bio: "James has led marketing teams at several Fortune 500 companies. His courses combine strategic thinking with hands-on tactical implementation of digital marketing campaigns.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    expertise: ["SEO", "Content Marketing", "Social Media", "Analytics"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      website: "https://example.com"
    }
  },
  {
    id: "4",
    name: "Maya Johnson",
    title: "UX/UI Design Lead",
    bio: "Maya has designed products used by millions of people worldwide. She combines creativity with a user-centered approach to teach design thinking and execution.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    expertise: ["User Experience", "Interface Design", "Adobe XD", "Figma"],
    socialLinks: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      website: "https://example.com"
    }
  }
];
