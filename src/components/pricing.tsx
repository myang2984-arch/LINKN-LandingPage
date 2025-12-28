import { Sparkles, Database, LayoutGrid } from 'lucide-react';
import { motion } from 'framer-motion';

const comingFeatures = [
  {
    icon: Sparkles,
    title: 'Smarter tagging',
    description: 'Links automatically organized the way you think',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    icon: Database,
    title: 'Multiple destinations',
    description: 'Save links into different Notion databases effortlessly',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    icon: LayoutGrid,
    title: 'Zero-maintenance organization',
    description: 'Everything stays tidy without manual effort',
    gradient: 'from-green-400 to-emerald-500',
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-300/20 to-blue-300/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: ['-50%', '-40%', '-50%'],
          y: ['-50%', '-60%', '-50%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-gray-900 mb-4 text-4xl sm:text-5xl">
            What's coming next
          </h2>
          <p className="text-gray-600 text-xl">
            We're building Linkn together with our early users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {comingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl hover:shadow-2xl transition-all relative group border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
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