'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { HiCode, HiLightningBolt, HiUsers } from 'react-icons/hi';

const stats = [
  { label: 'Years Experience', value: 5, suffix: '+', icon: HiCode },
  { label: 'Projects Completed', value: 50, suffix: '+', icon: HiLightningBolt },
  { label: 'Happy Clients', value: 30, suffix: '+', icon: HiUsers },
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
      transition: {
        staggerChildren: 0.2,
      },
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
          {/* Image/Avatar */}
          <motion.div variants={itemVariants} className="relative mx-auto lg:mx-0">
            <div className="relative h-80 w-80 overflow-hidden rounded-2xl border border-dark-800 bg-dark-900 sm:h-96 sm:w-96">
              {/* Placeholder gradient avatar */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-dark-900" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-48 w-48 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-80" />
              </div>
              {/* Decorative elements */}
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
                I'm a full-stack developer with a passion for creating elegant solutions 
                to complex problems. With expertise in modern web technologies, I build 
                scalable applications that deliver exceptional user experiences.
              </p>
              <p className="text-dark-300 leading-relaxed">
                My journey in software development started over 5 years ago, and since 
                then I've had the privilege of working with startups, agencies, and 
                established companies. I thrive on continuous learning and staying 
                up-to-date with the latest industry trends and best practices.
              </p>
              <p className="text-dark-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                technical writing and mentoring.
              </p>
            </div>

            {/* Tech Stack Quick View */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map(
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
