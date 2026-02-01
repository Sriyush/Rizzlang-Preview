"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Lock, Sparkles } from 'lucide-react';

const features = [
  {
    title: "Vibe Based Syntax",
    description: "No more semicolons. Just vibes. Write code that looks like a group chat.",
    icon: <Sparkles className="w-6 h-6 text-yellow-400" />,
    className: "lg:col-span-2 bg-gradient-to-br from-purple-900/20 to-black",
  },
  {
    title: "Blazingly Fast",
    description: "Built on C++ for performance that's straight bussin.",
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    className: "lg:col-span-1 bg-gradient-to-br from-blue-900/20 to-black",
  },
  {
    title: "Type Safe... Mostly",
    description: "It knows what you mean, fam. Smart inference keeps it 100.",
    icon: <Lock className="w-6 h-6 text-green-400" />,
    className: "lg:col-span-1 bg-gradient-to-br from-green-900/20 to-black",
  },
  {
    title: "WASM Ready",
    description: "Run it in the browser. Rizz up the web instantly.",
    icon: <Globe className="w-6 h-6 text-pink-400" />,
    className: "lg:col-span-2 bg-gradient-to-br from-pink-900/20 to-black",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Why Rizz++?
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            The programming language that doesn&apos;t just run, it <span className="text-white font-bold italic">slays</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all ${feature.className}`}
            >
              <div className="mb-6 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
