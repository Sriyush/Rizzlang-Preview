import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="bg-black/40 border border-white/20 rounded-full px-4 py-1 flex items-center gap-2">
            <span className="text-xl font-bold text-stone-100">Rizz++</span>
            <span className="bg-stone-700 text-stone-300 text-xs font-medium px-2 py-0.5 rounded-full">v1.0-alpha</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6 bg-black/40 border border-white/20 rounded-full px-6 py-2">
          <a href="#features" className="text-stone-300 hover:text-white transition-colors">Docs</a>
          <a href="#try-it" className="text-stone-300 hover:text-white transition-colors">PlayGround</a>
          <a 
            href="https://github.com/Sriyush/RizzLang" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-stone-300 hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;