import { Share2, Link2, Database } from 'lucide-react';

const steps = [
  {
    icon: Share2,
    title: '1. Share Link',
    description: 'Tap share in any app and select linkn',
  },
  {
    icon: Link2,
    title: '2. One-Tap Save',
    description: 'linkn automatically extracts link info and metadata',
  },
  {
    icon: Database,
    title: '3. Sync to Notion',
    description: 'Auto-syncs to your Notion database, access anytime',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Three Steps to Save Links
          </h2>
          <p className="text-gray-600">
            Simple, fast, and automated workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <step.icon size={28} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}