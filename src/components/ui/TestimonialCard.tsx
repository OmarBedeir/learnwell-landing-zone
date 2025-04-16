
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Testimonial } from '@/data/testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg highlight-animation">
      <CardContent className="pt-6 flex-grow relative">
        <Quote className="absolute text-brand-200 h-10 w-10 -top-1 -left-1 opacity-40" />
        <div className="pl-2">
          <p className="text-muted-foreground mb-4 relative z-10">"{testimonial.content}"</p>
          <p className="text-sm font-medium text-brand-600">{testimonial.course}</p>
          <div className="flex items-center mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < testimonial.rating 
                    ? "fill-yellow-400 text-yellow-400" 
                    : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="h-10 w-10 rounded-full mr-3 object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;
