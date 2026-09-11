'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const contactInfo = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'mithilesh02905@gmail.com',
    href: 'mailto:mithilesh02905@gmail.com',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Chennai, India',
    href: null,
  },
];

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/mithilesh-kumar-us/', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/mithileshkumarus/', label: 'LinkedIn' },
];

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnpqwrqo';

export function Contact() {
  const resetStatusTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (resetStatusTimeoutRef.current) clearTimeout(resetStatusTimeoutRef.current);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      resetStatusTimeoutRef.current = setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  useEffect(() => {
    return () => {
      if (resetStatusTimeoutRef.current) clearTimeout(resetStatusTimeoutRef.current);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="contact" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have a project or opportunity in mind? Let's connect"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">Let's Talk</h3>
              <p className="text-dark-400 leading-relaxed">
                I'm always open to discussing new projects, internship opportunities, or collaborations.
                Feel free to reach out — I'll get back to you as soon as possible.
              </p>
            </div>

            {/* Open to Work */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4 flex items-start gap-3">
              <span className="mt-0.5 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-green-400 animate-pulse" />
              <div>
                <p className="text-sm font-semibold text-green-400">Open to Opportunities</p>
                <p className="text-xs text-dark-400 mt-1">
                  Currently seeking full-time roles and internships in Full-Stack Development, AI/ML, or Software Engineering starting 2027.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10 text-primary-400">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white transition-colors hover:text-primary-400">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <p className="mb-4 text-sm text-dark-500">Connect with me</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex h-11 w-11 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-colors hover:bg-primary-600 hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-dark-300">Name</label>
                    <input
                      type="text" id="name" name="name"
                      value={formData.name} onChange={handleChange} required
                      className="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-dark-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-dark-300">Email</label>
                    <input
                      type="email" id="email" name="email"
                      value={formData.email} onChange={handleChange} required
                      className="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-dark-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-dark-300">Subject</label>
                  <input
                    type="text" id="subject" name="subject"
                    value={formData.subject} onChange={handleChange} required
                    className="w-full rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-dark-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Internship Opportunity / Project Collab"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-dark-300">Message</label>
                  <textarea
                    id="message" name="message"
                    value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full resize-none rounded-lg border border-dark-700 bg-dark-800 px-4 py-3 text-white placeholder-dark-500 transition-colors focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit" disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm text-green-400">
                    Message sent! I'll get back to you soon.
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center text-sm text-red-400">
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
