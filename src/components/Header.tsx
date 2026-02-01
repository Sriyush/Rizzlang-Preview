"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Book, Play } from 'lucide-react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'docs' | 'playground') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Docs', id: 'docs', icon: <Book size={16} /> },
    { name: 'Playground', id: 'playground', icon: <Play size={16} /> },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
        <div className="container mx-auto px-4 flex justify-center">
          <div className={`
            flex items-center justify-between gap-8 px-6 py-3 rounded-full transition-all duration-300 w-full max-w-2xl
            ${scrolled ? 'bg-black/60 backdrop-blur-xl border border-white/10 shadow-lg' : 'bg-transparent border border-transparent'}
          `}>
            <button 
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black font-bold text-lg group-hover:scale-110 transition-transform">
                R
              </div>
              <span className="font-bold text-white tracking-tight hidden sm:block">Rizz++</span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => onNavigate(item.id as 'home' | 'docs' | 'playground')}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
              <div className="w-px h-4 bg-white/10 mx-2" />
              <a
                href="https://github.com/Sriyush/RizzLang"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <Github size={20} />
              </a>
            </nav>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-white hover:bg-white/10 rounded-full"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black p-6 md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-bold text-2xl text-white">Menu</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 bg-white/10 rounded-full text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    onNavigate(item.id as 'home' | 'docs' | 'playground');
                    setIsMenuOpen(false);
                  }}
                  className="text-2xl font-medium text-gray-400 hover:text-white text-left py-4 border-b border-white/5 flex items-center gap-4"
                >
                  {item.icon} {item.name}
                </button>
              ))}
              <a
                href="https://github.com/Sriyush/RizzLang"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-medium text-gray-400 hover:text-white text-left py-4 border-b border-white/5 flex items-center gap-4"
              >
                <Github size={20} /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
