'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // ⚙️ Placeholder for future Cloudflare Worker call
    await new Promise((r) => setTimeout(r, 1000));

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a1f1a] text-gray-100 flex flex-col items-center justify-center px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl w-full text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#9cc5ad] mb-4">
          {t('title')}
        </h1>
        <p className="text-gray-400 text-lg">{t('subtitle')}</p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-[#132b23] border border-[#1f3b2e]/60 rounded-2xl shadow-xl p-8 w-full max-w-2xl space-y-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
              {t('name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#0f241e] border border-[#2f5044] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#9cc5ad] focus:border-transparent transition-all duration-200"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
              {t('email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#0f241e] border border-[#2f5044] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#9cc5ad] focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
            {t('message')}
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#0f241e] border border-[#2f5044] rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-[#9cc5ad] focus:border-transparent transition-all duration-200"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={status === 'loading'}
            className="flex items-center gap-2 bg-[#9cc5ad] text-[#0a1f1a] font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-[#b8dbc4] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          ><Rocket className="w-5 h-5" />
            {status === 'loading'
              ? t('sending')
              : status === 'success'
              ? t('sent')
              : t('send')}
          </button>
        </div>

        {status === 'success' && (
          <p className="text-center text-green-400 mt-4">{t('thankyou')}</p>
        )}
      </motion.form>
    </div>
  );
}
