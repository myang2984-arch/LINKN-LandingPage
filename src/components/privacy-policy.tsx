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
              Thank you for using Linkn. We are committed to protecting your personal privacy and data security. This Privacy Policy details how we collect, use, store, and protect your personal information.
            </p>
            <p className="text-gray-700">
              By using Linkn, you consent to the data collection and usage practices described in this Privacy Policy.
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
              <li><strong>Notion Authorization Token:</strong> Token authorized by you to access your Notion database</li>
              <li><strong>Notion Database ID:</strong> Identifier of your chosen Notion database for synchronization</li>
              <li>This token is stored in Firebase Firestore and used by Cloud Functions to perform synchronization</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.3 Link Metadata</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>URLs:</strong> Web links you capture or add</li>
              <li><strong>Page Titles and Descriptions:</strong> Metadata automatically extracted from URLs</li>
              <li><strong>Status Tags:</strong> Reading status such as To Read, On Hold, Completed</li>
              <li><strong>Custom Tags:</strong> Classification tags you add</li>
              <li><strong>Timestamps:</strong> Link creation and last modification times</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.4 Automatically Collected Technical Information</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Firebase Analytics Auto-Collection:</strong> Google Firebase SDK may automatically collect basic technical information (such as device type, operating system version, app version) for service analytics and optimization</li>
              <li><strong>Purchase Records:</strong> When you make in-app purchases, we record the platform type (iOS/Android) for order management</li>
              <li><strong>Data Processing:</strong> This information is automatically processed by Firebase; we do not actively access, store, or use it for other purposes</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.5 Clipboard Content (with consent)</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Clipboard Text or URLs:</strong> When you opt in, the iOS/macOS app briefly reads the current clipboard after you reopen Linkn to detect whether you recently copied a link.</li>
              <li><strong>Share Extension Payloads:</strong> When you save from another app via the Share Extension, the extension writes the link payload to a private UIPasteboard entry so the main app can pick it up.</li>
              <li><strong>Storage:</strong> Clipboard text stays in memory only long enough to detect a URL and is not uploaded or persisted unless you confirm the save.</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">1.6 Email Subscription Information (Optional)</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Email Address:</strong> When you opt-in to subscribe, we collect your email address</li>
              <li><strong>Purpose:</strong> Used solely to send you discount codes and subscription-related notifications</li>
              <li><strong>Voluntary:</strong> Subscription is completely voluntary and you can unsubscribe at any time</li>
              <li><strong>Unsubscribe:</strong> Each email includes an unsubscribe link for instant opt-out</li>
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
              <li>Verify your identity and manage your Linkn account</li>
              <li>Synchronize your account information across multiple devices</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.2 Provide Core Services</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Enable synchronization of your links to your Notion database</li>
              <li>Implement three-way data synchronization between local device, Firebase Cloud, and Notion</li>
              <li>Store your links, tags, and reading status</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.3 Clipboard Quick-Add</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>After you grant in-app consent, Linkn checks your clipboard on resume to see whether you just copied a URL</li>
              <li>The permission dialog appears right after your first successful login, and you can decline without impacting other features</li>
              <li>If a link is detected, we prompt you to save it; nothing is stored if you decline</li>
              <li>You can revoke clipboard access anytime via <strong>Settings → Privacy & Clipboard</strong></li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.4 Discount Codes and Notifications (Optional)</h3>
            <p className="text-gray-700 mb-3">After you explicitly consent to subscribe, we will send you emails containing:</p>
            <ul className="text-gray-700 mb-2 space-y-2 ml-4">
              <li>Discount codes and special offers</li>
              <li>Subscription-related important notifications</li>
            </ul>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Every email includes a one-click unsubscribe link that takes effect immediately</li>
              <li>We will not use your email address for any other purposes or share it with third parties</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.5 Customer Support</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>Respond to your inquiries and resolve technical issues</li>
              <li>Diagnose and fix application errors</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">2.6 Service Improvement</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Analyze app usage patterns to improve user experience (using only anonymized aggregate data)</li>
              <li>Develop new features and optimize existing functionality</li>
            </ul>
          </section>

          {/* 3. Information Sharing and Third-Party Services */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">3. Information Sharing and Third-Party Services</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">3.1 Third-Party Services We Use</h3>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2 font-semibold">Google Firebase</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Purpose:</strong> Identity authentication, cloud data storage, real-time synchronization</li>
                <li><strong>Data:</strong> User UID, email, link metadata, Notion Token</li>
                <li><strong>Privacy Policy:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Firebase Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2 font-semibold">Notion API</h4>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li><strong>Purpose:</strong> Synchronize links to your Notion database</li>
                <li><strong>Data:</strong> Link URLs, titles, descriptions, tags</li>
                <li><strong>Privacy Policy:</strong> <a href="https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Notion Privacy Policy</a></li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-gray-900 mb-2 font-semibold">Apple Sign In (iOS Users)</h4>
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
              <li><strong>Local Storage:</strong> Link metadata is stored on devices using SQLite</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.2 Security Measures</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Encrypted Transmission:</strong> All data transmission uses HTTPS/TLS encryption</li>
              <li><strong>Access Control:</strong> Firestore security rules ensure only you can access your own data</li>
              <li><strong>Authentication:</strong> User accounts are secured using Firebase Authentication (email/password + Google/Apple sign-in)</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">4.3 Data Retention Period</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Active Accounts:</strong> Data will be retained until you delete your account or data</li>
              <li><strong>Linked Notion Content:</strong> Items already synced to your own Notion workspace stay there under your control; deleting your Linkn account does not remove Notion data automatically</li>
            </ul>
          </section>

          {/* 5. Your Rights */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">5. Your Rights</h2>
            <p className="text-gray-700 mb-4 sm:mb-6">
              Under applicable data protection laws (including GDPR and CCPA), you have the following rights:
            </p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.1 Right to Access</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can view all your data within the app at any time</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.2 Right to Rectification</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can edit and update your link information and account settings within the app</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.3 Right to Deletion</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>You can delete individual links or your entire account at any time</li>
              <li>Once you confirm account deletion, your cloud data is erased immediately and cannot be recovered</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.4 Right to Data Portability</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You may request an export of your link data by contacting us at <strong>myang2984@gmail.com</strong></p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.5 Right to Object</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">You can opt out of optional processing activities, including clipboard quick-add and any future analytics</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.6 Clipboard Consent Control</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>You can opt in or out of clipboard quick-add at any time inside the app's Settings page</li>
              <li>Disabling clipboard access stops Linkn from reading your clipboard until you re-enable it</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">5.7 How to Exercise These Rights</h3>
            <p className="text-gray-700">Please contact us via email: <strong>myang2984@gmail.com</strong></p>
          </section>

          {/* 6. Data Retention and Deletion */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">6. Data Retention and Deletion</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.1 Account Deletion Process</h3>
            <p className="text-gray-700 mb-3">If you choose to delete your Linkn account:</p>
            <ol className="text-gray-700 mb-4 sm:mb-6 space-y-2 list-decimal list-inside">
              <li><strong>Immediate Deletion:</strong> Firebase Authentication records, Firestore documents, and local SQLite caches are erased right away after you confirm deletion.</li>
              <li><strong>Irreversible:</strong> The data removal cannot be undone. If you reopen Linkn, you will need to create a new account.</li>
            </ol>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.2 Scope of Deletion</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Included:</strong> Email address, Notion Token, all link metadata stored in Linkn, tags, reading status</li>
              <li><strong>Not Included:</strong> Items that have already been synchronized to your personal Notion workspace. You remain in control of those entries and must delete them in Notion if needed.</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">6.3 Data Backup</h3>
            <ul className="text-gray-700 space-y-2">
              <li>We recommend backing up any needed data before deleting your account</li>
              <li>Data cannot be recovered after deletion</li>
            </ul>
          </section>

          {/* 7. Children's Privacy Protection */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">7. Children's Privacy Protection</h2>
            <p className="text-gray-700 mb-4">
              Linkn is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and discover that your child has provided us with personal information without your consent, please contact us and we will immediately delete such information.
            </p>
            <p className="text-gray-700">
              <strong>Complies with COPPA (Children's Online Privacy Protection Act) requirements.</strong>
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">8. International Data Transfers</h2>
            <p className="text-gray-700 mb-4">
              Linkn uses Firebase servers located in the United States. If you are located in the European Economic Area (EEA), United Kingdom, or other regions, your data may be transferred to locations outside your jurisdiction.
            </p>
            <p className="text-gray-700">
              We ensure such transfers comply with applicable data protection laws and employ appropriate safeguards (such as Standard Contractual Clauses).
            </p>
          </section>

          {/* 9. Cookies and Tracking Technologies */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">9. Cookies and Tracking Technologies</h2>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">9.1 Technologies We Use</h3>
            <p className="text-gray-700 mb-4 sm:mb-6">Uses SharedPreferences and SQLite to store user preference settings and link data</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">9.2 Technologies We Do NOT Use</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Advertising Tracking:</strong> Does not use advertising IDs or cross-app tracking</li>
              <li><strong>Third-Party Cookies:</strong> Does not use third-party advertising or analytics cookies</li>
            </ul>
          </section>

          {/* 10. Changes to Privacy Policy */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">10. Changes to Privacy Policy</h2>
            <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time. When changes occur:</p>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Notification Methods</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>In-app notification popup</li>
              <li>Notification sent to registered email</li>
              <li>Update of "Last Updated" date on this page</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Material Changes</h3>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li>For material changes, we will notify you 30 days in advance</li>
              <li>You may choose to accept the new policy or delete your account</li>
            </ul>

            <h3 className="text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">Effective Date</h3>
            <ul className="text-gray-700 space-y-2">
              <li>Changes will take effect 30 days after publication</li>
              <li>Continued use of the service indicates acceptance of the new policy</li>
            </ul>
          </section>

          {/* 11. California Residents Special Notice (CCPA) */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">11. California Residents Special Notice (CCPA)</h2>
            <p className="text-gray-700 mb-4">
              If you are a California resident, under the California Consumer Privacy Act (CCPA), you have the following additional rights:
            </p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Right to Know:</strong> Learn about the categories and specific personal information we collect</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of the sale of your personal information (we do not sell user data)</li>
              <li><strong>Right to Non-Discrimination:</strong> Exercise privacy rights without discriminatory treatment</li>
            </ul>
            <p className="text-gray-700">To exercise these rights, please contact: <strong>myang2984@gmail.com</strong></p>
          </section>

          {/* 12. EU Residents Special Notice (GDPR) */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">12. EU Residents Special Notice (GDPR)</h2>
            <p className="text-gray-700 mb-4">
              If you are an EU resident, under the General Data Protection Regulation (GDPR), our legal basis for processing your data is:
            </p>
            <ul className="text-gray-700 mb-4 sm:mb-6 space-y-2">
              <li><strong>Contract Performance:</strong> To provide you with Linkn services</li>
              <li><strong>Legitimate Interests:</strong> To improve services and prevent fraud</li>
              <li><strong>Consent:</strong> Optional features (such as clipboard quick-add) require your explicit consent</li>
            </ul>
            <p className="text-gray-700">
              You may withdraw consent (for example, clipboard quick-add) at any time without affecting core contract-based services.
            </p>
          </section>

          {/* 13. Data Breach Notification */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">13. Data Breach Notification</h2>
            <p className="text-gray-700 mb-4">
              In the event of a data breach that may affect the security of your personal information, we will:
            </p>
            <ol className="text-gray-700 mb-4 sm:mb-6 space-y-2 list-decimal list-inside">
              <li>Notify you via email within <strong>72 hours</strong> of discovering the breach</li>
              <li>Explain the type and scope of data breached</li>
              <li>Inform you of remedial measures we have taken</li>
              <li>Provide recommendations for protective measures you can take</li>
            </ol>
          </section>

          {/* 14. Contact Us */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">14. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions, comments, or complaints about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Email:</strong> <a href="mailto:myang2984@gmail.com" className="text-blue-600 hover:text-blue-700 underline">myang2984@gmail.com</a><br />
              <strong>Response Time:</strong> We will respond to your inquiry within 7 business days
            </p>
            <p className="text-gray-700 text-sm">
              For data protection-related complaints, you may also contact your local data protection supervisory authority.
            </p>
          </section>

          {/* 15. Governing Law */}
          <section className="mb-8 sm:mb-12">
            <h2 className="text-gray-900 mb-3 sm:mb-4 text-xl sm:text-2xl">15. Governing Law</h2>
            <p className="text-gray-700 mb-3">This Privacy Policy is governed by and construed in accordance with:</p>
            <ul className="text-gray-700 mb-4 space-y-2">
              <li>Personal Information Protection Law of the People's Republic of China</li>
              <li>European Union General Data Protection Regulation (GDPR)</li>
              <li>California Consumer Privacy Act (CCPA)</li>
              <li>Children's Online Privacy Protection Act (COPPA)</li>
            </ul>
            <p className="text-gray-700">
              In case of conflicting laws, the law providing stricter user privacy protection shall prevail.
            </p>
          </section>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">
              <strong>The latest version of this Privacy Policy will always be published here.</strong>
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
