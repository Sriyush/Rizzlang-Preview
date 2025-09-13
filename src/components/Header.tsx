import React, { useState } from 'react';

const HamburgerIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
);

const CloseIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
);

interface HeaderProps {
  onNavigate: (page: 'home' | 'docs' | 'playground') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'docs' | 'playground') => {
    onNavigate(page);
    setIsMenuOpen(false);
  };
  
  const handleHomeClick = () => {
    onNavigate('home');
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="fixed py-6 px-4 sm:px-8 md:px-12 top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <button 
            onClick={handleHomeClick}
            className="bg-black/50 cursor-pointer backdrop-blur-sm border border-gray-700/50 rounded-full py-2 px-4 flex items-center gap-3 cursor-pointer hover:border-gray-600 transition-colors"
            aria-label="Go to homepage"
          >
              <h1 className="text-md font-bold text-white">
                Rizz++
              </h1>
              <span className="bg-black border border-white/20 text-gray-300 text-xs font-semibold px-2 py-0.5 rounded-full">v1.0-alpha</span>
          </button>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-2 bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-full py-2 px-3">
            <button onClick={() => onNavigate('docs')} className="text-gray-300 hover:bg-gray-700/50 rounded-full px-3 py-1 transition-colors">Docs</button>
            <button onClick={() => onNavigate('playground')} className="text-gray-300 hover:bg-gray-700/50 rounded-full px-3 py-1 transition-colors">PlayGround</button>
            <a 
              href="https://github.com/Sriyush/RizzLang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:bg-gray-700/50 rounded-full px-3 py-1 transition-colors"
            >
              GitHub
            </a>
          </nav>
          
          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="bg-black/50 backdrop-blur-sm border border-gray-700/50 rounded-full p-2 text-white"
              aria-label="Open navigation menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/70 backdrop-blur-lg z-[100] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="absolute top-6 right-4 sm:right-8">
             <button 
              onClick={() => setIsMenuOpen(false)} 
              className="p-2 text-white"
              aria-label="Close navigation menu"
            >
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-8 text-center">
            <button onClick={() => handleNavClick('docs')} className="text-2xl text-gray-300 hover:text-white transition-colors">Docs</button>
            <button onClick={() => handleNavClick('playground')} className="text-2xl text-gray-300 hover:text-white transition-colors">PlayGround</button>
            <a 
              href="https://github.com/Sriyush/RizzLang" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-gray-300 hover:text-white transition-colors"
            >
              GitHub
            </a>
          </nav>
      </div>
    </>
  );
};

export default Header;