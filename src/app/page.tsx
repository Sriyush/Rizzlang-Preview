"use client";
import CodeExample from '@/components/codeExample';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import React, { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/next"
import DocsPage from '@/components/DocsPage';
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page: 'home' | 'docs' | 'playground') => {
    if (page === 'playground') {
      setCurrentPage('home');
      // Use a timeout to ensure the component is rendered before scrolling
      setTimeout(() => {
        document.getElementById('try-it')?.scrollIntoView({ behavior: 'smooth' });
      }, 0);
      window.history.pushState(null, '', `/`);
    } else {
      setCurrentPage(page);
      window.history.pushState(null, '', `/${page === 'home' ? '' : page}`);
      window.scrollTo(0, 0);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.substring(1);
      setCurrentPage(path || 'home');
    };

    // Set initial page based on URL
    const path = window.location.pathname.substring(1);
    if (path === 'docs') {
      setCurrentPage('docs');
    }

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);


  return (
    <div className="min-h-screen bg-black text-gray-100 overflow-x-hidden">
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(189,137,79,0.15)_0%,_rgba(0,0,0,0)_70%)] z-0"
        aria-hidden="true"
      ></div>
      <div className="relative z-10">
        <Header onNavigate={navigate} />
        <main>
          {currentPage === 'home' ? (
            <>
              <Hero />
              <Features />
              <CodeExample />
            </>
          ) : (
            <DocsPage onNavigate={navigate} />
          )}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;