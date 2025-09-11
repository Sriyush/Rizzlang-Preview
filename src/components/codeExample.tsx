'use client'
import React, { useState, useCallback, use } from 'react';
// import { translateRizzCode } from '../services/geminiService';
import { INITIAL_RIZZ_CODE } from '../constants';
import { CpuChipIcon, SparklesIcon, TerminalIcon } from './IconComponents';
import type { TranslationResult } from '../types';

const LoadingSpinner: React.FC = () => (
  <div className="flex items-center justify-center space-x-2">
    <div className="w-4 h-4 rounded-full animate-pulse bg-amber-500"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-orange-500 delay-200"></div>
    <div className="w-4 h-4 rounded-full animate-pulse bg-amber-600 delay-400"></div>
    <span className="ml-2 text-stone-300">AI is thinking...</span>
  </div>
);

const CodeExample: React.FC = () => {
  const [rizzCode, setRizzCode] = useState<string>(INITIAL_RIZZ_CODE);
  const [output, setOutput] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

const handleTranslate = useCallback(async () => {
  if (!rizzCode.trim()) {
    setError("Please enter some Rizz++ code to translate.");
    return;
  }
  setIsLoading(true);
  setError(null);
  setOutput(null);

  try {
    const res = await fetch("/api/run", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: rizzCode }),
    });

    const data = await res.json();

    if (res.ok) {
      setOutput({
        cppCode: data.output, 
        explanation: "You just rizzed the compiler.", 
      });
    } else {
      setError(data.error || "Compilation failed.");
    }
  } catch (err: any) {
    setError(err.message || "Unexpected error.");
  } finally {
    setIsLoading(false);
  }
}, [rizzCode]);

  return (
    <section id="try-it" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Try Rizz++ Live</h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Drop your Rizz++ code below and let our Gemini-powered AI translate it to C++ and explain it.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
            <div className="flex items-center gap-2 mb-4 text-amber-400">
              <TerminalIcon />
              <h3 className="text-lg font-bold">Rizz++ Code</h3>
            </div>
            <textarea
              value={rizzCode}
              onChange={(e) => setRizzCode(e.target.value)}
              className="w-full h-96 bg-black/50 text-stone-200 p-4 rounded-md font-mono text-sm border border-neutral-700 focus:ring-2 focus:ring-amber-500 focus:outline-none"
              placeholder="Enter your Rizz++ code here..."
            />
          </div>

          {/* Output Section */}
          <div className="bg-neutral-900/50 p-6 rounded-xl border border-neutral-800">
            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <CpuChipIcon />
              <h3 className="text-lg font-bold">C++ Output & Explanation</h3>
            </div>
            <div className="w-full h-96 bg-black/50 text-stone-300 p-4 rounded-md font-mono text-sm border border-neutral-700 overflow-y-auto">
              {isLoading && <div className="h-full flex items-center justify-center"><LoadingSpinner /></div>}
              {error && <div className="text-red-400 whitespace-pre-wrap">{error}</div>}
              {output && (
                <div>
                  <h4 className="text-stone-400 font-bold mb-2">// Your sizzling Ouput</h4>
                  <pre className="text-green-300 bg-black/20 p-3 rounded-md overflow-x-auto whitespace-pre-wrap"><code>{output.cppCode}</code></pre>
                  {/* <div className="flex items-center gap-2 my-4 text-amber-300">
                     <SparklesIcon />
                     <h4 className="font-bold">Gemini's Explanation</h4>
                  </div> */}
                  <p className="text-stone-300 font-sans whitespace-pre-wrap text-base">{output.explanation}</p>
                </div>
              )}
              {!isLoading && !error && !output && <div className="text-stone-500">Click the button to see the magic...</div>}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleTranslate}
            disabled={isLoading}
            className="bg-neutral-800 hover:bg-neutral-700 border border-neutral-600 text-white font-bold py-3 px-12 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? 'Compiling...' : 'Compiler and Run'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;