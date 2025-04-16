
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import CourseHighlights from '@/components/sections/CourseHighlights';
import InstructorProfiles from '@/components/sections/InstructorProfiles';
import Testimonials from '@/components/sections/Testimonials';
import PricingPlans from '@/components/sections/PricingPlans';
import ContactForm from '@/components/sections/ContactForm';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CourseHighlights />
        <InstructorProfiles />
        <Testimonials />
        <PricingPlans />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
