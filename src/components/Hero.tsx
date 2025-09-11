import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-40 md:py-56 text-center">
      <div className="container mx-auto px-4">
        <h2 
          className="font-onset-bold text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-stone-100" 
          style={{ textShadow: '0 0 40px rgba(255, 230, 180, 0.5), 0 0 70px rgba(229, 122, 50, 0.4)' }}
        >
          Rizz++
        </h2>
        <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto">
          The vibe-checked programming language built in C++. For the chronically online.
        </p>
      </div>
    </section>
  );
};

export default Hero;