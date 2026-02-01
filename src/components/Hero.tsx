"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#050505] -z-20" />
      <div className="noise-bg -z-10 opacity-30" />
      
      {/* Massive Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-purple-900/30 to-blue-900/30 rounded-full blur-[150px] -z-10 animate-pulse-slow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="container mx-auto px-4 relative z-10 max-w-5xl"
      >
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-gray-300 font-medium text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          The Gen Z Programming Language
        </motion.div>

        {/* Main Title - Massive & Clean */}
        <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter mb-8 text-white mix-blend-difference selection:bg-white selection:text-black">
          RIZZ++
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Forget syntax errors. Write code that passes the <span className="text-white font-medium">vibe check</span>.
          <br className="hidden md:block" />
          Built in C++ for maximum performance and minimum cringe.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('try-it')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Start Cooking <Terminal size={18} />
          </button>
          <a 
            href="https://github.com/Sriyush/RizzLang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            View Source <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Floating Code Card */}
      <motion.div 
        initial={{ opacity: 0, rotate: -5 }}
        animate={{ opacity: 1, rotate: -5, y: [0, -15, 0] }}
        transition={{ delay: 0.5, duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 hidden xl:block"
      >
        <div className="glass rounded-xl p-4 w-64 border border-white/10 shadow-2xl">
          <div className="flex gap-2 mb-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
          </div>
          <pre className="font-mono text-xs text-gray-400">
            <span className="text-purple-400">yo_mama</span> main() {'{'}{'\n'}
            {'  '}spit(<span className="text-green-400">&quot;Hello World&quot;</span>);{'\n'}
            {'  '}fr fr;{'\n'}
            {'}'}
          </pre>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
