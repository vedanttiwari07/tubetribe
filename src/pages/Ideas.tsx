
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrendingIdeas from '@/components/TrendingIdeas';

const Ideas = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="py-8 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl font-bold mb-2">Content Ideas</h1>
              <p className="text-gray-600 mb-8">Discover trending content ideas and share your own</p>
            </div>
          </div>
        </div>
        <TrendingIdeas />
      </main>
      <Footer />
    </div>
  );
};

export default Ideas;
