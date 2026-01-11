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
          <p className="text-gray-600 text-sm sm:text-base">Last updated: December 28, 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <article className="prose prose-gray max-w-none">
          {/* Meta Info */}
          <div className="text-sm text-gray-600 mb-8 sm:mb-12 space-y-1">
            <p><strong>Application Name:</strong> Linkn</p>
            <p><strong>Developer:</strong> Miya.Yang</p>
            <p><strong>Effective Date:</strong> December 28, 2025</p>
          </div>

          {/* Introduction */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">Introduction</h2>
            <p className="text-gray-700 mb-4">
              Welcome to Linkn! These Terms of Use (the "Terms") constitute a legally binding agreement between you and the developer of Linkn.
            </p>
            <p className="text-gray-700">
              Please read these Terms carefully before using Linkn. By downloading, installing, accessing, or using the Service, you agree to be bound by all provisions of these Terms.
            </p>
          </section>

          {/* 1. Acceptance of Terms */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">1. Acceptance of Terms</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.1 Agreement Consent</h3>
            <p className="text-gray-700 mb-3">By downloading, installing, or using Linkn (the "Service"), you represent that:</p>
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
            <p className="text-gray-700 mb-3">Linkn is a productivity tool designed to help users:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Link Capture:</strong> Save links from desktop clipboard monitoring, the iOS Share Extension, or manual entry</li>
              <li><strong>Clipboard Quick-Add:</strong> (with consent) Detect recently copied URLs when you return to the app and offer one-tap save</li>
              <li><strong>Metadata Extraction:</strong> Automatically retrieve page titles, descriptions, icons, and domains</li>
              <li><strong>Local Storage:</strong> Store link data on devices using SQLite for offline access</li>
              <li><strong>Cloud Sync:</strong> Multi-device data synchronization via Firebase Firestore</li>
              <li><strong>Notion Integration:</strong> Push saved links to your Notion database as a reading list</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.2 Third-Party Dependencies</h3>
            <p className="text-gray-700 mb-3">This Service relies on the following third-party services for normal operation:</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li><strong>Notion API:</strong> For link synchronization functionality</li>
              <li><strong>Google Firebase:</strong> For authentication and cloud storage</li>
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
              <li>Protecting the security of your account credentials (Google/Apple login information or email/password)</li>
              <li>Maintaining the confidentiality of your Notion authorization token (Integration Token) and database ID</li>
              <li>Managing clipboard access permissions within the app (grant or revoke as needed)</li>
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

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.2 Paid Features</h3>
            <p className="text-gray-700 mb-3">The following premium features require a paid subscription:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Unlimited Link Saves:</strong> Remove the daily limit of 3 new links</li>
              <li><strong>Share From Any App:</strong> Unlock the iOS Share Extension and clipboard automation</li>
              <li><strong>Priority Metadata Enrichment:</strong> Faster title/icon fetching plus smart tagging</li>
              <li><strong>Live Notion Sync:</strong> Real-time status mirroring between Linkn and Notion</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.3 Payment Terms</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Subscription fees will be charged through Apple App Store or Google Play Store</li>
              <li>Subscriptions will automatically renew unless canceled at least 24 hours before the end of the current subscription period</li>
              <li>Subscription management and cancellation are handled through your App Store/Play Store account settings</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.4 Refund Policy</h3>
            <ul className="text-gray-700 space-y-2">
              <li>All payments and refunds are governed by the App Store/Play Store terms</li>
              <li>If you believe a charge is incorrect, request a refund from the respective store or contact us and we will guide you through their process</li>
              <li>When the store issues a refund, premium access ends immediately</li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">5. Intellectual Property</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.1 App Ownership</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>All content, functionality, design, code, and intellectual property in the Service are owned by Miya.Yang</li>
              <li>The "Linkn" name and logo are our trademarks and may not be used without authorization</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.2 User Content Ownership</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>You retain ownership of all links, tags, and data you add to Linkn</li>
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
            <p className="text-gray-700 mb-3">To the maximum extent permitted by applicable law, Miya.Yang and Linkn shall not be liable for:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Any direct, indirect, incidental, special, or consequential damages arising from use or inability to use the Service</li>
              <li>Data loss, lost profits, or business interruption</li>
              <li>Interruptions or failures of third-party services (such as Notion or Firebase)</li>
              <li>Unauthorized access to or modification of your data</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.3 Maximum Liability Cap</h3>
            <p className="text-gray-700">Our total liability to you shall not exceed the amount you paid for the Service in the past 12 months (if applicable), or $100 USD, whichever is greater.</p>
          </section>

          {/* 7. Service Availability */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">7. Service Availability</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">7.1 Service Interruptions</h3>
            <p className="text-gray-700 mb-3">We reserve the right, without advance notice, to:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Temporarily or permanently modify, suspend, or terminate the Service (or any part thereof)</li>
              <li>Conduct regular maintenance and upgrades</li>
              <li>Suspend the Service for technical issues or security reasons</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">7.2 Scheduled Maintenance</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>We will make reasonable efforts to provide advance notice of scheduled maintenance</li>
              <li>The Service may be temporarily unavailable during maintenance periods</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">7.3 Force Majeure</h3>
            <p className="text-gray-700">We are not liable for service interruptions caused by force majeure events (such as natural disasters, war, terrorism, government actions, cyberattacks, etc.).</p>
          </section>

          {/* 8. Account Termination */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">8. Account Termination</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">8.1 User-Initiated Termination</h3>
            <p className="text-gray-700 mb-3">You may terminate your account at any time by:</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>Deleting your account within the app</li>
              <li>Contacting our customer service email: <a href="mailto:myang2984@gmail.com" className="text-blue-600 hover:text-blue-700 underline">myang2984@gmail.com</a></li>
            </ul>
            <p className="text-gray-700 mb-3">After account deletion:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>All of your Linkn data is deleted from our servers immediately and cannot be recovered</li>
              <li>Any active subscriptions will be canceled (processed according to refund policy)</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">8.2 Our Right to Terminate</h3>
            <p className="text-gray-700 mb-3">We reserve the right to suspend or terminate your access to the Service at any time without advance notice, especially when you:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Violate any provisions of these Terms</li>
              <li>Engage in fraudulent, illegal, or harmful activities</li>
              <li>Abuse or interfere with the normal operation of the Service</li>
              <li>Remain inactive for an extended period (over 2 years)</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">8.3 Consequences of Termination</h3>
            <p className="text-gray-700 mb-3">After account termination:</p>
            <ul className="text-gray-700 space-y-2">
              <li>You will be unable to access the Service and your data</li>
              <li>Paid subscription fees may not be refunded (unless refund policy applies)</li>
              <li>Data already synchronized to Notion will not be deleted (you must manage this yourself)</li>
            </ul>
          </section>

          {/* 9. Dispute Resolution */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">9. Dispute Resolution</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">9.1 Governing Law</h3>
            <p className="text-gray-700 mb-4">These Terms are governed by:</p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Relevant laws and regulations of the People's Republic of China</li>
              <li>For international users, consumer protection laws applicable in your region</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">9.2 Dispute Resolution Process</h3>
            <p className="text-gray-700 mb-3">If a dispute arises, we recommend following these steps:</p>
            <ol className="text-gray-700 mb-4 sm:mb-6 space-y-2 list-decimal list-inside">
              <li><strong>Negotiation:</strong> First attempt friendly negotiation by contacting us via email at myang2984@gmail.com</li>
              <li><strong>Mediation:</strong> If negotiation fails, seek third-party mediation</li>
              <li><strong>Arbitration/Litigation:</strong> As a last resort, choose arbitration or litigation according to applicable law</li>
            </ol>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">9.3 Jurisdiction</h3>
            <p className="text-gray-700">For disputes that cannot be resolved through negotiation, both parties agree to submit to the jurisdiction of courts where the developer is located.</p>
          </section>

          {/* 10. Privacy and Data Protection */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">10. Privacy and Data Protection</h2>
            <p className="text-gray-700 mb-4">
              The Service's data collection and use are governed by our Privacy Policy. By using the Service, you consent to our Privacy Policy.
            </p>
            <p className="text-gray-700">
              Please read the complete Privacy Policy: <button onClick={onBack} className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</button>
            </p>
          </section>

          {/* 11. Third-Party Links and Content */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">11. Third-Party Links and Content</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">11.1 External Links</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">
              The Service may contain links to third-party websites or services. We are not responsible for the content, privacy policies, or practices of these external websites or services.
            </p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">11.2 User Responsibility</h3>
            <p className="text-gray-700">
              You access third-party links at your own risk. We recommend reviewing the terms and privacy policies of these third parties.
            </p>
          </section>

          {/* 12. Export Compliance */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">12. Export Compliance</h2>
            <p className="text-gray-700">
              You may not use or export the Service in violation of any applicable export laws or regulations. You represent and warrant that you are not located in a country/region subject to embargo by the United States or other governments.
            </p>
          </section>

          {/* 13. Severability */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">13. Severability</h2>
            <p className="text-gray-700">
              If any part of these Terms is deemed invalid or unenforceable, that part will be enforced to the maximum extent permitted by applicable law, and the remaining parts will continue in full force and effect.
            </p>
          </section>

          {/* 14. Entire Agreement */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">14. Entire Agreement</h2>
            <p className="text-gray-700">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Linkn regarding use of the Service, and supersede all prior or contemporaneous oral or written agreements.
            </p>
          </section>

          {/* 15. Contact Information */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">15. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, comments, or complaints about these Terms of Use, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:myang2984@gmail.com" className="text-blue-600 hover:text-blue-700 underline">myang2984@gmail.com</a><br />
              <strong>Response Time:</strong> We will respond to your inquiry within 7 business days
            </p>
          </section>

          {/* 16. Language */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">16. Language</h2>
            <p className="text-gray-700">
              These Terms are provided in Chinese and English. In case of inconsistency, the English version shall prevail.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              <strong>The latest version of these Terms of Use will always be published here.</strong>
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Thank you for using Linkn!</strong>
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: December 28, 2025
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}
