
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';
import { Plus, Star, Users } from 'lucide-react';

const creators = [
  {
    id: 1,
    name: 'Alex Johnson',
    handle: '@alexcreates',
    avatar: 'https://i.pravatar.cc/150?u=alex',
    category: 'Tech Reviews',
    subscribers: '1.2M',
    videos: 120,
    isTrending: true
  },
  {
    id: 2,
    name: 'Maya Williams',
    handle: '@mayacreatives',
    avatar: 'https://i.pravatar.cc/150?u=maya',
    category: 'DIY & Crafts',
    subscribers: '850K',
    videos: 210,
    isTrending: true
  },
  {
    id: 3,
    name: 'Daniel Lee',
    handle: '@danieltravels',
    avatar: 'https://i.pravatar.cc/150?u=daniel',
    category: 'Travel Vlogs',
    subscribers: '2.5M',
    videos: 180,
    isTrending: false
  },
  {
    id: 4,
    name: 'Sophia Chen',
    handle: '@sophiacookery',
    avatar: 'https://i.pravatar.cc/150?u=sophia',
    category: 'Cooking',
    subscribers: '900K',
    videos: 165,
    isTrending: false
  },
  {
    id: 5,
    name: 'James Wilson',
    handle: '@jamesgaming',
    avatar: 'https://i.pravatar.cc/150?u=james',
    category: 'Gaming',
    subscribers: '3.2M',
    videos: 340,
    isTrending: true
  },
  {
    id: 6,
    name: 'Emma Roberts',
    handle: '@emmafitness',
    avatar: 'https://i.pravatar.cc/150?u=emma',
    category: 'Fitness',
    subscribers: '1.5M',
    videos: 230,
    isTrending: false
  }
];

const Discover = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Discover Creators</h1>
            <p className="text-gray-600 mb-8">Find and connect with content creators in your niche</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {creators.map((creator) => (
                <Card key={creator.id} className="overflow-hidden hover-scale border-0 shadow-lg hover:shadow-xl transition-all">
                  <div className="h-24 bg-gradient-to-r from-creator-purple/80 to-creator-pink/80"></div>
                  <CardContent className="p-5 -mt-12">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-20 w-20 border-4 border-white mb-3">
                        <img src={creator.avatar} alt={creator.name} />
                      </Avatar>
                      
                      <h3 className="text-xl font-bold">{creator.name}</h3>
                      <p className="text-gray-500 text-sm mb-2">{creator.handle}</p>
                      
                      {creator.isTrending && (
                        <Badge className="bg-creator-pink mb-3 flex items-center gap-1">
                          <Star className="h-3 w-3" /> Trending
                        </Badge>
                      )}
                      <Badge variant="outline" className="mb-4 bg-gray-100">
                        {creator.category}
                      </Badge>
                      
                      <div className="flex justify-between w-full mb-4">
                        <div className="flex flex-col items-center">
                          <span className="text-lg font-bold text-creator-purple">{creator.subscribers}</span>
                          <span className="text-xs text-gray-500">Subscribers</span>
                        </div>
                        <div className="w-px bg-gray-200"></div>
                        <div className="flex flex-col items-center">
                          <span className="text-lg font-bold text-creator-pink">{creator.videos}</span>
                          <span className="text-xs text-gray-500">Videos</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-creator-purple hover:bg-creator-purple/90">
                        <Plus className="h-4 w-4 mr-2" /> Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discover;
