import { ArrowRight, Mail, Sparkles, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function FinalCTA() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await addDoc(collection(db, 'testflight_signups'), {
        email: email,
        source: 'final-cta',
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setEmail('');

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Error saving to Firebase:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
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
            {/* Title */}
            <motion.h2
              className="text-white mb-6 text-3xl sm:text-4xl md:text-5xl leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Ready to transform your link saving?
            </motion.h2>

            {/* 50% OFF Badge - Now prominent at top */}
            <motion.div
              className="inline-block mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-purple-900 px-8 py-4 rounded-2xl shadow-2xl border-4 border-white/40"
                animate={{
                  boxShadow: [
                    "0 10px 40px rgba(251, 191, 36, 0.3)",
                    "0 10px 60px rgba(251, 191, 36, 0.5)",
                    "0 10px 40px rgba(251, 191, 36, 0.3)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6" />
                  <div>
                    <div className="text-2xl sm:text-3xl font-black leading-tight">LIFETIME 50% OFF</div>
                    <div className="text-sm font-bold">First 200 Beta Users Only!</div>
                  </div>
                  <Sparkles className="w-6 h-6" />
                </div>
              </motion.div>
            </motion.div>

            {/* Simplified benefits - bullet points */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-10 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">One-tap saving</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">Auto sync to Notion</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Users className="w-5 h-5 text-yellow-300" />
                <span className="font-semibold">500+ testers joined</span>
              </div>
            </motion.div>

            {/* Larger, more prominent form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {submitted ? (
                <motion.div
                  className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-2xl"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring" }}
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">You're in!</h3>
                  <p className="text-purple-700">
                    Check your inbox for your TestFlight invitation link. Welcome aboard! 🚀
                  </p>
                </motion.div>
              ) : (
                <div className="max-w-xl mx-auto">
                  <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-2 shadow-2xl">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="flex-1 relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          className="w-full pl-12 pr-4 py-4 rounded-xl bg-gray-50 border-2 border-transparent focus:border-purple-400 focus:bg-white focus:outline-none transition-all text-gray-900 placeholder-gray-500 text-base"
                          disabled={loading}
                        />
                      </div>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:shadow-2xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group whitespace-nowrap"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">
                          {loading ? 'Sending...' : 'Join Beta'}
                        </span>
                        {!loading && <ArrowRight className="relative z-10 w-5 h-5" />}
                      </motion.button>
                    </div>
                  </form>

                  <div className="mt-6">
                    {/* Main benefits in subtle card */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3">
                      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/90 text-sm">
                        <span className="flex items-center gap-1.5">
                          <span>🎁</span>
                          <span>Free TestFlight invite</span>
                        </span>
                        <span className="hidden sm:inline text-white/40">•</span>
                        <span className="flex items-center gap-1.5">
                          <span>💳</span>
                          <span>No credit card required</span>
                        </span>
                        <span className="hidden sm:inline text-white/40">•</span>
                        <span className="flex items-center gap-1.5">
                          <span>⚡</span>
                          <span>Limited spots available</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  {error && (
                    <motion.div
                      className="bg-red-100 border border-red-300 text-red-700 rounded-xl p-3 mt-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      {error}
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
