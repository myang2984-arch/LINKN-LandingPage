import { Link2 } from 'lucide-react';

export function Header() {
  const scrollToSignup = () => {
    const element = document.getElementById('beta-signup');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
              <Link2 size={18} className="text-white" />
            </div>
            <span className="text-gray-900">linkn</span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={scrollToSignup}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Join Beta
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}