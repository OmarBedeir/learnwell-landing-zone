
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { PricingPlan } from '@/data/pricingData';

interface PricingCardProps {
  plan: PricingPlan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card className={`h-full flex flex-col transition-all duration-300 hover:shadow-lg ${
      plan.popular ? 'border-2 border-brand-500 shadow-lg relative' : ''
    }`}>
      {plan.popular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white text-xs font-bold py-1 px-4 rounded-full">
          Most Popular
        </div>
      )}
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-center">{plan.name}</CardTitle>
        <CardDescription className="text-center">{plan.description}</CardDescription>
        <div className="text-center mt-4">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check size={18} className="mr-2 text-green-500 flex-shrink-0" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          className={`w-full ${plan.popular ? 'bg-brand-600 hover:bg-brand-700' : ''}`}
          variant={plan.popular ? 'default' : 'outline'}
        >
          {plan.buttonText}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
