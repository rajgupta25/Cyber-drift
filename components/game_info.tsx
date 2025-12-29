'use client';

import { Zap, Target, Flame, Shield, Layers, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GameFeature } from '@/lib/types';

const GAME_FEATURES: GameFeature[] = [
  {
    id: '1',
    title: 'Lightning Fast Gameplay',
    description: 'Experience blazing-fast racing mechanics with instant responsiveness and zero lag.',
    icon: 'Zap'
  },
  {
    id: '2',
    title: 'Precision Steering',
    description: 'Master complex tracks with pixel-perfect controls and advanced handling physics.',
    icon: 'Target'
  },
  {
    id: '3',
    title: 'Power-Up System',
    description: 'Collect explosive power-ups and unleash devastating abilities during races.',
    icon: 'Flame'
  },
  {
    id: '4',
    title: 'Combat Mechanics',
    description: 'Engage in intense vehicular combat with shields, weapons, and tactical gameplay.',
    icon: 'Shield'
  },
  {
    id: '5',
    title: 'Layered Difficulty',
    description: 'Progress through multiple difficulty tiers with unique challenges and rewards.',
    icon: 'Layers'
  },
  {
    id: '6',
    title: 'Endless Unlockables',
    description: 'Unlock cosmetics, characters, and tracks as you climb the leaderboard.',
    icon: 'Sparkles'
  }
];

const SCREENSHOTS = [
  {
    id: '1',
    title: 'Neon City Streets',
    description: 'Race through vibrant neon-lit cities with dynamic lighting.'
  },
  {
    id: '2',
    title: 'Underground Tracks',
    description: 'Discover hidden tracks deep beneath the cyberpunk metropolis.'
  },
  {
    id: '3',
    title: 'Boss Encounters',
    description: 'Face legendary racers in epic one-on-one showdowns.'
  }
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'Zap': Zap,
  'Target': Target,
  'Flame': Flame,
  'Shield': Shield,
  'Layers': Layers,
  'Sparkles': Sparkles
};

interface Props {
  onFeatureClick?: (featureId: string) => void;
}

export default function GameInfo({ onFeatureClick }: Props) {
  return (
    <section id="features" className="relative min-h-screen py-20 bg-slate-950 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-magenta-500 rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-900/50 text-cyan-300 border-cyan-600/50 hover:bg-cyan-900">
            GAME FEATURES
          </Badge>
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent">
            What Makes CYBER DRIFT Legendary
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Discover the cutting-edge mechanics and immersive features that define the next generation of cyberpunk racing.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {GAME_FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon] || Zap;
            return (
              <Card
                key={feature.id}
                onClick={() => onFeatureClick?.(feature.id)}
                className="relative border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 cursor-pointer group backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-magenta-500/0 group-hover:from-cyan-500/5 group-hover:to-magenta-500/5 rounded-lg transition-all duration-300"></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-white mb-2">
                        {feature.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="p-3 w-fit bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg shadow-lg group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300">
                    <Icon className="w-6 h-6 text-slate-950" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Screenshots Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Stunning <span className="bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">Visuals</span>
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in breathtaking cyberpunk environments crafted for maximum immersion and visual impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {SCREENSHOTS.map((screenshot) => (
              <div
                key={screenshot.id}
                className="group relative rounded-lg overflow-hidden aspect-video border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] cursor-pointer backdrop-blur-sm bg-slate-800/30"
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-magenta-600/20 group-hover:from-cyan-500/30 group-hover:to-magenta-500/30 transition-all duration-300"></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(34,211,238,0.1)_25%,transparent_25%,transparent_50%,rgba(34,211,238,0.1)_50%,rgba(34,211,238,0.1)_75%,transparent_75%,transparent)] bg-[length:40px_40px] opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 z-10">
                  <div className="w-16 h-16 rounded-full border-2 border-cyan-400 flex items-center justify-center mx-auto mb-4 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all duration-300">
                    <div className="w-0 h-0 border-l-8 border-r-0 border-t-5 border-b-5 border-l-cyan-400 border-t-transparent border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-cyan-400 font-bold text-lg mb-1">{screenshot.title}</p>
                  <p className="text-gray-400 text-xs text-center">{screenshot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-cyan-400 mb-2">120+</div>
              <div className="text-sm text-gray-400 font-semibold">Tracks</div>
            </CardContent>
          </Card>

          <Card className="border-magenta-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-magenta-400 transition-all duration-300 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-magenta-400 mb-2">50+</div>
              <div className="text-sm text-gray-400 font-semibold">Characters</div>
            </CardContent>
          </Card>

          <Card className="border-cyan-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-cyan-400 mb-2">200+</div>
              <div className="text-sm text-gray-400 font-semibold">Items</div>
            </CardContent>
          </Card>

          <Card className="border-magenta-500/30 bg-gradient-to-br from-slate-800/50 to-slate-900/50 hover:border-magenta-400 transition-all duration-300 backdrop-blur-sm">
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-black text-magenta-400 mb-2">∞</div>
              <div className="text-sm text-gray-400 font-semibold">Fun</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}