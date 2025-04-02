
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Video, Sparkles, MessageSquare, BarChart, Zap } from 'lucide-react';

const features = [
  {
    icon: <Users className="h-6 w-6 text-creator-purple" />,
    title: 'Connect with Creators',
    description: 'Find and collaborate with like-minded content creators in your niche.'
  },
  {
    icon: <Video className="h-6 w-6 text-creator-pink" />,
    title: 'Showcase Your Content',
    description: 'Display your best videos and get constructive feedback from the community.'
  },
  {
    icon: <Sparkles className="h-6 w-6 text-creator-cyan" />,
    title: 'Exchange Creative Ideas',
    description: 'Share and discover fresh content ideas to inspire your next hit video.'
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-creator-purple" />,
    title: 'Engage in Discussions',
    description: 'Join topic-focused conversations with other creators in your field.'
  },
  {
    icon: <BarChart className="h-6 w-6 text-creator-pink" />,
    title: 'Analytics Insights',
    description: 'Share insights and strategies for growing your channel and audience.'
  },
  {
    icon: <Zap className="h-6 w-6 text-creator-cyan" />,
    title: 'Rapid Feedback',
    description: 'Get quick feedback on thumbnails, titles, and video concepts.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-creator-dark text-white content-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Platform <span className="bg-gradient-to-r from-creator-purple to-creator-pink text-transparent bg-clip-text">Features</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Everything you need to grow your YouTube channel through meaningful collaborations and community engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-md border-white/10 hover:bg-white/15 transition-all hover:scale-105">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
