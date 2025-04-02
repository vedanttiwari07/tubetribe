
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Video } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-creator-purple/10 to-white pt-16 pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start space-y-6 animate-fade-in">
            <div className="px-4 py-1.5 rounded-full bg-creator-purple/10 border border-creator-purple/20 text-creator-purple font-medium text-sm flex items-center">
              <span className="animate-pulse mr-2">●</span> Connect with Fellow YouTubers
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Welcome to <span className="creator-gradient-text">TubeTribe</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Join a community of content creators to share ideas, get feedback, and grow your channel through meaningful collaborations.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button className="creator-button text-lg py-6 px-8">
                Join Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-white text-lg py-6 px-8 rounded-full hover:bg-gray-50">
                Learn More
              </Button>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-creator-purple">10K+</span>
                <span className="text-gray-600 text-sm flex items-center">
                  <Users className="h-4 w-4 mr-1" /> Creators
                </span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-creator-pink">50K+</span>
                <span className="text-gray-600 text-sm flex items-center">
                  <Video className="h-4 w-4 mr-1" /> Videos
                </span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-creator-purple to-creator-pink rounded-3xl blur-lg opacity-50 animate-pulse-glow"></div>
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="rounded-t-2xl overflow-hidden">
                <video 
                  className="w-full" 
                  autoPlay 
                  muted 
                  loop 
                  poster="https://images.unsplash.com/photo-1608500479600-78899029ba4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                >
                  <source src="https://assets.mixkit.co/videos/preview/mixkit-person-typing-on-a-laptop-keyboard-4826-large.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Get Started with TubeTribe</h3>
                <p className="text-gray-600">Connect with creators and grow your channel together.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
