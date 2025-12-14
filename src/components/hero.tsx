import { ArrowRight, Apple } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSignup = () => {
    const element = document.getElementById('beta-signup');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full">
              <Apple size={16} />
              <span>iOS Beta</span>
            </div>
            
            <h1 className="text-gray-900 max-w-xl">
              Save links from anywhere, sync to Notion automatically
            </h1>
            
            <p className="text-gray-600 max-w-lg">
              linkn lets you save links from any app with one tap, automatically syncing them to your Notion database.
              No manual organizing needed, making knowledge management effortless.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={scrollToSignup}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Apply for Beta Access
                <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-gray-900">iOS</div>
                <div className="text-gray-600">Only</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-gray-900">Notion</div>
                <div className="text-gray-600">Integration</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div>
                <div className="text-gray-900">Auto</div>
                <div className="text-gray-600">Sync</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl blur-3xl opacity-20"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop"
              alt="iPhone with linkn app"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}