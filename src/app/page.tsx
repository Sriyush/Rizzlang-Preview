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
      setTimeout(() => {
        document.getElementById('try-it')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
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
    <div className="min-h-screen bg-black text-gray-100 selection:bg-purple-500/30">
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
      <Analytics/>
    </div>
  );
};

export default App;
