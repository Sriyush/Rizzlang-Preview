import React from 'react';
import { FEATURES } from '../constants';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800 transition-all duration-300 hover:border-amber-500/30 hover:bg-neutral-900 hover:-translate-y-1">
    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-amber-900/50 text-amber-400 mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-stone-100">{title}</h3>
    <p className="text-stone-400">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">The Ultimate Glow Up For Your Code</h2>
          <p className="text-lg text-stone-400">Everything you need to ship a main character project.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;