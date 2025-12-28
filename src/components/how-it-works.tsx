import { Share2, Zap, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: Share2,
    title: 'Share',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Zap,
    title: 'Save',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Database,
    title: 'Sync',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4 sm:gap-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div 
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <step.icon size={32} className="text-white" />
                </motion.div>
                <p className="text-gray-900 mt-3 text-lg sm:text-xl">{step.title}</p>
              </motion.div>
              
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden sm:block w-12 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}