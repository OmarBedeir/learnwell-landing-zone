
export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
  buttonText: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: "1",
    name: "Basic",
    price: 19.99,
    description: "Perfect for beginners and casual learners",
    features: [
      "Access to 10+ courses",
      "Basic exercises and projects",
      "Community forum access",
      "Email support (48-hour response)",
      "Course completion certificates"
    ],
    popular: false,
    buttonText: "Start Learning"
  },
  {
    id: "2",
    name: "Pro",
    price: 49.99,
    description: "Ideal for serious students and professionals",
    features: [
      "Access to all 50+ courses",
      "Advanced projects with feedback",
      "Live Q&A sessions monthly",
      "Priority email support (24-hour response)",
      "Downloadable resources",
      "Course completion certificates",
      "Job board access"
    ],
    popular: true,
    buttonText: "Get Pro Access"
  },
  {
    id: "3",
    name: "Enterprise",
    price: 199.99,
    description: "Comprehensive solution for teams and organizations",
    features: [
      "Everything in Pro plan",
      "Team management dashboard",
      "Custom learning paths",
      "Dedicated account manager",
      "API access for LMS integration",
      "Customized reporting",
      "Unlimited user seats",
      "Private group sessions"
    ],
    popular: false,
    buttonText: "Contact Sales"
  }
];
