import { Twitter, Mail } from 'lucide-react';
import linknLogo from 'figma:asset/3ecfadc073d815416152e0594c981c1696c540cb.png';

interface FooterProps {
  onNavigate: (view: 'home' | 'privacy' | 'terms' | 'support') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigation = (view: 'privacy' | 'terms' | 'support') => {
    onNavigate(view);
    scrollToTop();
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={linknLogo} alt="Linkn Logo" className="w-8 h-8 rounded-xl" />
              <span className="text-white">linkn</span>
            </div>
            <p className="text-gray-400">
              Save links from anywhere, sync to Notion automatically
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
              </li>
              <li>
                <a href="#beta-signup" className="hover:text-white transition-colors">Join Beta</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('privacy')}
                  className="hover:text-white transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('terms')}
                  className="hover:text-white transition-colors text-left"
                >
                  Terms of Use
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('support')}
                  className="hover:text-white transition-colors text-left"
                >
                  Support
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="flex gap-4">
              <a href="mailto:myang2984@gmail.com" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://x.com/fairytaleYmy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 linkn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}