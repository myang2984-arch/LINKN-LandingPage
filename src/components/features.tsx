import { Infinity as InfinityIcon, Sparkles, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const betaFeatures = [
  {
    icon: InfinityIcon,
    title: 'Unlimited links during beta',
    description: 'No limits while we\'re testing',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: Sparkles,
    title: 'Lifetime 50% off Pro',
    description: 'For early beta users only',
    gradient: 'from-yellow-400 to-orange-500',
    isHighlighted: true,
  },
  {
    icon: Lightbulb,
    title: 'Shape the future of Linkn',
    description: 'Your feedback directly impacts what\'s next',
    gradient: 'from-purple-400 to-pink-500',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4 text-4xl sm:text-5xl">
            Why join the beta?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {betaFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className={`bg-white p-8 rounded-xl hover:shadow-2xl transition-all relative group ${
                feature.title === 'Lifetime 50% off Pro' 
                  ? 'border-2 border-gradient-to-r from-rose-400 to-red-500 ring-4 ring-rose-200/50' 
                  : 'border border-gray-100'
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {feature.title === 'Lifetime 50% off Pro' && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-100/30 to-red-100/30 rounded-xl -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              )}
              {feature.title === 'Lifetime 50% off Pro' && (
                <motion.span 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-rose-500 to-red-500 text-white px-4 py-1 rounded-full shadow-lg text-sm z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                >
                  🎉 Special Offer
                </motion.span>
              )}
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-lg flex items-center justify-center mb-6 shadow-lg relative`}
                whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={32} className="text-white relative z-10" />
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-lg`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
              <h3 className="text-gray-900 mb-3 text-2xl">{feature.title}</h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}