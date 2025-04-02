
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const JoinCTA = () => {
  return (
    <section className="py-20 overflow-hidden relative">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-creator-purple/20 via-creator-pink/20 to-creator-cyan/20 z-0"></div>
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-creator-purple/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-creator-pink/20 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="creator-gradient-text">Elevate</span> Your Creator Journey?
          </h2>
          
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Join thousands of content creators who are connecting, collaborating, and growing their channels together on CreatorVerse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="creator-button text-lg py-6 px-8">
              Join Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-white text-lg py-6 px-8 rounded-full border-creator-purple text-creator-purple hover:bg-creator-purple/5">
              Schedule a Demo
            </Button>
          </div>
          
          <div className="mt-10 flex gap-10 justify-center">
            <div className="animate-float">
              <img 
                src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Creator" 
                className="h-16 w-16 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Creator" 
                className="h-16 w-16 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Creator" 
                className="h-16 w-16 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="animate-float" style={{ animationDelay: '0.6s' }}>
              <img 
                src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80" 
                alt="Creator" 
                className="h-16 w-16 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            Join 10,000+ creators who have already discovered the power of collaboration
          </p>
        </div>
      </div>
    </section>
  );
};

export default JoinCTA;
