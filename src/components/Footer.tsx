import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 py-8">
      <div className="container mx-auto px-4 text-center text-stone-400">
        <p className="text-xl font-bold mb-2 text-stone-200">Rizz++</p>
        <p>&copy; {new Date().getFullYear()} Rizz++. All rights reserved. Stay goated.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
          <a href="#" className="hover:text-white transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;