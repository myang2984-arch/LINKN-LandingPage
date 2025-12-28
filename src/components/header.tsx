import linknLogo from 'figma:asset/3ecfadc073d815416152e0594c981c1696c540cb.png';

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
            <img src={linknLogo} alt="Linkn Logo" className="w-8 h-8 rounded-xl" />
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