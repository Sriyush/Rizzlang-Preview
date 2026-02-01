'use client';
import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Play, Loader2, Terminal, AlertCircle } from 'lucide-react';
import { INITIAL_RIZZ_CODE } from '../constants';
import type { TranslationResult } from '../types';

const CodeExample: React.FC = () => {
  const [rizzCode, setRizzCode] = useState<string>(INITIAL_RIZZ_CODE);
  const [output, setOutput] = useState<TranslationResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = useCallback(async () => {
    if (!rizzCode.trim()) {
      setError("Bruh, write some code first.");
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
          explanation: "Compiled successfully. No cap.", 
        });
      } else {
        setError(data.error || "Compilation failed. L + Ratio.");
      }
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unexpected error.");
    } finally {
      setIsLoading(false);
    }
  }, [rizzCode]);

  return (
    <section id="try-it" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        >
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Terminal className="text-purple-500" />
              Playground
            </h2>
            <p className="text-gray-500 mt-1">Write Rizz++, get C++.</p>
          </div>
          
          <button
            onClick={handleTranslate}
            disabled={isLoading}
            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
          >
            {isLoading ? <Loader2 className="animate-spin" /> : <Play fill="black" size={18} />}
            {isLoading ? 'Cooking...' : 'Run Code'}
          </button>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-[600px]">
          {/* Editor */}
          <div className="relative group rounded-xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#111] flex items-center px-4 border-b border-white/5 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              <span className="ml-4 text-xs text-gray-500 font-mono">main.rizz</span>
            </div>
            <textarea
              value={rizzCode}
              onChange={(e) => setRizzCode(e.target.value)}
              className="w-full h-full pt-14 p-4 bg-transparent text-gray-300 font-mono text-sm focus:outline-none resize-none selection:bg-purple-500/30"
              spellCheck={false}
            />
          </div>

          {/* Terminal Output */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-black">
            <div className="absolute top-0 left-0 right-0 h-10 bg-[#111] flex items-center px-4 border-b border-white/5 justify-between">
              <span className="text-xs text-gray-500 font-mono">Terminal</span>
              {output && <span className="text-xs text-green-500 font-mono">● Ready</span>}
            </div>
            
            <div className="w-full h-full pt-14 p-4 font-mono text-sm overflow-auto">
              {!output && !error && !isLoading && (
                <div className="text-gray-600">
                  <p className="mb-2">Rizz++ Compiler v1.0.0</p>
                  <p>Waiting for input...</p>
                </div>
              )}

              {isLoading && (
                <div className="text-yellow-500 animate-pulse">
                  &gt; Compiling source...
                </div>
              )}

              {error && (
                <div className="text-red-400">
                  <div className="flex items-center gap-2 mb-2 text-red-500 font-bold">
                    <AlertCircle size={16} /> Error
                  </div>
                  <pre className="whitespace-pre-wrap font-mono">{error}</pre>
                </div>
              )}

              {output && (
                <div className="space-y-4">
                  <div className="text-gray-400">&gt; g++ main.cpp -o main</div>
                  <div className="text-gray-400">&gt; ./main</div>
                  <div className="p-4 bg-white/5 rounded-lg border border-white/5 text-green-300">
                    <pre className="whitespace-pre-wrap">{output.cppCode}</pre>
                  </div>
                  <div className="text-gray-500 text-xs mt-4 border-t border-white/5 pt-2">
                    {output.explanation}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExample;
