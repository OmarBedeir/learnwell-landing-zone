
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  course: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Frontend Developer",
    company: "Tech Innovators",
    content: "The Web Development Masterclass completely transformed my career. I went from knowing almost nothing about coding to landing a job as a frontend developer within 6 months. The instructor's teaching style made complex concepts easy to understand.",
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    course: "Web Development Masterclass",
    rating: 5
  },
  {
    id: "2",
    name: "Lisa Kim",
    role: "Data Analyst",
    company: "FinTech Solutions",
    content: "As someone transitioning from finance to data science, this course provided exactly what I needed. The practical projects helped me build a portfolio that impressed employers. I'm now working as a data analyst at a fintech company!",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    course: "Data Science Essentials",
    rating: 5
  },
  {
    id: "3",
    name: "Marcus Johnson",
    role: "Marketing Specialist",
    company: "Global Brands Inc.",
    content: "The Digital Marketing Strategy course offered practical, actionable strategies that I could immediately implement in my work. Within weeks of applying these techniques, we saw a 30% increase in our conversion rates. Absolutely worth the investment!",
    image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    course: "Digital Marketing Strategy",
    rating: 4
  },
  {
    id: "4",
    name: "Sophia Martinez",
    role: "Product Designer",
    company: "Creative Solutions",
    content: "As a graphic designer looking to transition to UX/UI, this course was exactly what I needed. The instructor's feedback on my projects was invaluable, and the community of students provided great support. I've now redesigned our company's entire product interface!",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    course: "UX/UI Design Fundamentals",
    rating: 5
  }
];
