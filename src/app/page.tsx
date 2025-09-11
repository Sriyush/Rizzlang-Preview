import CodeExample from '@/components/codeExample';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-stone-200 overflow-x-hidden font-onset-medium" >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(229,122,50,0.2)_0%,transparent_60%)] blur-3xl z-0" aria-hidden="true"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Features />
          <CodeExample />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;