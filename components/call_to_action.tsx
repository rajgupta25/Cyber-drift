'use client';

import { useState } from 'react';
import { Play, Download, X, Gamepad2, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Props {
  onPlayClick?: () => void;
  onDownloadClick?: () => void;
}

export default function CallToAction({ onPlayClick, onDownloadClick }: Props) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const handlePlayClick = () => {
    onPlayClick?.();
    setIsDialogOpen(true);
  };

  const handleDownloadClick = (platform: string) => {
    setSelectedPlatform(platform);
    onDownloadClick?.();
    setIsDialogOpen(false);
  };

  return (
    <section className="relative min-h-screen py-20 bg-slate-950 overflow-hidden flex items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-magenta-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-6 bg-cyan-900/50 text-cyan-300 border-cyan-600/50 hover:bg-cyan-900 px-4 py-2">
            <Zap className="w-4 h-4 mr-2" />
            LIMITED TIME OFFER
          </Badge>
          
          <h2 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
            Ready to Race?
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join millions of racers worldwide. Download CYBER DRIFT now and experience the ultimate cyberpunk racing adventure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={handlePlayClick}
                  className="relative group px-10 py-6 text-lg font-bold bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 rounded-lg border border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] transition-all duration-300 hover:scale-105 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                  <span className="relative flex items-center gap-2">
                    <Play className="w-5 h-5 fill-current" />
                    PLAY NOW
                  </span>
                </Button>
              </DialogTrigger>

              <DialogContent className="border-cyan-500/30 bg-slate-900 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-cyan-400">Join the Race</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Select your platform and start racing now. No installation required on web version.
                  </DialogDescription>
                </DialogHeader>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  <Button
                    onClick={() => handleDownloadClick('browser')}
                    className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold py-6 rounded-lg border border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  >
                    <Gamepad2 className="w-5 h-5 mr-2" />
                    Play in Browser
                  </Button>

                  <Button
                    onClick={() => handleDownloadClick('windows')}
                    className="w-full bg-gradient-to-r from-magenta-500 to-magenta-600 hover:from-magenta-400 hover:to-magenta-500 text-white font-bold py-6 rounded-lg border border-magenta-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.4)]"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Windows
                  </Button>

                  <Button
                    onClick={() => handleDownloadClick('mac')}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold py-6 rounded-lg border border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    macOS
                  </Button>

                  <Button
                    onClick={() => handleDownloadClick('linux')}
                    className="w-full bg-slate-800 hover:bg-slate-700 text-magenta-400 font-bold py-6 rounded-lg border border-magenta-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(217,70,239,0.2)]"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Linux
                  </Button>
                </div>

                <div className="text-sm text-gray-400 border-t border-gray-700 pt-4">
                  <p className="mb-2">✓ Free to play</p>
                  <p className="mb-2">✓ Cross-platform multiplayer</p>
                  <p>✓ Regular updates & new content</p>
                </div>
              </DialogContent>
            </Dialog>

            <Button
              onClick={() => handleDownloadClick('download')}
              className="relative group px-10 py-6 text-lg font-bold bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-cyan-500/50 hover:border-cyan-400 rounded-lg shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                DOWNLOAD
              </span>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative group p-6 rounded-lg border border-cyan-500/30 bg-slate-800/30 hover:border-cyan-400 hover:bg-slate-800/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl font-black text-cyan-400 mb-2">2.5M+</div>
              <p className="text-gray-400 font-semibold">Active Players</p>
              <p className="text-sm text-gray-500 mt-2">Join the largest cyberpunk racing community</p>
            </div>
          </div>

          <div className="relative group p-6 rounded-lg border border-magenta-500/30 bg-slate-800/30 hover:border-magenta-400 hover:bg-slate-800/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-magenta-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl font-black text-magenta-400 mb-2">Free</div>
              <p className="text-gray-400 font-semibold">Forever</p>
              <p className="text-sm text-gray-500 mt-2">Play without spending a single dollar</p>
            </div>
          </div>

          <div className="relative group p-6 rounded-lg border border-cyan-500/30 bg-slate-800/30 hover:border-cyan-400 hover:bg-slate-800/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="text-2xl font-black text-cyan-400 mb-2">100%</div>
              <p className="text-gray-400 font-semibold">Cross-Platform</p>
              <p className="text-sm text-gray-500 mt-2">Play on any device, anytime</p>
            </div>
          </div>
        </div>

        {/* System Requirements */}
        <div className="p-6 rounded-lg border border-gray-700 bg-slate-800/20 backdrop-blur-sm text-center">
          <p className="text-sm text-gray-400 mb-4">
            <span className="font-semibold text-cyan-400">Minimum Requirements:</span> Intel i5 / AMD Ryzen 5 • 8GB RAM • 50GB Storage
          </p>
          <p className="text-xs text-gray-500">
            Recommended: Intel i7 / AMD Ryzen 7 • 16GB RAM • SSD with 50GB free space
          </p>
        </div>
      </div>
    </section>
  );
}