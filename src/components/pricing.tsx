import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: 'Free',
    description: 'Try basic features',
    features: [
      { text: '3 links per day', included: true },
      { text: 'Single Notion database', included: true },
      { text: 'Basic link info extraction', included: true },
      { text: 'Unlimited link sync', included: false },
      { text: 'Multi-database distribution', included: false },
      { text: 'Smart tags', included: false },
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: 'Coming Soon',
    description: 'Unlock all features',
    features: [
      { text: 'Unlimited link sync', included: true },
      { text: 'Multiple Notion databases', included: true },
      { text: 'Advanced info extraction', included: true },
      { text: 'Auto multi-database distribution', included: true, badge: 'Coming Soon' },
      { text: 'Smart tagging', included: true, badge: 'Coming Soon' },
      { text: 'Daily digest', included: true, badge: 'Coming Soon' },
      { text: 'Team collaboration', included: true, badge: 'Coming Soon' },
    ],
    cta: 'Join Beta',
    highlighted: true,
  },
];

export function Pricing() {
  const scrollToSignup = () => {
    const element = document.getElementById('beta-signup');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600">
            Start with Free, upgrade to Pro anytime
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
              }`}
            >
              <div className="mb-6">
                <h3 className={plan.highlighted ? 'text-white' : 'text-gray-900'}>
                  {plan.name}
                </h3>
                <div className="mt-2 mb-1">
                  <span className={`text-3xl ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                </div>
                <p className={plan.highlighted ? 'text-purple-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {feature.included ? (
                      <Check
                        size={20}
                        className={`flex-shrink-0 mt-0.5 ${
                          plan.highlighted ? 'text-purple-200' : 'text-green-600'
                        }`}
                      />
                    ) : (
                      <X
                        size={20}
                        className="flex-shrink-0 mt-0.5 text-gray-400"
                      />
                    )}
                    <span className={`flex-1 ${plan.highlighted ? 'text-purple-50' : 'text-gray-700'}`}>
                      {feature.text}
                      {feature.badge && (
                        <span className="ml-2 bg-blue-100 text-blue-600 px-2 py-0.5 rounded text-xs">
                          {feature.badge}
                        </span>
                      )}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={plan.highlighted ? scrollToSignup : undefined}
                className={`w-full py-3 rounded-lg transition-all ${
                  plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-gray-100'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}