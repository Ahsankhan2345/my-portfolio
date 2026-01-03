import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    /* 1. flex-col: Mobile par content vertical rahega.
       2. items-center: Content horizontal center rahega.
    */
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      
      {/* Main container jo width control karega:
         - w-full: Mobile par poori width lega.
         - max-w-7xl: Bari screens par content bohot zyada phailay ga nahi.
         - px-4/6/8: Screens ke hisab se side padding change hogi.
      */}
      <main className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section */}
        <div className="py-8 md:py-16 lg:py-24">
          <HeroSection />
        </div>

        {/* Aap mazeed sections yahan add kar saktay hain */}
        
      </main>
    </div>
  );
}