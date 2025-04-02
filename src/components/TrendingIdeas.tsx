import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ThumbsUp, MessageSquare, Share2, Bookmark, TrendingUp, Zap, Clock, Flame } from 'lucide-react';

const ideasData = {
  trending: [
    {
      id: 1,
      title: "Behind-the-scenes of video production workflow",
      description: "Share your setup and how you organize your filming schedule",
      author: {
        name: "Emma Wilson",
        avatar: "https://i.pravatar.cc/150?u=emma"
      },
      category: "Production",
      likes: 245,
      comments: 42,
      isBookmarked: false
    },
    {
      id: 2,
      title: "Comparing budget vs. premium camera gear",
      description: "Show what's actually worth spending money on for new creators",
      author: {
        name: "James Carter",
        avatar: "https://i.pravatar.cc/150?u=james"
      },
      category: "Equipment",
      likes: 189,
      comments: 37,
      isBookmarked: true
    },
    {
      id: 3,
      title: "Storytelling techniques that keep viewers engaged",
      description: "Breaking down what makes a compelling YouTube narrative",
      author: {
        name: "Olivia Martinez",
        avatar: "https://i.pravatar.cc/150?u=olivia"
      },
      category: "Content Strategy",
      likes: 312,
      comments: 56,
      isBookmarked: false
    },
  ],
  newest: [
    {
      id: 4,
      title: "Using AI tools to enhance YouTube video creation",
      description: "Exploring the latest AI tools that can save time in editing and production",
      author: {
        name: "Ryan Thomas",
        avatar: "https://i.pravatar.cc/150?u=ryan"
      },
      category: "Technology",
      likes: 87,
      comments: 14,
      isBookmarked: false
    },
    {
      id: 5,
      title: "Creating content for multiple platforms efficiently",
      description: "How to repurpose your YouTube videos for TikTok, Instagram, etc.",
      author: {
        name: "Lila Kim",
        avatar: "https://i.pravatar.cc/150?u=lila"
      },
      category: "Strategy",
      likes: 103,
      comments: 21,
      isBookmarked: false
    },
  ],
  popular: [
    {
      id: 6,
      title: "Thumbnail design secrets for higher click-through rates",
      description: "Advanced techniques to make your thumbnails stand out in the crowd",
      author: {
        name: "Marcus Johnson",
        avatar: "https://i.pravatar.cc/150?u=marcus"
      },
      category: "Design",
      likes: 521,
      comments: 98,
      isBookmarked: true
    },
    {
      id: 7,
      title: "YouTube algorithm: Latest insights and strategy changes",
      description: "What's working now in 2023 based on recent algorithm updates",
      author: {
        name: "Priya Sharma",
        avatar: "https://i.pravatar.cc/150?u=priya"
      },
      category: "Strategy",
      likes: 478,
      comments: 86,
      isBookmarked: false
    },
  ]
};

const IdeaCard = ({ idea }) => {
  const [isBookmarked, setIsBookmarked] = useState(idea.isBookmarked);
  const [likes, setLikes] = useState(idea.likes);
  const [hasLiked, setHasLiked] = useState(false);

  const handleLike = () => {
    if (hasLiked) {
      setLikes(likes - 1);
      setHasLiked(false);
    } else {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  return (
    <Card className="hover-scale overflow-hidden border-0 shadow-md hover:shadow-xl transition-all">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center gap-3">
            <Avatar>
              <img src={idea.author.avatar} alt={idea.author.name} />
            </Avatar>
            <div>
              <p className="font-medium text-sm">{idea.author.name}</p>
              <p className="text-gray-500 text-xs">Content Creator</p>
            </div>
          </div>
          <Badge className="bg-creator-purple/10 text-creator-purple border-creator-purple/20">
            {idea.category}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{idea.title}</h3>
        <p className="text-gray-600 mb-6 text-sm">{idea.description}</p>
      </CardContent>
      
      <CardFooter className="px-6 py-4 border-t border-gray-100 flex justify-between">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-1 ${hasLiked ? 'text-creator-pink' : 'text-gray-500'}`}
            onClick={handleLike}
          >
            <ThumbsUp className="h-4 w-4" /> {likes}
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
            <MessageSquare className="h-4 w-4" /> {idea.comments}
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 text-gray-500">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className={isBookmarked ? 'text-creator-purple' : 'text-gray-500'}
          onClick={() => setIsBookmarked(!isBookmarked)}
        >
          <Bookmark className="h-4 w-4" fill={isBookmarked ? 'currentColor' : 'none'} />
        </Button>
      </CardFooter>
    </Card>
  );
};

const TrendingIdeas = () => {
  return (
    <section className="py-16 bg-gray-50 content-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Content <span className="creator-gradient-text">Ideas Exchange</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover trending content ideas, share your own, and collaborate with other creators to bring fresh perspectives to your channel.
          </p>
        </div>
        
        <Tabs defaultValue="trending" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white p-1 shadow-md rounded-full">
              <TabsTrigger value="trending" className="rounded-full data-[state=active]:bg-creator-purple data-[state=active]:text-white">
                <TrendingUp className="h-4 w-4 mr-2" /> Trending
              </TabsTrigger>
              <TabsTrigger value="newest" className="rounded-full data-[state=active]:bg-creator-purple data-[state=active]:text-white">
                <Zap className="h-4 w-4 mr-2" /> Newest
              </TabsTrigger>
              <TabsTrigger value="popular" className="rounded-full data-[state=active]:bg-creator-purple data-[state=active]:text-white">
                <Flame className="h-4 w-4 mr-2" /> Popular
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ideasData.trending.map(idea => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="newest" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ideasData.newest.map(idea => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ideasData.popular.map(idea => (
                <IdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-10">
          <Button className="creator-button">
            Share Your Idea <Zap className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingIdeas;
