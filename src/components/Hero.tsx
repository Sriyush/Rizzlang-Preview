"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-[128px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] -z-10 animate-pulse-slow delay-1000" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 font-mono text-sm"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          The Gen Z Programming Language
        </motion.div>

        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-6 relative">
          <span className="text-white mix-blend-overlay">Rizz</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">++</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Forget syntax errors. Write code that passes the <span className="text-white font-bold">vibe check</span>.
          Built in C++ for maximum performance and minimum cringe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('try-it')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all flex items-center gap-2"
          >
            Start Cooking <Terminal size={20} />
          </button>
          <a 
            href="https://github.com/Sriyush/RizzLang"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all flex items-center gap-2"
          >
            View Source <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>

      {/* Code Snippet Floating */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 hidden lg:block opacity-30 pointer-events-none"
      >
        <pre className="font-mono text-xs text-green-400 bg-black/50 p-4 rounded-lg border border-green-900/50">
          {`yo_mama main() {
  spit("Hello World");
  fr fr;
}`}
        </pre>
      </motion.div>
    </section>
  );
};

export default Hero;
