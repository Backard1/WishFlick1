import React, { useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PopularWishlists from '../components/PopularWishlists';
import SocialFeed from '../components/SocialFeed';
import Footer from '../components/Footer';
import AuthModal from '../components/AuthModal';

const HomePage: React.FC = () => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleLoginClick = () => {
    setAuthMode('login');
    setIsAuthModalOpen(true);
  };

  const handleRegisterClick = () => {
    setAuthMode('register');
    setIsAuthModalOpen(true);
  };

  const handleSwitchMode = (mode: 'login' | 'register') => {
    setAuthMode(mode);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        onLoginClick={handleLoginClick}
        onRegisterClick={handleRegisterClick}
      />
      <HeroSection />
      <FeaturesSection />
      <PopularWishlists />
      <SocialFeed />
      <Footer />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        mode={authMode}
        onSwitchMode={handleSwitchMode}
      />
    </div>
  );
};

export default HomePage;