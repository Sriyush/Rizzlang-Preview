"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Book, Play } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'docs' | 'playground') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Docs', id: 'docs', icon: <Book size={18} /> },
    { name: 'Playground', id: 'playground', icon: <Play size={18} /> },
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 px-4"
      >
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between gap-8 bg-black/40 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/10">
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center font-bold text-white group-hover:rotate-12 transition-transform">
              R
            </div>
            <span className="font-bold text-white tracking-tight">Rizz++</span>
            <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px] font-mono text-gray-400 border border-white/5">v1.0</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => onNavigate(item.id as 'home' | 'docs' | 'playground')}
                className="px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
              >
                {item.icon}
                {item.name}
              </button>
            ))}
            <a
              href="https://github.com/Sriyush/RizzLang"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-gray-300 hover:text-white"
          >
            <Menu />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center md:hidden"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 p-4 text-gray-400 hover:text-white"
            >
              <X size={32} />
            </button>
            
            <div className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.id as 'home' | 'docs' | 'playground');
                    setIsMenuOpen(false);
                  }}
                  className="text-3xl font-bold text-white flex items-center justify-center gap-3"
                >
                  {item.icon} {item.name}
                </button>
              ))}
              <a
                href="https://github.com/Sriyush/RizzLang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl font-bold text-white flex items-center justify-center gap-3"
              >
                <Github size={28} /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
