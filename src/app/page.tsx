"use client";

import { useState, useEffect, useCallback } from "react";

type Quote = {
  id: number;
  text: string;
  author: string;
  category: "motivation" | "humor" | "wisdom" | "life";
};

const categoryColors: Record<string, string> = {
  motivation: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  humor: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  wisdom: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  life: "bg-sky-500/20 text-sky-400 border-sky-500/30",
};

export default function Home() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const fetchQuote = useCallback(async () => {
    setIsTransitioning(true);
    setIsLoading(true);

    try {
      const response = await fetch("/api/quote");
      const data = await response.json();

      // Small delay for smooth transition
      await new Promise((resolve) => setTimeout(resolve, 150));

      setQuote(data.quote);
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    } finally {
      setIsLoading(false);
      setTimeout(() => setIsTransitioning(false), 50);
    }
  }, []);

  useEffect(() => {
    fetchQuote();
  }, [fetchQuote]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl">
          {/* Header */}
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-8 text-center">
            Random Quote Generator
          </h1>

          {/* Quote Content */}
          <div
            className={`min-h-[200px] flex flex-col justify-center transition-all duration-300 ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {isLoading && !quote ? (
              <div className="flex justify-center items-center">
                <div className="w-8 h-8 border-2 border-slate-600 border-t-slate-300 rounded-full animate-spin" />
              </div>
            ) : quote ? (
              <>
                {/* Category Badge */}
                <div className="flex justify-center mb-6">
                  <span
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border capitalize ${
                      categoryColors[quote.category]
                    }`}
                  >
                    {quote.category}
                  </span>
                </div>

                {/* Quote Text */}
                <blockquote className="text-xl md:text-2xl text-slate-200 text-center leading-relaxed mb-6">
                  <span className="text-slate-500">&ldquo;</span>
                  {quote.text}
                  <span className="text-slate-500">&rdquo;</span>
                </blockquote>

                {/* Author */}
                <p className="text-slate-400 text-center text-lg">
                  &mdash; {quote.author}
                </p>
              </>
            ) : null}
          </div>

          {/* Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={fetchQuote}
              disabled={isLoading}
              className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Loading...
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                  New Quote
                </>
              )}
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-slate-500 text-center text-sm mt-6">
          Click the button to discover a new inspiring quote
        </p>
      </div>
    </div>
  );
}
