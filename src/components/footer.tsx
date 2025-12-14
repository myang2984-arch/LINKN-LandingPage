import { Link2, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <Link2 size={18} className="text-white" />
              </div>
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
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#beta-signup" className="hover:text-white transition-colors">Join Beta</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white mb-4">Contact</h3>
            <div className="flex gap-4">
              <a href="mailto:hello@linkn.app" className="hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
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