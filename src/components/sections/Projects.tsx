'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with product management, cart functionality, secure payments, and order tracking. Built for scalability and performance.',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates, drag-and-drop functionality, team workspaces, and progress analytics.',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/taskapp',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    description:
      'An AI-powered content generation tool that helps users create blog posts, social media content, and marketing copy with customizable templates.',
    technologies: ['Next.js', 'OpenAI API', 'Prisma', 'Vercel AI SDK'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/ai-content',
  },
  {
    id: 4,
    title: 'Real Estate Listings',
    description:
      'A modern real estate platform featuring property listings, advanced search filters, virtual tours, and agent contact management.',
    technologies: ['React', 'Express', 'PostgreSQL', 'Mapbox'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/realestate',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description:
      'A comprehensive fitness tracking app with workout logging, progress charts, nutrition tracking, and personalized workout recommendations.',
    technologies: ['React Native', 'Firebase', 'Chart.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/fitness',
  },
  {
    id: 6,
    title: 'Developer Portfolio',
    description:
      'A modern, responsive portfolio website built with Next.js and Framer Motion, featuring smooth animations and optimal performance.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
  },
];

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Some of my recent work"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="card card-hover group flex flex-col overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-dark-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-dark-900" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-dark-700">
                    {project.title.charAt(0)}
                  </span>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 bg-dark-950/80 opacity-0 transition-opacity group-hover:opacity-100">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
                      aria-label="View live site"
                    >
                      <FaExternalLinkAlt size={18} />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-dark-700 text-white transition-colors hover:bg-dark-600"
                      aria-label="View source code"
                    >
                      <FaGithub size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-bold text-white transition-colors group-hover:text-primary-400">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-dark-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-dark-800 px-2 py-1 text-xs font-medium text-dark-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <FaGithub size={18} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
