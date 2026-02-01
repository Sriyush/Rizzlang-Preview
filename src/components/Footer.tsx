import React from 'react';
import { Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 py-12 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-black text-white tracking-tighter mb-2">Rizz++</h2>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Rizz++. Crafted with <span className="text-pink-500">♥</span> and pure vibes.
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a 
            href="https://x.com/Sriyush1" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
          >
            <Twitter size={20} />
          </a>
          <a 
            href="https://github.com/Sriyush" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
