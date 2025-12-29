'use client';

import { useState } from 'react';
import { Play, Zap, Download, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  onPlayClick?: () => void;
  onDownloadClick?: () => void;
}

export default function Hero({ onPlayClick, onDownloadClick }: Props) {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-magenta-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(34,211,238,0.05)_25%,rgba(34,211,238,0.05)_26%,transparent_27%,transparent_74%,rgba(34,211,238,0.05)_75%,rgba(34,211,238,0.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,211,238,0.05)_25%,rgba(34,211,238,0.05)_26%,transparent_27%,transparent_74%,rgba(34,211,238,0.05)_75%,rgba(34,211,238,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px] pointer-events-none opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-center items-center text-center">
        {/* Top badge */}
        <div className="mb-8 inline-block">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-slate-950 px-4 py-2 rounded-full border border-cyan-400/50">
              <span className="text-cyan-400 text-sm font-semibold flex items-center gap-2">
                <Zap className="w-4 h-4" />
                NEXT-GEN RACING EXPERIENCE
              </span>
            </div>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-black mb-6 tracking-tighter leading-none">
          <span className="bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] animate-pulse">
            CYBER
          </span>
          <br />
          <span className="bg-gradient-to-r from-magenta-400 via-cyan-400 to-magenta-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(217,70,239,0.3)]">
            DRIFT
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
          Push beyond the limits. <span className="text-cyan-400 font-semibold">Race through neon-lit cities</span>, dodge deadly obstacles, and <span className="text-magenta-400 font-semibold">become a legend</span> in the cyberpunk underground.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-xl text-center">
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">2.5M+</div>
            <div className="text-sm text-gray-400">Active Racers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-magenta-400 mb-2">847</div>
            <div className="text-sm text-gray-400">Tracks</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-sm text-gray-400">Characters</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button
            onClick={onPlayClick}
            className="relative group px-8 py-6 text-lg font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 rounded-lg border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
            <span className="relative flex items-center gap-2">
              <Play className="w-5 h-5 fill-current" />
              PLAY NOW
            </span>
          </Button>
          
          <Button
            onClick={onDownloadClick}
            className="relative group px-8 py-6 text-lg font-bold bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Download className="w-5 h-5" />
              DOWNLOAD
            </span>
          </Button>
        </div>

        {/* Sound toggle */}
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="p-3 rounded-lg border border-gray-600 hover:border-cyan-500 text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]"
          aria-label="Toggle sound"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5" />
          ) : (
            <Volume2 className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="text-cyan-400 text-sm font-semibold mb-2">SCROLL</div>
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}