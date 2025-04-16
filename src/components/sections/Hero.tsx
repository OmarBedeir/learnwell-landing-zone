
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-16 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 sm:text-center lg:text-left lg:flex lg:flex-col lg:justify-center">
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl animate-fade-in">
              <span className="block">Unlock Your Potential with</span>
              <span className="block gradient-text">LearnWell Academy</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl animate-fade-in" style={{ animationDelay: "150ms" }}>
              Expert-led online courses to help you master new skills, advance your career, and explore your passions. Learn at your own pace, anytime, anywhere.
            </p>
            
            <div className="mt-6 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button size="lg" className="w-full sm:w-auto">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Browse Courses
              </Button>
            </div>
            
            <div className="mt-8 sm:mt-10 animate-fade-in" style={{ animationDelay: "450ms" }}>
              <ul className="flex flex-wrap items-center justify-center lg:justify-start text-sm gap-x-8 gap-y-3">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-brand-600" />
                  <span>Expert Instructors</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-brand-600" />
                  <span>Flexible Learning</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-brand-600" />
                  <span>Job-Ready Skills</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-brand-600" />
                  <span>30-Day Guarantee</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 lg:col-span-6 lg:mt-0 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:h-full lg:w-auto object-cover"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Students learning online"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
