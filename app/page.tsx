'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import GameInfo from '@/components/game_info';
import CallToAction from '@/components/call_to_action';
import { GameFeature, GameMode, Character } from '@/lib/types';

const MOCK_GAME_FEATURES: GameFeature[] = [
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

const MOCK_GAME_MODES: GameMode[] = [
  {
    id: '1',
    name: 'Story Mode',
    description: 'Follow the underground racing legend and uncover the mystery behind CYBER DRIFT.',
    difficulty: 'medium',
    rewards: 5000,
    unlockLevel: 0
  },
  {
    id: '2',
    name: 'Arcade Mode',
    description: 'Fast-paced endless racing with increasing difficulty and leaderboard rankings.',
    difficulty: 'hard',
    rewards: 7500,
    unlockLevel: 5
  },
  {
    id: '3',
    name: 'Time Attack',
    description: 'Race against the clock on iconic tracks with global competitive rankings.',
    difficulty: 'extreme',
    rewards: 10000,
    unlockLevel: 10
  }
];

const MOCK_CHARACTERS: Character[] = [
  {
    id: '1',
    name: 'Nyx',
    title: 'The Shadow Racer',
    description: 'Master of stealth and speed with exceptional handling abilities.',
    rarity: 'legendary',
    stats: {
      speed: 95,
      acceleration: 88,
      handling: 92,
      defense: 75
    },
    abilities: ['Shadow Cloak', 'Drift Mastery', 'Turbo Boost'],
    image: 'nyx-character.png'
  },
  {
    id: '2',
    name: 'Vex',
    title: 'The Rage Driver',
    description: 'Aggressive racer with unmatched acceleration and raw power.',
    rarity: 'epic',
    stats: {
      speed: 92,
      acceleration: 98,
      handling: 78,
      defense: 85
    },
    abilities: ['Rage Mode', 'Nitro Burst', 'Shock Wave'],
    image: 'vex-character.png'
  },
  {
    id: '3',
    name: 'Echo',
    title: 'The Tech Master',
    description: 'Brilliant strategist equipped with advanced AI-assisted driving systems.',
    rarity: 'epic',
    stats: {
      speed: 88,
      acceleration: 85,
      handling: 95,
      defense: 88
    },
    abilities: ['AI Assistant', 'Predictive Drift', 'Shield Generator'],
    image: 'echo-character.png'
  }
];

export default function Page() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const [selectedGameMode, setSelectedGameMode] = useState<string | null>(null);
  const [selectedCharacter, setSelectedCharacter] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFeatureClick = (featureId: string) => {
    setSelectedFeature(selectedFeature === featureId ? null : featureId);
  };

  const handleGameModeSelect = (modeId: string) => {
    setSelectedGameMode(modeId);
  };

  const handleCharacterSelect = (characterId: string) => {
    setSelectedCharacter(characterId);
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    console.log('Starting game with character:', selectedCharacter, 'mode:', selectedGameMode);
  };

  const handleDownloadClick = () => {
    console.log('Initiating download...');
  };

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      {/* Header Navigation */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Game Features Section */}
      <GameInfo onFeatureClick={handleFeatureClick} />

      {/* Call to Action Section */}
      <CallToAction onPlayClick={handlePlayClick} onDownloadClick={handleDownloadClick} />

      {/* Footer */}
      <footer className="relative py-12 bg-slate-950 border-t border-cyan-500/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">CYBER DRIFT</h3>
              <p className="text-sm text-gray-400">
                The ultimate cyberpunk racing experience.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Game</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Characters</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Leaderboard</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Community</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Discord</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Forums</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">YouTube</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © 2024 CYBER DRIFT. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                System Status
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Support
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Feedback
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Hidden data for future use */}
      <div className="hidden">
        {JSON.stringify({
          selectedFeature,
          selectedGameMode,
          selectedCharacter,
          gameFeatures: MOCK_GAME_FEATURES,
          gameModes: MOCK_GAME_MODES,
          characters: MOCK_CHARACTERS,
          isPlaying
        })}
      </div>
    </div>
  );
}