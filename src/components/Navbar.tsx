import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Menu, 
  X, 
  Bell, 
  MessageSquare, 
  Users, 
  Video, 
  Home, 
  Sparkles 
} from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gradient-to-br from-creator-purple to-creator-pink rounded-lg flex items-center justify-center animate-pulse-glow">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold creator-gradient-text">TubeTribe</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link">
              <Home className="h-4 w-4 inline-block mr-1" /> Home
            </Link>
            <Link to="/discover" className="nav-link">
              <Users className="h-4 w-4 inline-block mr-1" /> Discover
            </Link>
            <Link to="/ideas" className="nav-link">
              <Sparkles className="h-4 w-4 inline-block mr-1" /> Ideas
            </Link>
            <Link to="/videos" className="nav-link">
              <Video className="h-4 w-4 inline-block mr-1" /> Videos
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-100 px-3 py-1.5 flex-1 mx-4 max-w-md">
            <Search className="h-4 w-4 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search creators, ideas, videos..." 
              className="bg-transparent border-none outline-none w-full text-sm"
            />
          </div>
          
          {/* User Navigation */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="icon" className="rounded-full bg-gray-100">
              <Bell className="h-5 w-5 text-gray-700" />
            </Button>
            <Avatar className="h-10 w-10 border-2 border-creator-purple cursor-pointer hover:scale-110 transition-transform">
              <img src="https://i.pravatar.cc/300" alt="User profile" />
            </Avatar>
            <Button className="creator-button">
              Upload <Video className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 slide-up">
            <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-100 px-3 py-2 mb-4">
              <Search className="h-4 w-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search creators, ideas, videos..." 
                className="bg-transparent border-none outline-none w-full text-sm"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="nav-link flex items-center">
                <Home className="h-5 w-5 mr-2" /> Home
              </Link>
              <Link to="/discover" className="nav-link flex items-center">
                <Users className="h-5 w-5 mr-2" /> Discover
              </Link>
              <Link to="/ideas" className="nav-link flex items-center">
                <Sparkles className="h-5 w-5 mr-2" /> Ideas
              </Link>
              <Link to="/videos" className="nav-link flex items-center">
                <Video className="h-5 w-5 mr-2" /> Videos
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
