'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HiCode, HiLightningBolt, HiAcademicCap } from 'react-icons/hi';

const stats = [
  { label: 'CGPA', value: 8, suffix: '.9', icon: HiAcademicCap },
  { label: 'Projects Built', value: 10, suffix: '+', icon: HiCode },
  { label: 'Hackathons Won', value: 5, suffix: '+', icon: HiLightningBolt },
];

export function About() {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="about" className="section-padding bg-dark-900/30">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Animated Code Block Visual */}
          <motion.div variants={itemVariants} className="relative mx-auto lg:mx-0">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-dark-800 bg-dark-900 sm:h-96 sm:w-96 font-mono text-sm">
              <div className="flex items-center gap-2 border-b border-dark-800 bg-dark-950 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-xs text-dark-500">mithilesh.ts</span>
              </div>
              <div className="p-5 space-y-1 text-xs leading-relaxed">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-400">{'{'}</span></p>
                <p className="pl-4"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-orange-300">"Mithilesh Kumar U S"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">role</span><span className="text-white">:</span> <span className="text-orange-300">"Full Stack + AI/ML"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">college</span><span className="text-white">:</span> <span className="text-orange-300">"Amrita, Chennai"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">year</span><span className="text-white">:</span> <span className="text-orange-300">"4th Year (2023–2027)"</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">cgpa</span><span className="text-white">:</span> <span className="text-cyan-400">8.9</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">interests</span><span className="text-white">:</span> <span className="text-yellow-400">[</span></p>
                <p className="pl-8"><span className="text-orange-300">"Full-Stack"</span><span className="text-white">,</span></p>
                <p className="pl-8"><span className="text-orange-300">"AI/ML"</span><span className="text-white">,</span></p>
                <p className="pl-8"><span className="text-orange-300">"Problem Solving"</span></p>
                <p className="pl-4"><span className="text-yellow-400">]</span><span className="text-white">,</span></p>
                <p className="pl-4"><span className="text-green-400">openTo</span><span className="text-white">:</span> <span className="text-orange-300">"Opportunities"</span></p>
                <p><span className="text-yellow-400">{'}'}</span><span className="text-white">;</span></p>
                <motion.span
                  className="inline-block w-2 h-4 bg-primary-400 ml-0"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-xl border border-primary-500/30 bg-primary-500/10" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl border border-primary-500/30 bg-primary-500/10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-dark-300 leading-relaxed">
                I'm a 4th-year B.Tech student in Computer and Communication Engineering at Amrita School of Engineering, Chennai, maintaining a CGPA of 8.9.  Ex-intern at SAP Labs, build backend APIs collection workflow and knowledge-base systems MCP servers.
              </p>
              <p className="text-dark-300 leading-relaxed">
                My interests span Full-Stack Development, AI/ML, and competitive programming. I enjoy building end-to-end solutions — from intelligent ML models and data pipelines to responsive web applications — and have shipped 10+ projects and won 5+ hackathons, including a finalist slot at IIT Madras.
              </p>
              <p className="text-dark-300 leading-relaxed">
                I bring strong foundations in DSA, systems thinking, and a proven ability to work under pressure — making me a reliable contributor to any engineering team.
              </p>
            </div>

            {/* Tech Stack Quick View */}
            <div className="flex flex-wrap gap-2">
              {['C++', 'Python', 'JavaScript', 'React.js', 'Node.js', 'REST', 'Spring Boot', 'PostgreSQL', 'AWS'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-lg bg-dark-800 px-3 py-1.5 text-sm font-medium text-dark-300"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="card card-hover p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-500/10 text-primary-400">
                <stat.icon size={28} />
              </div>
              <div className="text-3xl font-bold text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-dark-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
