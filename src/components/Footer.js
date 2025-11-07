'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a1f1a] text-gray-300 border-t border-[#1f3b2e]/60">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright text */}
        <p className="text-sm text-center md:text-left">
          © {currentYear} {t('copyright')}. {t('allRights')}.
        </p>

        {/* Optional links section */}
        <div className="flex gap-6 text-sm">
          <Link
            href="/privacy"
            className="hover:text-[#9cc5ad] transition-colors duration-200"
          >
            {t('privacy')}
          </Link>
          <Link
            href="/terms"
            className="hover:text-[#9cc5ad] transition-colors duration-200"
          >
            {t('terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
