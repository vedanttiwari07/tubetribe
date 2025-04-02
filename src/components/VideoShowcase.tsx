
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Play, Eye, ThumbsUp, MessageSquare, ChevronRight, Clock, AlignLeft } from 'lucide-react';

// Mock data for videos
const videos = [
  {
    id: 1,
    thumbnail: 'https://images.unsplash.com/photo-1626379953822-baec19c3accd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'How to Optimize YouTube SEO in 2023',
    creator: {
      name: 'Tech Insights',
      avatar: 'https://i.pravatar.cc/150?u=techinsights'
    },
    views: '87K',
    likes: '5.2K',
    comments: 342,
    duration: '12:45'
  },
  {
    id: 2,
    thumbnail: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Advanced Video Editing Techniques for Beginners',
    creator: {
      name: 'Edit Master',
      avatar: 'https://i.pravatar.cc/150?u=editmaster'
    },
    views: '156K',
    likes: '11K',
    comments: 589,
    duration: '18:22'
  },
  {
    id: 3,
    thumbnail: 'https://images.unsplash.com/photo-1607968565043-36af90dde238?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
    title: 'Lighting Setup for Professional-Looking Videos',
    creator: {
      name: 'Studio Pro',
      avatar: 'https://i.pravatar.cc/150?u=studiopro'
    },
    views: '62K',
    likes: '3.8K',
    comments: 216,
    duration: '14:37'
  }
];

const VideoCard = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className="overflow-hidden border-0 shadow-lg video-hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video">
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button className="rounded-full bg-white text-creator-purple hover:bg-white/90 h-12 w-12 flex items-center justify-center">
            <Play className="h-5 w-5 fill-current" />
          </Button>
        </div>
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs py-1 px-2 rounded flex items-center">
          <Clock className="h-3 w-3 mr-1" /> {video.duration}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex gap-3 mb-3">
          <Avatar className="h-10 w-10">
            <img src={video.creator.avatar} alt={video.creator.name} />
          </Avatar>
          <div>
            <h3 className="font-semibold line-clamp-2">{video.title}</h3>
            <p className="text-gray-500 text-sm">{video.creator.name}</p>
          </div>
        </div>
        
        <div className="flex justify-between text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center"><Eye className="h-3 w-3 mr-1" /> {video.views}</span>
            <span className="flex items-center"><ThumbsUp className="h-3 w-3 mr-1" /> {video.likes}</span>
            <span className="flex items-center"><MessageSquare className="h-3 w-3 mr-1" /> {video.comments}</span>
          </div>
          <Badge variant="outline" className="bg-gray-100">
            <AlignLeft className="h-3 w-3 mr-1" /> Details
          </Badge>
        </div>
      </div>
    </Card>
  );
};

const VideoShowcase = () => {
  return (
    <section className="py-16 bg-white content-section">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Featured <span className="creator-gradient-text">Videos</span>
          </h2>
          <Button variant="ghost" className="text-creator-purple hover:text-creator-purple/80 flex items-center gap-1">
            View all <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
