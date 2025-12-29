export interface GameFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GameMode {
  id: string;
  name: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard' | 'extreme';
  rewards: number;
  unlockLevel?: number;
}

export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  stats: {
    speed: number;
    acceleration: number;
    handling: number;
    defense: number;
  };
  abilities: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  author: string;
  title: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface LeaderboardEntry {
  id: string;
  rank: number;
  playerName: string;
  score: number;
  level: number;
  country: string;
  timestamp: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

export interface NewsletterSignup {
  id: string;
  email: string;
  status: 'pending' | 'subscribed' | 'unsubscribed';
  subscribedAt: string;
}

export interface GameStats {
  totalPlayers: number;
  totalMatches: number;
  averageSessionLength: number;
  dailyActiveUsers: number;
  worldwideRanking: number;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

export interface HeroSection {
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText: string;
  backgroundImage: string;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedBy: number;
}

export interface GameUpdate {
  id: string;
  version: string;
  title: string;
  description: string;
  features: string[];
  bugFixes: string[];
  releaseDate: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}