
import React from 'react';
import { Button } from "@/components/ui/button";
import CourseCard from '../ui/CourseCard';
import { courses } from '@/data/coursesData';

const CourseHighlights: React.FC = () => {
  return (
    <section id="courses" className="section-container">
      <h2 className="section-title">
        Explore Our <span className="gradient-text">Top Courses</span>
      </h2>
      <p className="section-subtitle">
        Discover our most popular courses designed to help you achieve your personal and professional goals.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {courses.map((course, index) => (
          <div key={course.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          View All Courses
        </Button>
      </div>
    </section>
  );
};

export default CourseHighlights;
