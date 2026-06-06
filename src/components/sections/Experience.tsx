'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';

const experiences = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    period: 'Jan 2023 - Present',
    description: [
      'Led development of microservices architecture serving 1M+ daily users',
      'Mentored junior developers and conducted code reviews',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with product team to define technical requirements',
    ],
    technologies: ['React', 'Node.js', 'AWS', 'PostgreSQL', 'Docker'],
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    location: 'New York, NY',
    period: 'Mar 2021 - Dec 2022',
    description: [
      'Built responsive web applications for Fortune 500 clients',
      'Developed RESTful APIs and integrated third-party services',
      'Optimized application performance improving load times by 40%',
      'Participated in agile ceremonies and sprint planning',
    ],
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'GraphQL'],
  },
  {
    id: 3,
    title: 'Frontend Developer',
    company: 'Startup Studio',
    location: 'Remote',
    period: 'Jun 2019 - Feb 2021',
    description: [
      'Developed user interfaces for multiple SaaS products',
      'Implemented responsive designs following UI/UX specifications',
      'Created reusable component libraries improving development efficiency',
      'Collaborated with designers to ensure pixel-perfect implementations',
    ],
    technologies: ['React', 'JavaScript', 'Sass', 'Redux'],
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
      transition: {
        staggerChildren: 0.2,
      },
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
                className={`absolute top-0 hidden h-4 w-4 rounded-full border-4 border-dark-950 bg-primary-500 md:block ${
                  index % 2 === 0 ? 'md:-right-2' : 'md:-left-2'
                }`}
              />

              <div className="card card-hover p-6">
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
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
