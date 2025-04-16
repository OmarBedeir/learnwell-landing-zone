
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Course } from '@/data/coursesData';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg highlight-animation">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
        <Badge className="absolute top-3 right-3 bg-brand-600" variant="default">
          {course.level}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl line-clamp-1">{course.title}</CardTitle>
        <CardDescription className="flex items-center text-sm">
          by {course.instructor} • {course.duration}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">{course.description}</p>
        <div className="flex items-center mt-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${
                i < Math.floor(course.rating) 
                  ? "fill-yellow-400 text-yellow-400" 
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-medium">{course.rating}</span>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center">
        <span className="font-bold text-lg">${course.price}</span>
        <Button size="sm">Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
