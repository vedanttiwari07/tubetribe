
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrendingIdeas from '@/components/TrendingIdeas';
import Features from '@/components/Features';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <TrendingIdeas />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
