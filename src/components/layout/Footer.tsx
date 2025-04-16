
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4 font-heading">LearnWell</h2>
            <p className="text-gray-300 mb-4">Transforming lives through accessible, high-quality online education.</p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-gray-300 hover:text-white hover:bg-brand-600">
                <Facebook size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-gray-300 hover:text-white hover:bg-brand-600">
                <Twitter size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-gray-300 hover:text-white hover:bg-brand-600">
                <Instagram size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-gray-300 hover:text-white hover:bg-brand-600">
                <Linkedin size={18} />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full h-9 w-9 text-gray-300 hover:text-white hover:bg-brand-600">
                <Youtube size={18} />
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#courses" className="text-gray-300 hover:text-white">Courses</a></li>
              <li><a href="#instructors" className="text-gray-300 hover:text-white">Instructors</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Career Resources</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Student Success</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Affiliate Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-4">Get updates on new courses and features.</p>
            <div className="flex flex-col space-y-2">
              <div className="flex">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="rounded-r-none bg-gray-800 border-gray-700 focus:ring-brand-500 text-white"
                />
                <Button className="rounded-l-none">
                  <Mail size={16} className="mr-2" />
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} LearnWell Academy. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
