
import React from 'react';
import TestimonialCard from '../ui/TestimonialCard';
import { testimonials } from '@/data/testimonialsData';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section-container">
      <h2 className="section-title">
        What Our <span className="gradient-text">Students Say</span>
      </h2>
      <p className="section-subtitle">
        Read success stories from students who have transformed their careers through our courses.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {testimonials.map((testimonial, index) => (
          <div key={testimonial.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
