'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const socialLinks = [
  {
    href: 'https://github.com/yourusername',
    icon: FaGithub,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    icon: FaLinkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/yourusername',
    icon: FaTwitter,
    label: 'Twitter',
  },
  {
    href: 'mailto:your.email@example.com',
    icon: HiMail,
    label: 'Email',
  },
];

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800/50 bg-dark-950">
      <div className="section-container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block text-xl font-bold text-white transition-colors hover:text-primary-400"
            >
              <span className="gradient-text">&lt;</span>
              Portfolio
              <span className="gradient-text">/&gt;</span>
            </Link>
            <p className="text-sm text-dark-400">
              Building digital experiences with passion and precision. Always learning, always
              growing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-dark-400 transition-colors hover:text-primary-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white">Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-colors hover:bg-primary-600 hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-dark-800/50 pt-8 text-center">
          <p className="text-sm text-dark-500">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className="mt-2 text-xs text-dark-600">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
