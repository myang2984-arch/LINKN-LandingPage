import { useState } from 'react';
import { Mail, Smartphone, Star, CheckCircle2, Sparkles } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';

const proFeatures = [
  'Unlimited Auto-Sync',
  'Multi-Database Distribution',
  'Smart Tagging',
  'Daily Digest',
  'Team Collaboration',
];

export function BetaSignup() {
  const [formData, setFormData] = useState({
    email: '',
    deviceType: 'iPhone',
    interestedFeatures: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Save to Firebase Firestore
      await addDoc(collection(db, 'beta_signups'), {
        email: formData.email,
        deviceType: formData.deviceType,
        interestedFeatures: formData.interestedFeatures,
        createdAt: serverTimestamp(),
      });
      
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          email: '',
          deviceType: 'iPhone',
          interestedFeatures: [],
        });
      }, 3000);
    } catch (err) {
      console.error('Error saving to Firebase:', err);
      setError('Failed to submit. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      interestedFeatures: prev.interestedFeatures.includes(feature)
        ? prev.interestedFeatures.filter(f => f !== feature)
        : [...prev.interestedFeatures, feature],
    }));
  };

  if (submitted) {
    return (
      <section id="beta-signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full"
              initial={{ 
                x: '50%', 
                y: '50%',
                scale: 0,
                opacity: 1
              }}
              animate={{ 
                x: `${Math.random() * 100}%`, 
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0],
                opacity: [1, 1, 0]
              }}
              transition={{ 
                duration: 2,
                ease: "easeOut",
                delay: i * 0.05
              }}
            />
          ))}
        </motion.div>
        
        <motion.div 
          className="max-w-2xl mx-auto text-center relative z-10"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>
          <motion.h2 
            className="text-gray-900 mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Application Submitted!
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-xl"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Thank you for applying! We'll contact you via email soon.
          </motion.p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="beta-signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 px-4 py-2 rounded-full mb-4"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(168, 85, 247, 0)",
                "0 0 0 10px rgba(168, 85, 247, 0)",
              ],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          >
            <Sparkles size={16} className="text-purple-600" />
            <span className="text-purple-600">Limited Beta Access</span>
          </motion.div>
          <h2 className="text-gray-900 mb-4">
            Join the Beta
          </h2>
          <p className="text-gray-600">
            Fill out the form below and we'll prioritize your access to linkn
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 邮箱 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label htmlFor="email" className="flex items-center gap-2 text-gray-700 mb-2">
                <Mail size={18} className="text-purple-600" />
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
              <p className="text-gray-500 mt-1">We'll send you a TestFlight invite via email</p>
            </motion.div>

            {/* 设备类型 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="flex items-center gap-2 text-gray-700 mb-3">
                <Smartphone size={18} className="text-purple-600" />
                Your Device Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['iPhone', 'iPad'].map((device) => (
                  <motion.button
                    key={device}
                    type="button"
                    onClick={() => setFormData({ ...formData, deviceType: device })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      formData.deviceType === device
                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {device}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* 感兴趣的功能 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label className="flex items-center gap-2 text-gray-700 mb-3">
                <Star size={18} className="text-purple-600" />
                Which Pro features interest you most? (Select all that apply)
              </label>
              <div className="space-y-2">
                {proFeatures.map((feature, index) => (
                  <motion.label
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer transition-all hover:shadow-md"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ x: 5 }}
                  >
                    <input
                      type="checkbox"
                      checked={formData.interestedFeatures.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </motion.label>
                ))}
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">
                {loading ? 'Submitting...' : 'Submit Application'}
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <AnimatePresence>
              {error && (
                <motion.p 
                  className="text-center text-red-600"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <p className="text-center text-gray-500">
              We'll send you a TestFlight invite within 1-2 weeks
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}