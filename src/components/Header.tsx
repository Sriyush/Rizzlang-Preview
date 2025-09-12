import React from 'react';

interface HeaderProps {
  onNavigate: (page: 'home' | 'docs' | 'playground') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="py-6 px-4 sm:px-8 md:px-12 absolute top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={() => onNavigate('home')}
          className="bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-full py-2 px-4 flex items-center gap-3 cursor-pointer hover:border-gray-600 transition-colors"
          aria-label="Go to homepage"
        >
            <h1 className="text-md font-bold text-white">
              Rizz++
            </h1>
            <span className="bg-black border border-white/20 text-gray-300 text-xs font-semibold px-2 py-0.5 rounded-full">v1.0-alpha</span>
        </button>
        <nav className="hidden md:flex items-center space-x-2 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-full py-2 px-3">
          <button onClick={() => onNavigate('docs')} className="text-gray-300 hover:bg-gray-700/50 rounded-full px-3 py-1 transition-colors">Docs</button>
          <button onClick={() => onNavigate('playground')} className="text-gray-300 hover:bg-gray-700/50 rounded-full px-3 py-1 transition-colors">PlayGround</button>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:bg-gray-700/50 rounded-full px-3 py-1 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;