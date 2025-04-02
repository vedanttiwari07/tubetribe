
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Youtube, Twitter, Instagram, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand & Newsletter */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 bg-gradient-to-br from-creator-purple to-creator-pink rounded flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold creator-gradient-text">TubeTribe</span>
            </div>
            <p className="text-gray-600 mb-6">
              The ultimate platform for YouTube creators to connect and grow together.
            </p>
            <div className="mb-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="creator-input" 
                />
                <Button className="creator-button whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-600 hover:text-creator-purple">Home</a></li>
              <li><a href="/discover" className="text-gray-600 hover:text-creator-purple">Discover Creators</a></li>
              <li><a href="/ideas" className="text-gray-600 hover:text-creator-purple">Content Ideas</a></li>
              <li><a href="/videos" className="text-gray-600 hover:text-creator-purple">Videos</a></li>
            </ul>
          </div>
          
          {/* Help & Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Help & Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-creator-purple">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creator-purple">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creator-purple">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-creator-purple">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <Separator className="mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2023 TubeTribe. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-creator-purple transition-colors">
              <Youtube className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-creator-purple transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-creator-purple transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
