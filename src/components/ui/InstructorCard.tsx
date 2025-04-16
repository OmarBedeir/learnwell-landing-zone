
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Globe } from "lucide-react";
import { Instructor } from '@/data/instructorsData';

interface InstructorCardProps {
  instructor: Instructor;
}

const InstructorCard: React.FC<InstructorCardProps> = ({ instructor }) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg highlight-animation">
      <div className="flex justify-center pt-6">
        <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-brand-100">
          <img 
            src={instructor.image} 
            alt={instructor.name} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-xl">{instructor.name}</CardTitle>
        <CardDescription>{instructor.title}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground text-center mb-4 line-clamp-3">{instructor.bio}</p>
        <div className="flex flex-wrap justify-center gap-2">
          {instructor.expertise.map((skill, index) => (
            <Badge key={index} variant="outline" className="bg-muted">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex justify-center gap-3">
        {instructor.socialLinks.linkedin && (
          <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
            <Linkedin size={16} />
          </Button>
        )}
        {instructor.socialLinks.twitter && (
          <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
            <Twitter size={16} />
          </Button>
        )}
        {instructor.socialLinks.website && (
          <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
            <Globe size={16} />
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default InstructorCard;
