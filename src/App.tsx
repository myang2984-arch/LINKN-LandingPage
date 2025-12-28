import { Header } from './components/header';
import { Hero } from './components/hero';
import { HowItWorks } from './components/how-it-works';
import { Features } from './components/features';
import { Pricing } from './components/pricing';
import { FinalCTA } from './components/final-cta';
import { BetaSignup } from './components/beta-signup';
import { Footer } from './components/footer';
import { PrivacyPolicy } from './components/privacy-policy';
import { TermsOfUse } from './components/terms-of-use';
import { Support } from './components/support';
import { useState } from 'react';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'support'>('home');

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'terms') {
    return <TermsOfUse onBack={() => setCurrentView('home')} />;
  }

  if (currentView === 'support') {
    return <Support onBack={() => setCurrentView('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <FinalCTA />
      <BetaSignup />
      <Footer onNavigate={setCurrentView} />
    </div>
  );
}