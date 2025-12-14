import { useState } from 'react';
import { Mail, Smartphone, Star, CheckCircle2 } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

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
      <section id="beta-signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-gray-900 mb-4">Application Submitted!</h2>
          <p className="text-gray-600">
            Thank you for applying! We'll contact you via email soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="beta-signup" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-4">
            Join the Beta
          </h2>
          <p className="text-gray-600">
            Fill out the form below and we'll prioritize your access to linkn
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 邮箱 */}
            <div>
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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <p className="text-gray-500 mt-1">We'll send you a TestFlight invite via email</p>
            </div>

            {/* 设备类型 */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 mb-3">
                <Smartphone size={18} className="text-purple-600" />
                Your Device Type *
              </label>
              <div className="grid grid-cols-2 gap-3">
                {['iPhone', 'iPad'].map((device) => (
                  <button
                    key={device}
                    type="button"
                    onClick={() => setFormData({ ...formData, deviceType: device })}
                    className={`px-4 py-3 rounded-lg border-2 transition-all ${
                      formData.deviceType === device
                        ? 'border-purple-600 bg-purple-50 text-purple-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {device}
                  </button>
                ))}
              </div>
            </div>

            {/* 感兴趣的功能 */}
            <div>
              <label className="flex items-center gap-2 text-gray-700 mb-3">
                <Star size={18} className="text-purple-600" />
                Which Pro features interest you most? (Select all that apply)
              </label>
              <div className="space-y-2">
                {proFeatures.map((feature) => (
                  <label
                    key={feature}
                    className="flex items-center gap-3 p-4 rounded-lg border border-gray-200 hover:border-purple-300 cursor-pointer transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.interestedFeatures.includes(feature)}
                      onChange={() => toggleFeature(feature)}
                      className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <span className="text-gray-700">{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>

            {error && (
              <p className="text-center text-red-600">{error}</p>
            )}

            <p className="text-center text-gray-500">
              We'll send you a TestFlight invite within 1-2 weeks
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}