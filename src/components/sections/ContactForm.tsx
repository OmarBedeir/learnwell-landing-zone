
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useToast } from '@/components/ui/use-toast';

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will respond shortly.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">
        Get in <span className="gradient-text">Touch</span>
      </h2>
      <p className="section-subtitle">
        Have questions or need more information? We're here to help you on your learning journey.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="animate-fade-in">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="lg:pl-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
          <div className="bg-gradient-to-br from-brand-600 to-purple-600 rounded-xl shadow-lg p-8 text-white h-full">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-8">
              We're excited to hear from you! Reach out using the contact information below or fill out the form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p>contact@learnwell.academy</p>
                  <p>support@learnwell.academy</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri, 9AM-5PM EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-4 mt-0.5" />
                <div>
                  <h4 className="font-medium">Office</h4>
                  <p>123 Learning Lane</p>
                  <p>Education City, CA 90210</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-brand-200 transition">Facebook</a>
                <a href="#" className="text-white hover:text-brand-200 transition">Twitter</a>
                <a href="#" className="text-white hover:text-brand-200 transition">Instagram</a>
                <a href="#" className="text-white hover:text-brand-200 transition">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
