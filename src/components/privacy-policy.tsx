import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export function PrivacyPolicy({ onBack }: PrivacyPolicyProps) {
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
          <h1 className="text-gray-900 mb-2 text-3xl sm:text-4xl">Privacy Policy</h1>
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
              Thank you for using Linkn App. We are committed to protecting your personal privacy and data security. This Privacy Policy details how we collect, use, store, and protect your personal information.
            </p>
            <p className="text-gray-700">
              By using Linkn App, you consent to the data collection and usage practices described in this Privacy Policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4 sm:mb-6">
              We collect the following information through Firebase Authentication services for account management and core synchronization services:
            </p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.1 User Identity Information</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Email Address:</strong> Your email address from Google or Apple Sign-In</li>
              <li><strong>User Identifier:</strong> Unique Firebase User ID (UID)</li>
              <li><strong>Login Timestamps:</strong> Account creation and last login times</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.2 Notion Integration Information</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Notion Authorization Token:</strong> Encrypted token authorized by you to access your Notion database</li>
              <li><strong>Notion Database ID:</strong> Identifier of your chosen Notion database for synchronization</li>
              <li>This token is stored securely in Firebase Firestore and used by Cloud Functions to perform synchronization</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.3 Link Metadata</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>URLs:</strong> Web links you capture or add</li>
              <li><strong>Page Titles and Descriptions:</strong> Metadata automatically extracted from URLs</li>
              <li><strong>Status Tags:</strong> Reading status such as To Read, On Hold, Completed</li>
              <li><strong>Custom Tags:</strong> Classification tags you add</li>
              <li><strong>Timestamps:</strong> Link creation and last modification times</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.4 Device Information</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Device Type:</strong> iOS, Android, or desktop platform information (used only for debugging and optimizing user experience)</li>
              <li><strong>App Version:</strong> Used for compatibility checks</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.5 Usage Data (Optional)</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Crash Reports:</strong> Anonymous technical information when the app crashes (requires user consent)</li>
              <li><strong>Performance Data:</strong> App loading times and response speeds (anonymized)</li>
            </ul>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4 sm:mb-6">
              We use the collected information solely for the following purposes:
            </p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.1 Account Management</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Verify your identity and manage your Linkn App account</li>
              <li>Synchronize your account information across multiple devices</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.2 Provide Core Services</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Enable synchronization of your links to your Notion database</li>
              <li>Implement three-way data synchronization between local device, Firebase Cloud, and Notion</li>
              <li>Store your links, tags, and reading status</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.3 AI Processing (Paid Feature)</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Use your link metadata to call Google Gemini API</li>
              <li>Provide intelligent tag suggestions and content summarization services</li>
              <li>This is an optional paid feature requiring your explicit consent</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.4 Customer Support</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Respond to your inquiries and resolve technical issues</li>
              <li>Diagnose and fix application errors</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.5 Service Improvement</h3>
          </section>

          {/* 3. Information Sharing and Third-Party Services */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">3. Information Sharing and Third-Party Services</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.1 Third-Party Services We Use</h3>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2">Google Firebase</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Purpose:</strong> Identity authentication, cloud data storage, real-time synchronization</li>
                <li><strong>Data:</strong> User UID, email, link metadata, Notion Token (encrypted)</li>
                <li><strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Firebase Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2">Notion API</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Purpose:</strong> Synchronize links to your Notion database</li>
                <li><strong>Data:</strong> Link URLs, titles, descriptions, tags</li>
                <li><strong>Privacy Policy:</strong> <a href="https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Notion Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2">Google Gemini API (Optional Paid Feature)</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Purpose:</strong> AI-powered summaries and tag suggestions</li>
                <li><strong>Data:</strong> Link URLs and metadata (excluding user identity information)</li>
                <li><strong>Privacy Policy:</strong> <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Google AI Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2">Apple Sign In (iOS Users)</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Purpose:</strong> Identity authentication</li>
                <li><strong>Data:</strong> Email address or anonymous email (user's choice)</li>
                <li><strong>Privacy Policy:</strong> <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Apple Privacy Policy</a></li>
              </ul>
            </div>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.2 What We Will NOT Do</h3>
            <ul className="text-gray-700 space-y-2">
              <li>We <strong>will NOT</strong> sell your personal data to third parties</li>
              <li>We <strong>will NOT</strong> use your data for advertising purposes</li>
              <li>We <strong>will NOT</strong> share your information with third parties without your consent (except as required by law)</li>
            </ul>
          </section>

          {/* 4. Information Storage and Security */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">4. Information Storage and Security</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.1 Storage Location</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Cloud Storage:</strong> All user data is stored in Google Firebase Cloud Firestore databases</li>
              <li><strong>Data Centers:</strong> Located in Google Cloud's United States region servers</li>
              <li><strong>Local Storage:</strong> Link metadata is encrypted and stored on devices using SQLite</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.2 Security Measures</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Encrypted Transmission:</strong> All data transmission uses HTTPS/TLS encryption</li>
              <li><strong>Token Encryption:</strong> Notion Tokens are encrypted before storage</li>
              <li><strong>Access Control:</strong> Firestore security rules ensure only you can access your own data</li>
              <li><strong>Authentication:</strong> Multi-factor authentication support based on Firebase Authentication</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.3 Data Retention Period</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Active Accounts:</strong> Data will be retained until you delete your account or data</li>
              <li><strong>Inactive Accounts:</strong> Account data that has not been logged into for more than 2 years will be automatically deleted (with 30 days advance email notification)</li>
            </ul>
          </section>

          {/* 5. Your Rights */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">5. Your Rights</h2>
            <p className="text-gray-700 mb-4 sm:mb-6">
              Under applicable data protection laws (including GDPR and CCPA), you have the following rights:
            </p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.1 Right to Access</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can view and export all your data within the app at any time</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.2 Right to Rectification</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can edit and update your link information and account settings within the app</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.3 Right to Deletion</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>You can delete individual links or your entire account at any time</li>
              <li>After account deletion, all associated data will be permanently deleted from our servers within 30 days</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.4 Right to Data Portability</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can export all your link data in JSON or CSV format</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.5 Right to Object</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can opt out of optional data collection features (such as crash reports, AI features)</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.6 How to Exercise These Rights</h3>
          </section>

          {/* 6. Children's Privacy Protection */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">6. Children's Privacy Protection</h2>
            <p className="text-gray-700 mb-4">
              Linkn App is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and discover that your child has provided us with personal information without your consent, please contact us and we will immediately delete such information.
            </p>
            <p className="text-gray-700">
              <strong>Complies with COPPA (Children's Online Privacy Protection Act) requirements.</strong>
            </p>
          </section>

          {/* 7. Contact Us */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, comments, or complaints about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> <a href="mailto:myang2984@gmail.com" className="text-blue-600 hover:text-blue-700 underline">myang2984@gmail.com</a><br />
              <strong>Response Time:</strong> We will respond to your inquiry within 7 business days
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200 text-sm text-gray-500">
            For data protection-related complaints, you may also contact your local data protection supervisory authority.
          </div>
        </article>
      </div>
    </div>
  );
}