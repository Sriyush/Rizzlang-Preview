"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Globe, Lock, Sparkles, Terminal } from 'lucide-react';

const features = [
  {
    title: "Install with Homebrew",
    description: "Get it on your Mac or Linux machine instantly.",
    icon: <Terminal className="w-5 h-5 text-purple-300" />,
    gradient: "from-purple-500/20 to-indigo-500/20",
    colSpan: "lg:col-span-2", // Special prop for grid layout
    command: "brew install sriyush/rizzlang/rizzlang"
  },
  {
    title: "Vibe Based Syntax",
    description: "No more semicolons. Just vibes. Write code that looks like a group chat.",
    icon: <Sparkles className="w-5 h-5 text-yellow-300" />,
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Blazingly Fast",
    description: "Built on C++ for performance that is absolutely bussin.",
    icon: <Zap className="w-5 h-5 text-blue-300" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Type Safe... Mostly",
    description: "It knows what you mean, fam. Smart inference keeps it 100.",
    icon: <Lock className="w-5 h-5 text-green-300" />,
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "WASM Ready",
    description: "Run it in the browser. Rizz up the web instantly.",
    icon: <Globe className="w-5 h-5 text-pink-300" />,
    gradient: "from-pink-500/20 to-rose-500/20",
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-8 rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden hover:border-white/10 transition-colors ${feature.colSpan || ''}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="mb-6 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm font-medium">{feature.description}</p>
                </div>
                
                {/* Special styling for Homebrew card */}
                {feature.command && (
                    <div className="mt-6 bg-black/50 rounded-lg p-3 font-mono text-xs text-gray-300 border border-white/10 flex items-center gap-2">
                        <span className="text-green-400">$</span> {feature.command}
                    </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
