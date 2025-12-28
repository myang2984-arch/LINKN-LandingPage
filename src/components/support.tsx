import { ArrowLeft } from 'lucide-react';

interface SupportProps {
  onBack: () => void;
}

export function Support({ onBack }: SupportProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-blue-50 to-white">
      {/* Simple Header */}
      <div className="border-b border-purple-200/50 bg-white/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors mb-4 sm:mb-5 text-lg"
          >
            <ArrowLeft size={22} />
            <span>Back to Home</span>
          </button>
          <h1 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-3 text-5xl sm:text-6xl">
            Support
          </h1>
          <p className="text-gray-600 text-lg sm:text-xl">Get help with Linkn</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <article className="space-y-12 sm:space-y-16">
          
          {/* How Linkn Saves Content on iOS */}
          <section>
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-5 sm:mb-7 text-3xl sm:text-4xl">
              How Linkn Saves Content on iOS
            </h2>
            <p className="text-gray-800 mb-5 sm:mb-6 text-lg sm:text-xl leading-relaxed">
              Linkn saves links using Apple's system Share Sheet.
            </p>
            <p className="text-gray-800 mb-4 text-lg sm:text-xl leading-relaxed">
              Depending on the app you share from, Linkn may receive:
            </p>
            <ul className="text-gray-800 mb-5 sm:mb-6 space-y-3 ml-6 list-disc text-lg sm:text-xl leading-relaxed">
              <li>The link URL</li>
              <li>A short description or visible text</li>
              <li>Or only the URL itself</li>
            </ul>
            <p className="text-gray-800 mb-3 text-lg sm:text-xl leading-relaxed">
              Some platforms limit what third-party apps can access during sharing.
            </p>
            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
              When text is not available, Linkn will save the link and enrich it later in the background.
            </p>
          </section>

          {/* Saving Links & Content */}
          <section>
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-5 sm:mb-7 text-3xl sm:text-4xl">
              Saving Links & Content
            </h2>
            <p className="text-gray-800 mb-4 text-lg sm:text-xl leading-relaxed">
              When you share a link to Linkn:
            </p>
            <ul className="text-gray-800 mb-5 sm:mb-6 space-y-3 ml-6 list-disc text-lg sm:text-xl leading-relaxed">
              <li>The URL is always saved</li>
              <li>A title or description may be captured if provided by the source app</li>
              <li>Favicon and metadata may load asynchronously after saving</li>
            </ul>
            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
              If content appears incomplete at first, it will often improve automatically after syncing.
            </p>
          </section>

          {/* Supported Apps & Known Limitations */}
          <section>
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-5 sm:mb-7 text-3xl sm:text-4xl">
              Supported Apps & Known Limitations
            </h2>
            
            <h3 className="text-gray-900 mb-4 text-xl sm:text-2xl">Linkn works best with:</h3>
            <ul className="text-gray-800 mb-8 sm:mb-10 space-y-3 ml-6 list-disc text-lg sm:text-xl leading-relaxed">
              <li>Safari</li>
              <li>Chrome</li>
              <li>Firefox</li>
              <li>Most news and reading apps</li>
            </ul>

            <h3 className="text-gray-900 mb-4 text-xl sm:text-2xl">Some platforms restrict shared content, including:</h3>
            <ul className="text-gray-800 mb-5 sm:mb-6 space-y-3 ml-6 list-disc text-lg sm:text-xl leading-relaxed">
              <li>Social networks (e.g. X, Reddit, WeChat)</li>
              <li>Video platforms</li>
              <li>Apps using custom share flows</li>
            </ul>

            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
              In these cases, Linkn may only receive the link URL due to platform limitations.
            </p>
          </section>

          {/* Subscriptions */}
          <section>
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-5 sm:mb-7 text-3xl sm:text-4xl">
              Subscriptions
            </h2>
            <ul className="text-gray-800 space-y-3 ml-6 list-disc text-lg sm:text-xl leading-relaxed">
              <li>Subscriptions are billed through your Apple ID</li>
              <li>Pro access is linked to your Linkn account</li>
              <li>Use <strong className="text-gray-900">Restore Purchase</strong> after reinstalling or switching devices</li>
              <li>Billing, cancellations, and refunds are managed by Apple</li>
            </ul>
          </section>

          {/* Privacy */}
          <section>
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-5 sm:mb-7 text-3xl sm:text-4xl">
              Privacy
            </h2>
            <p className="text-gray-800 mb-3 text-lg sm:text-xl leading-relaxed">
              Linkn does not sell your data.
            </p>
            <p className="text-gray-800 text-lg sm:text-xl leading-relaxed">
              Your saved links and tags belong to you.
            </p>
          </section>

          {/* Contact Support */}
          <section>
            <h2 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-5 sm:mb-7 text-3xl sm:text-4xl">
              Contact Support
            </h2>
            <p className="text-gray-800 mb-4 text-lg sm:text-xl leading-relaxed">
              For help or questions, contact:
            </p>
            <p className="text-gray-800 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
              <a 
                href="mailto:myang2984@gmail.com" 
                className="text-purple-600 hover:text-purple-700 underline decoration-2 underline-offset-2"
              >
                myang2984@gmail.com
              </a>
            </p>
            <p className="text-gray-800 mb-3 text-lg sm:text-xl leading-relaxed">
              Please include:
            </p>
            <ul className="text-gray-800 space-y-3 ml-6 list-disc text-lg sm:text-xl leading-relaxed">
              <li>Your Linkn account email</li>
              <li>A brief description of the issue</li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}