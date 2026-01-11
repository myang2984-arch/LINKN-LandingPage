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
import { useState, useEffect } from 'react';

export default function App() {
  // Get initial view from URL path
  const getInitialView = (): 'home' | 'privacy' | 'terms' | 'support' => {
    const path = window.location.pathname;
    if (path === '/privacy' || path === '/privacy-policy') return 'privacy';
    if (path === '/terms' || path === '/terms-of-use') return 'terms';
    if (path === '/support') return 'support';
    return 'home';
  };

  const [currentView, setCurrentView] = useState<'home' | 'privacy' | 'terms' | 'support'>(getInitialView);

  // Update URL when view changes
  const navigateTo = (view: 'home' | 'privacy' | 'terms' | 'support') => {
    setCurrentView(view);

    // Update browser URL
    const pathMap = {
      'home': '/',
      'privacy': '/privacy',
      'terms': '/terms',
      'support': '/support'
    };

    window.history.pushState({}, '', pathMap[view]);

    // Scroll to top when navigating
    window.scrollTo(0, 0);
  };

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentView(getInitialView());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => navigateTo('home')} />;
  }

  if (currentView === 'terms') {
    return <TermsOfUse onBack={() => navigateTo('home')} />;
  }

  if (currentView === 'support') {
    return <Support onBack={() => navigateTo('home')} />;
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
      <Footer onNavigate={navigateTo} />
    </div>
  );
}