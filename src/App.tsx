import { Header } from './components/header';
import { Hero } from './components/hero';
import { HowItWorks } from './components/how-it-works';
import { Features } from './components/features';
import { Pricing } from './components/pricing';
import { BetaSignup } from './components/beta-signup';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <Pricing />
      <BetaSignup />
      <Footer />
    </div>
  );
}
