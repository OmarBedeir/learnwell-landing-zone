
import React from 'react';
import InstructorCard from '../ui/InstructorCard';
import { instructors } from '@/data/instructorsData';

const InstructorProfiles: React.FC = () => {
  return (
    <section id="instructors" className="section-container bg-gray-50">
      <h2 className="section-title">
        Learn from <span className="gradient-text">Industry Experts</span>
      </h2>
      <p className="section-subtitle">
        Our instructors are passionate professionals with extensive real-world experience and a talent for teaching.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {instructors.map((instructor, index) => (
          <div key={instructor.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <InstructorCard instructor={instructor} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default InstructorProfiles;
