
import React from 'react';
import PricingCard from '../ui/PricingCard';
import { pricingPlans } from '@/data/pricingData';

const PricingPlans: React.FC = () => {
  return (
    <section id="pricing" className="section-container bg-gray-50">
      <h2 className="section-title">
        Simple, Transparent <span className="gradient-text">Pricing</span>
      </h2>
      <p className="section-subtitle">
        Choose the plan that fits your learning goals and budget. All plans include access to our community.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div key={plan.id} 
            className="animate-fade-in" 
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <PricingCard plan={plan} />
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          All plans include a 30-day money-back guarantee. No questions asked.
        </p>
      </div>
    </section>
  );
};

export default PricingPlans;
