import { ArrowLeft } from 'lucide-react';

interface TermsOfUseProps {
  onBack: () => void;
}

export function TermsOfUse({ onBack }: TermsOfUseProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple Header */}
      <div className="border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-3 sm:mb-4"
          >
            <ArrowLeft size={18} />
            <span className="text-sm">Back</span>
          </button>
          <h1 className="text-gray-900 mb-2 text-3xl sm:text-4xl">Terms of Use</h1>
          <p className="text-gray-600 text-sm sm:text-base">Last updated: November 12, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <article className="prose prose-gray max-w-none">
          {/* Meta Info */}
          <div className="text-sm text-gray-600 mb-8 sm:mb-12 space-y-1">
            <p><strong>Application Name:</strong> Linkn App</p>
            <p><strong>Developer:</strong> Miya.Yang</p>
            <p><strong>Effective Date:</strong> November 11, 2025</p>
          </div>

          {/* Introduction */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Linkn App! These Terms of Use (the "Terms") constitute a legally binding agreement between you and the developer of Linkn App.
            </p>
            <p className="text-gray-700">
              Please read these Terms carefully before using Linkn App. By downloading, installing, accessing, or using the Service, you agree to be bound by all provisions of these Terms.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">1. Acceptance of Terms</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.1 Agreement Consent</h3>
            <p className="text-gray-700 mb-3">By downloading, installing, or using Linkn App (the "Service"), you represent that:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>You have read and understood these Terms of Use</li>
              <li>You agree to comply with all provisions of these Terms of Use</li>
              <li>You confirm that you are at least 13 years old (or the minimum age requirement in your jurisdiction)</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.2 Right to Modify</h3>
            <p className="text-gray-700 mb-3">We reserve the right to modify these Terms at any time. Material changes will be communicated through:</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>In-app notifications</li>
              <li>Email notifications</li>
              <li>Updates to the "Last Updated" date on this page</li>
            </ul>
            <p className="text-gray-700">Continued use of the Service constitutes acceptance of the modified Terms.</p>
          </section>

          {/* 2. Service Description */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">2. Service Description</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.1 Features</h3>
            <p className="text-gray-700 mb-3">Linkn App is a productivity tool designed to help users:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Link Capture:</strong> Quickly capture internet links (automatic clipboard monitoring on desktop, manual addition on mobile)</li>
              <li><strong>Metadata Extraction:</strong> Automatically retrieve page titles, descriptions, and icons</li>
              <li><strong>Local Storage:</strong> Store link data on devices using SQLite</li>
              <li><strong>Cloud Sync:</strong> Multi-device data synchronization via Firebase Firestore</li>
              <li><strong>Notion Integration:</strong> Synchronize links to your Notion database as a reading list</li>
              <li><strong>AI Features (Optional Paid):</strong> Use Google Gemini API to provide intelligent tags and summaries</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.2 Third-Party Dependencies</h3>
            <p className="text-gray-700 mb-3">This Service relies on the following third-party services for normal operation:</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li><strong>Notion API:</strong> For link synchronization functionality</li>
              <li><strong>Google Firebase:</strong> For authentication and cloud storage</li>
              <li><strong>Google Gemini API:</strong> For AI features (optional)</li>
            </ul>
            <p className="text-gray-700">We are not responsible for the availability, performance, or interruptions of third-party services.</p>
          </section>

          {/* 3. User Responsibilities */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">3. User Responsibilities</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.1 Lawful Use</h3>
            <p className="text-gray-700 mb-3">You agree to:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Use the Service only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not use the Service for any illegal, fraudulent, or harmful activities</li>
              <li>Not attempt to damage, interfere with, or gain unauthorized access to the Service or other users' data</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.2 Account Security</h3>
            <p className="text-gray-700 mb-3">You are responsible for:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Protecting the security of your account credentials (Google/Apple login information)</li>
              <li>Maintaining the confidentiality of your Notion authorization token (Integration Token) and database ID</li>
              <li>Immediately notifying us of any unauthorized account use or security breaches</li>
              <li>All activities conducted under your account</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.3 Data Accuracy</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>We are not responsible for the integrity, accuracy, or reliability of data synchronized to your Notion database</li>
              <li>You are responsible for backing up important data</li>
              <li>We do not guarantee the accuracy or availability of link metadata (titles, descriptions, etc.)</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.4 Prohibited Conduct</h3>
            <p className="text-gray-700 mb-3">You may not:</p>
            <ul className="text-gray-700 space-y-2">
              <li>Upload or distribute viruses, malware, or other harmful code</li>
              <li>Modify or crack the Service through reverse engineering, decompilation, or disassembly</li>
              <li>Abuse the Service using automated tools (bots, crawlers)</li>
              <li>Infringe upon others' intellectual property or privacy rights</li>
              <li>Impersonate others or falsely represent your relationship with any person or entity</li>
            </ul>
          </section>

          {/* 4. Subscription and Payment */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">4. Subscription and Payment</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.1 Free Features</h3>
            <p className="text-gray-700 mb-3">The following core features are permanently free:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Link capture and local storage</li>
              <li>Cloud multi-device synchronization</li>
              <li>Basic Notion synchronization functionality</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.2 Paid Features (Planned)</h3>
            <p className="text-gray-700 mb-3">The following premium features require a paid subscription:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>AI Smart Summaries:</strong> Generate link summaries using Google Gemini API</li>
              <li><strong>AI Tag Suggestions:</strong> Automatic categorization and tag recommendations</li>
              <li><strong>Advanced Statistics:</strong> Detailed reading statistics and data analysis</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.3 Payment Terms</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Subscription fees will be charged through Apple App Store or Google Play Store</li>
              <li>Subscriptions will automatically renew unless canceled at least 24 hours before the end of the current subscription period</li>
              <li>Subscription management and cancellation are handled through your App Store/Play Store account settings</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.4 Refund Policy</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>7-Day Money-Back Guarantee:</strong> First-time subscribers may request a full refund within 7 days</li>
              <li><strong>Refund Process:</strong> Submit a refund request through App Store/Play Store, or contact our customer service email</li>
              <li><strong>Prorated Refunds:</strong> For annual subscriptions, you may receive a prorated refund based on remaining time upon cancellation (contact customer service)</li>
              <li>Paid features will be immediately disabled upon refund</li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">5. Intellectual Property</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.1 App Ownership</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>All content, functionality, design, code, and intellectual property in the Service are owned by Miya.Yang</li>
              <li>The "Linkn App" name and logo are our trademarks and may not be used without authorization</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.2 User Content Ownership</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>You retain ownership of all links, tags, and data you add to Linkn App</li>
              <li>By using the Service, you grant us a limited license to store, process, and display your content to provide the Service</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.3 License Restrictions</h3>
            <ul className="text-gray-700 space-y-2">
              <li>You may not copy, modify, distribute, sell, or lease any part of the Service</li>
              <li>You may not reverse engineer the Service or extract its source code</li>
            </ul>
          </section>

          {/* 6. Disclaimers */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">6. Disclaimers</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.1 Service Provided "AS IS"</h3>
            <p className="text-gray-700 mb-3">The Service is provided on an "as is" and "as available" basis, without any express or implied warranties, including but not limited to:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Uninterrupted or error-free service</li>
              <li>Security, accuracy, or reliability of the Service</li>
              <li>Service meeting your specific requirements</li>
              <li>Any defects or errors will be corrected</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.2 Limitation of Liability</h3>
            <p className="text-gray-700 mb-3">To the maximum extent permitted by applicable law, Miya.Yang and Linkn App shall not be liable for:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Any direct, indirect, incidental, special, or consequential damages arising from use or inability to use the Service</li>
              <li>Data loss, lost profits, or business interruption</li>
              <li>Interruptions or failures of third-party services (Notion, Firebase, Gemini)</li>
              <li>Unauthorized access to or modification of your data</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.3 Maximum Liability Cap</h3>
            <p className="text-gray-700">Our total liability to you shall not exceed the amount you paid for the Service in the past 12 months (if applicable), or $100 USD, whichever is greater.</p>
          </section>

          {/* 7. Account Termination */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">7. Account Termination</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">7.1 User-Initiated Termination</h3>
            <p className="text-gray-700 mb-3">You may terminate your account at any time by:</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>Deleting your account within the app</li>
              <li>Contacting our customer service email: <a href="mailto:myang2984@gmail.com" className="text-blue-600 hover:text-blue-700 underline">myang2984@gmail.com</a></li>
            </ul>
            <p className="text-gray-700 mb-3">After account deletion:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>All your data will be permanently deleted from our servers within 30 days</li>
              <li>Any active subscriptions will be canceled (processed according to refund policy)</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">7.2 Our Right to Terminate</h3>
            <p className="text-gray-700 mb-3">We reserve the right to suspend or terminate your access to the Service at any time without advance notice, especially when you:</p>
            <ul className="text-gray-700 space-y-2">
              <li>Violate any provisions of these Terms</li>
              <li>Engage in fraudulent, illegal, or harmful activities</li>
              <li>Abuse or interfere with the normal operation of the Service</li>
              <li>Remain inactive for an extended period (over 2 years)</li>
            </ul>
          </section>

          {/* 8. Privacy and Data Protection */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">8. Privacy and Data Protection</h2>
            <p className="text-gray-700">
              The Service's data collection and use are governed by our Privacy Policy. By using the Service, you consent to our Privacy Policy.
            </p>
          </section>

          {/* 9. Contact Information */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">9. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, comments, or complaints about these Terms of Use, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:myang2984@gmail.com" className="text-blue-600 hover:text-blue-700 underline">myang2984@gmail.com</a><br />
              <strong>Response Time:</strong> We will respond to your inquiry within 7 business days
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              <strong>Thank you for using Linkn App!</strong>
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: November 12, 2025
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}