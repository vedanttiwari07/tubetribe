
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThumbsUp, MessageSquare, Share2, Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: "How to Optimize Your YouTube SEO in 2023",
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    creator: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?u=alex"
    },
    views: "245K",
    category: "Tutorial",
    likes: 15200,
    comments: 324
  },
  {
    id: 2,
    title: "Budget Camera Setup for New YouTubers",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    creator: {
      name: "Maya Williams",
      avatar: "https://i.pravatar.cc/150?u=maya"
    },
    views: "189K",
    category: "Equipment",
    likes: 12400,
    comments: 256
  },
  {
    id: 3,
    title: "Storytelling Techniques for Better YouTube Videos",
    thumbnail: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: {
      name: "Daniel Lee",
      avatar: "https://i.pravatar.cc/150?u=daniel"
    },
    views: "312K",
    category: "Strategy",
    likes: 18900,
    comments: 412
  },
  {
    id: 4,
    title: "Advanced Editing Tips for Cinematic YouTube Videos",
    thumbnail: "https://images.unsplash.com/photo-1574717024172-ae684e473d2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: {
      name: "Sophia Chen",
      avatar: "https://i.pravatar.cc/150?u=sophia"
    },
    views: "420K",
    category: "Editing",
    likes: 22500,
    comments: 578
  },
  {
    id: 5,
    title: "How to Grow Your YouTube Channel in 30 Days",
    thumbnail: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    creator: {
      name: "Emma Roberts",
      avatar: "https://i.pravatar.cc/150?u=emma"
    },
    views: "520K",
    category: "Growth",
    likes: 31200,
    comments: 825
  },
  {
    id: 6,
    title: "Best Lighting Setup for YouTube on a Budget",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
    creator: {
      name: "James Wilson",
      avatar: "https://i.pravatar.cc/150?u=james"
    },
    views: "185K",
    category: "Equipment",
    likes: 9800,
    comments: 236
  }
];

const Videos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Featured Videos</h1>
            <p className="text-gray-600 mb-8">Learn from top YouTubers in our community</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover-scale border-0 shadow-lg hover:shadow-xl transition-all">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <Button variant="default" size="icon" className="rounded-full bg-white/20 backdrop-blur-sm h-14 w-14">
                        <Play className="h-6 w-6 text-white" fill="white" />
                      </Button>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-creator-purple/80 backdrop-blur-sm">
                      {video.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{video.title}</h3>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <img src={video.creator.avatar} alt={video.creator.name} />
                        </Avatar>
                        <span className="text-sm font-medium">{video.creator.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{video.views} views</span>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
                        <ThumbsUp className="h-4 w-4" /> {(video.likes / 1000).toFixed(1)}K
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
                        <MessageSquare className="h-4 w-4" /> {video.comments}
                      </Button>
                      <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
                        <Share2 className="h-4 w-4" />
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

export default Videos;
