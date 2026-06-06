'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaGithub } from 'react-icons/fa';
import { HiChip, HiDatabase, HiDocumentText } from 'react-icons/hi';

const projects = [
  {
    id: 1,
    title: "Huntington's Disease Prediction",
    subtitle: 'EEG Signal Classification using Deep Learning',
    description:
      'Built a deep learning pipeline to classify Huntington\'s disease using EEG data, processing 70+ clinical signals across 1000+ time samples. Applied FFT to extract top 50 power spectral features per signal. Designed a 1D CNN–LSTM hybrid model achieving 92.3% accuracy, 91% precision, and 93% recall. Enables early-stage neurodegenerative disease detection with low false positives.',
    technologies: ['Python', 'TensorFlow', 'SciPy', 'NumPy', 'MATLAB', 'Matplotlib'],
    date: 'April 2025',
    icon: HiChip,
    highlight: '92.3% Accuracy',
    category: 'AI / ML',
  },
  {
    id: 2,
    title: 'Expense Categorizer',
    subtitle: 'Smart Budget Tracker with AI Insights',
    description:
      'Full-stack expense tracking app that auto-categorizes 1,000+ entries from uploaded CSV using a custom keyword-based engine. Visualized trends via Plotly charts (bar, pie, radar, line) across 10+ categories. Used linear regression to forecast monthly spending and predict top 5 categories with 85%+ accuracy. AI-driven personalized saving tips based on user behavior.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Scikit-learn'],
    date: 'January 2025',
    icon: HiDatabase,
    highlight: '85%+ Forecast Accuracy',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Document Classifying AI Assistant',
    subtitle: 'Automated Multi-Format Document Sorting',
    description:
      'AI-powered classifier that automates document sorting with 95% accuracy, capable of processing 200+ documents efficiently. Supports multi-format document processing including PDFs, Word files, and scanned images. Deployed with scalable architecture for real-time classification and seamless integration across diverse data sources.',
    technologies: ['React.js', 'Flask', 'PostgreSQL', 'Llama', 'LayoutLMv3'],
    date: 'December 2024',
    icon: HiDocumentText,
    highlight: '95% Classification Accuracy',
    category: 'Full Stack + AI',
  },
];

const categoryColors: Record<string, string> = {
  'AI / ML': 'text-purple-400 bg-purple-500/10 border-purple-500/30',
  'Full Stack': 'text-blue-400 bg-blue-500/10 border-blue-500/30',
  'Full Stack + AI': 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
};

export function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
          subtitle="Real-world solutions I've built"
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
              {/* Project Header Visual */}
              <div className="relative aspect-video overflow-hidden bg-dark-800 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 via-primary-600/10 to-dark-900" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary-500/20 border border-primary-500/30"
                >
                  <project.icon size={40} className="text-primary-400" />
                </motion.div>
                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${categoryColors[project.category]}`}>
                    {project.category}
                  </span>
                </div>
                {/* Date */}
                <div className="absolute bottom-3 left-3">
                  <span className="text-xs text-dark-500">{project.date}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-1">
                  <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary-400">
                    {project.title}
                  </h3>
                  <p className="text-xs text-dark-500 mt-0.5">{project.subtitle}</p>
                </div>

                {/* Highlight stat */}
                <div className="my-3">
                  <span className="rounded-md bg-primary-500/10 px-2.5 py-1 text-xs font-semibold text-primary-400">
                    {project.highlight}
                  </span>
                </div>

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

        {/* View More on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/mithilesh-kumar-us/"
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
