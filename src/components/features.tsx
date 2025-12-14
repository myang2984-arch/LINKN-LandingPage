import { Zap, Database, Tags, Mail, Users, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Unlimited Link Sync',
    description: 'Pro version supports unlimited auto-sync to Notion',
    status: 'available',
  },
  {
    icon: Database,
    title: 'Multi-Database Distribution',
    description: 'Auto-distribute to different Notion databases by rules',
    status: 'coming',
  },
  {
    icon: Tags,
    title: 'Smart Tagging',
    description: 'AI automatically identifies content and adds relevant tags',
    status: 'coming',
  },
  {
    icon: Mail,
    title: 'Daily Digest',
    description: 'Daily summary of your saved links sent to email',
    status: 'coming',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Share link collections with team members',
    status: 'coming',
  },
  {
    icon: Sparkles,
    title: 'More Features',
    description: 'In development, we welcome your feedback',
    status: 'coming',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Powerful Pro Features
          </h2>
          <p className="text-gray-600">
            Making link management smarter and more efficient
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl hover:shadow-lg transition-shadow relative"
            >
              {feature.status === 'coming' && (
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  Coming Soon
                </span>
              )}
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-white" />
              </div>
              <h3 className="text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}