'use client';

import { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Characters', href: '#characters' },
  { label: 'Modes', href: '#modes' },
  { label: 'Leaderboard', href: '#leaderboard' },
  { label: 'Contact', href: '#contact' }
];

interface Props {
  onPlayClick?: () => void;
}

export default function Header({ onPlayClick }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent border-b border-cyan-500/20 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative bg-slate-950 px-3 py-2 rounded-lg">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
            </div>
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-magenta-400 to-cyan-400 bg-clip-text text-transparent tracking-wider">
              CYBER DRIFT
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-magenta-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              onClick={onPlayClick}
              className="relative bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold px-6 py-2 rounded-lg border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)] transition-all duration-300"
            >
              <Zap className="w-4 h-4 mr-2" />
              PLAY NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyan-400 hover:text-magenta-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-6 pb-6 border-t border-cyan-500/20 pt-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-sm font-semibold text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={onPlayClick}
              className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-slate-950 font-bold rounded-lg border border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
            >
              <Zap className="w-4 h-4 mr-2" />
              PLAY NOW
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}