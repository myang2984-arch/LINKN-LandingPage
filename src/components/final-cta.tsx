import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function FinalCTA() {
  const scrollToSignup = () => {
    const element = document.getElementById('beta-signup');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.5, 1],
              x: [-20, 20, -20],
              y: [-20, 20, -20],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              scale: [1.5, 1, 1.5],
              x: [20, -20, 20],
              y: [20, -20, 20],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative z-10">
            <motion.h2 
              className="text-white mb-4 text-4xl sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to transform your link saving?
            </motion.h2>
            
            <motion.p 
              className="text-purple-100 text-xl mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join the beta today and be part of shaping the future of mobile link management for Notion
            </motion.p>

            <motion.div
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <p className="text-white flex items-center justify-center gap-2">
                <span className="text-2xl">🎉</span>
                <span className="text-lg">Beta users get <strong className="text-yellow-300">lifetime 50% off</strong> Pro plan!!!</span>
              </p>
            </motion.div>

            <motion.button
              onClick={scrollToSignup}
              className="bg-white text-purple-600 px-8 py-4 rounded-lg hover:shadow-2xl transition-all flex items-center gap-2 mx-auto relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Get early access</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gray-50"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}