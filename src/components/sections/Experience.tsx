'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    id: 1,
    title: 'Software Engineering Intern (iXp)',
    company: 'SAP Labs India',
    location: 'Bengaluru, India',
    period: 'May 2026 – July 2026',
    current: false,
    description: [
      'Reduced manual documentation lookup time by 40% by building a knowledge base platform with an integrated MCP server, enabling engineers to query cross-team workflows, database schemas, and API details conversationally via LLM-based tools like Claude Code',
      'Optimized manual API testing time by 60–70% across 15+ endpoints by engineering an AI workflow that ingests endpoint specifications and documentation, auto-generates test scenarios, and executes them via MCP tools against a live environment',
    ],
    technologies: ['MCP', 'LLM Tooling', 'Claude Code', 'REST APIs'],
  },
  {
    id: 2,
    title: 'Freelancer',
    company: 'PingUs',
    location: 'Chennai, India',
    period: 'October 2025 – February 2026',
    current: false,
    description: [
      "Replaced a cloud kitchen's manual, phone-based ordering process with a full-stack web platform handling 5–10 daily orders, eliminating manual order-entry errors through structured menu browsing, cart, and checkout flows",
      'Built an admin dashboard for real-time menu and order management, backed by a React + Tailwind CSS frontend and a Node.js (Express) + MongoDB backend',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Web Developer Intern',
    company: 'EasyGold Pvt. Ltd.',
    location: 'Remote',
    period: 'April 2025 – June 2025',
    current: false,
    description: [
      'Built a real-time e-gold product description page for a beta launch, integrating a live pricing API refreshing every few minutes',
      'Implemented a secure checkout flow optimized across mobile and desktop, built end-to-end in React.js and Node.js',
    ],
    technologies: ['React.js', 'Node.js', 'REST APIs', 'JavaScript', 'CSS3'],
  },
];

export function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="experience" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-primary-500 via-dark-700 to-transparent md:left-1/2 md:block md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              className={`relative mb-12 last:mb-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 hidden h-4 w-4 rounded-full border-4 border-dark-950 md:block ${
                  exp.current ? 'bg-green-400' : 'bg-primary-500'
                } ${index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'}`}
              />

              <div className="card card-hover p-6">
                {/* Header */}
                <div className="mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-400 border border-green-500/30">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-dark-400">
                    <span className="flex items-center gap-1">
                      <HiBriefcase className="text-primary-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiLocationMarker className="text-primary-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiCalendar className="text-primary-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <ul className="mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-dark-300">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-primary-500/10 px-2.5 py-1 text-xs font-medium text-primary-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
