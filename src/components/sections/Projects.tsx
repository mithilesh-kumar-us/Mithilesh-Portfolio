'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FaGithub } from 'react-icons/fa';

const GRADIENT_IDS = {
  brain: 'proj-brain-grad',
  chart: 'proj-chart-grad',
  doc: 'proj-doc-grad',
  code: 'proj-code-grad',
  sync: 'proj-sync-grad',
};

function ProjectGradientDefs() {
  return (
    <defs>
      <linearGradient id={GRADIENT_IDS.brain} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
      <linearGradient id={GRADIENT_IDS.chart} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
      <linearGradient id={GRADIENT_IDS.doc} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#34d399" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
      <linearGradient id={GRADIENT_IDS.code} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
      <linearGradient id={GRADIENT_IDS.sync} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f472b6" />
        <stop offset="100%" stopColor="#a855f7" />
      </linearGradient>
    </defs>
  );
}

/* EEG brain-wave illustration — Huntington's Disease Prediction */
function BrainWaveArt() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full">
      <ProjectGradientDefs />
      <path
        d="M55 70 Q40 70 38 55 Q36 42 46 36 Q44 24 56 20 Q68 14 80 22 Q92 14 104 20 Q116 24 114 36 Q124 42 122 55 Q120 70 105 70"
        fill="none"
        stroke={`url(#${GRADIENT_IDS.brain})`}
        strokeWidth="2"
        opacity="0.55"
      />
      <path
        d="M80 22 Q76 40 80 55 Q84 68 80 78"
        fill="none"
        stroke={`url(#${GRADIENT_IDS.brain})`}
        strokeWidth="1.5"
        opacity="0.4"
      />
      <motion.path
        d="M20 78 L45 78 L52 60 L60 92 L68 68 L76 78 L92 78 L100 50 L108 92 L116 78 L140 78"
        fill="none"
        stroke={`url(#${GRADIENT_IDS.brain})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
      />
      {[46, 60, 76, 92, 108].map((cx, i) => (
        <motion.circle
          key={cx}
          cx={cx}
          cy={78}
          r="2"
          fill="#ec4899"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 1.6, delay: i * 0.2, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}

/* Budget dashboard illustration — Expense Categorizer */
function BudgetChartArt() {
  const bars = [22, 38, 28, 46, 34];
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full">
      <ProjectGradientDefs />
      <circle cx="42" cy="50" r="24" fill="none" stroke={`url(#${GRADIENT_IDS.chart})`} strokeWidth="2" opacity="0.3" />
      <motion.path
        d="M42 26 A24 24 0 0 1 64 62 L42 50 Z"
        fill={`url(#${GRADIENT_IDS.chart})`}
        opacity="0.7"
        initial={{ rotate: -20, opacity: 0 }}
        animate={{ rotate: 0, opacity: 0.7 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ transformOrigin: '42px 50px' }}
      />
      <motion.path
        d="M42 50 L64 62 A24 24 0 0 1 30 72Z"
        fill="#ec4899"
        opacity="0.45"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      {bars.map((h, i) => (
        <motion.rect
          key={i}
          x={92 + i * 11}
          width="7"
          rx="2"
          fill={`url(#${GRADIENT_IDS.chart})`}
          initial={{ height: 0, y: 82 }}
          animate={{ height: h, y: 82 - h }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }}
        />
      ))}
      <line x1="88" y1="82" x2="150" y2="82" stroke="#475569" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}

/* Document sorting illustration — Document Classifying AI Assistant */
function DocumentSortArt() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full">
      <ProjectGradientDefs />
      {[0, 1, 2].map((i) => (
        <motion.rect
          key={i}
          x={26 + i * 6}
          y={28 - i * 6}
          width="44"
          height="56"
          rx="4"
          fill="#0d0d1a"
          stroke={`url(#${GRADIENT_IDS.doc})`}
          strokeWidth="1.5"
          opacity={0.4 + i * 0.2}
          initial={{ x: 26 + i * 6 - 8, opacity: 0 }}
          animate={{ x: 26 + i * 6, opacity: 0.4 + i * 0.2 }}
          transition={{ duration: 0.6, delay: i * 0.15 }}
        />
      ))}
      <rect x="32" y="18" width="44" height="56" rx="4" fill="#0d0d1a" stroke={`url(#${GRADIENT_IDS.doc})`} strokeWidth="2" />
      <line x1="40" y1="30" x2="68" y2="30" stroke={`url(#${GRADIENT_IDS.doc})`} strokeWidth="1.5" opacity="0.8" />
      <line x1="40" y1="37" x2="62" y2="37" stroke={`url(#${GRADIENT_IDS.doc})`} strokeWidth="1.5" opacity="0.5" />
      <line x1="40" y1="44" x2="66" y2="44" stroke={`url(#${GRADIENT_IDS.doc})`} strokeWidth="1.5" opacity="0.5" />
      <motion.path
        d="M84 46 L104 46 M104 46 L98 40 M104 46 L98 52"
        stroke={`url(#${GRADIENT_IDS.doc})`}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        animate={{ x: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
      {['A', 'B', 'C'].map((label, i) => (
        <g key={label}>
          <rect x="114" y={20 + i * 22} width="30" height="16" rx="4" fill="none" stroke={`url(#${GRADIENT_IDS.doc})`} strokeWidth="1.5" opacity="0.6" />
          <text x="129" y={31 + i * 22} textAnchor="middle" fill="#34d399" fontSize="9" fontFamily="monospace" opacity="0.85">{label}</text>
        </g>
      ))}
    </svg>
  );
}

/* Code review / PR diff illustration — PRism */
function CodeReviewArt() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full">
      <ProjectGradientDefs />
      <rect x="18" y="14" width="90" height="72" rx="6" fill="#0d0d1a" stroke={`url(#${GRADIENT_IDS.code})`} strokeWidth="1.5" opacity="0.9" />
      <circle cx="28" cy="23" r="2" fill="#f87171" opacity="0.7" />
      <circle cx="35" cy="23" r="2" fill="#facc15" opacity="0.7" />
      <circle cx="42" cy="23" r="2" fill="#4ade80" opacity="0.7" />
      {[
        { y: 34, w: 50, color: '#4ade80', sign: '+' },
        { y: 43, w: 60, color: '#4ade80', sign: '+' },
        { y: 52, w: 40, color: '#f87171', sign: '–' },
        { y: 61, w: 55, color: '#4ade80', sign: '+' },
        { y: 70, w: 35, color: '#94a3b8', sign: ' ' },
      ].map((line, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: i * 0.15 }}
        >
          <text x="26" y={line.y} fill={line.color} fontSize="9" fontFamily="monospace">{line.sign}</text>
          <rect x="34" y={line.y - 7} width={line.w} height="6" rx="1.5" fill={line.color} opacity="0.25" />
        </motion.g>
      ))}
      <motion.g
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1, type: 'spring' }}
      >
        <circle cx="128" cy="30" r="16" fill={`url(#${GRADIENT_IDS.code})`} opacity="0.2" />
        <circle cx="128" cy="30" r="16" fill="none" stroke={`url(#${GRADIENT_IDS.code})`} strokeWidth="2" />
        <path d="M120 30 L126 36 L137 23" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      <text x="128" y="58" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" opacity="0.7">11 langs</text>
      <text x="128" y="70" textAnchor="middle" fill="#c084fc" fontSize="7" fontFamily="monospace" opacity="0.7">7 analyzers</text>
    </svg>
  );
}

/* Real-time multi-cursor sync illustration — SyncSpace */
function SyncCursorsArt() {
  const cursors = [
    { color: '#a855f7', x: 40, y: 30, dx: 20, dy: 10 },
    { color: '#ec4899', x: 100, y: 60, dx: -18, dy: -6 },
    { color: '#60a5fa', x: 70, y: 75, dx: 14, dy: -14 },
  ];
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full">
      <ProjectGradientDefs />
      <rect x="16" y="14" width="128" height="72" rx="6" fill="#0d0d1a" stroke={`url(#${GRADIENT_IDS.sync})`} strokeWidth="1.5" opacity="0.7" />
      <rect x="30" y="28" width="34" height="24" rx="3" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.5" />
      <circle cx="100" cy="40" r="14" fill="none" stroke="#ec4899" strokeWidth="1.5" opacity="0.5" />
      <path d="M70 60 L120 60 L110 74 L60 74 Z" fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.5" />
      {cursors.map((c, i) => (
        <motion.g
          key={i}
          animate={{ x: [0, c.dx, 0], y: [0, c.dy, 0] }}
          transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
        >
          <path
            d={`M${c.x} ${c.y} L${c.x} ${c.y + 12} L${c.x + 3.5} ${c.y + 9} L${c.x + 6} ${c.y + 14} L${c.x + 8} ${c.y + 12.5} L${c.x + 5.5} ${c.y + 7.5} L${c.x + 9} ${c.y + 7} Z`}
            fill={c.color}
          />
          <rect x={c.x + 8} y={c.y - 3} width="26" height="10" rx="3" fill={c.color} opacity="0.9" />
        </motion.g>
      ))}
    </svg>
  );
}

const projects = [
  {
    id: 4,
    title: 'PRism',
    subtitle: 'Agentic AI Code Review Pipeline',
    description:
      'Integrated a queue-driven AI code review pipeline supporting 11 languages via Tree-sitter AST parsing and a resolved call graph, running 7 static analyzers in isolated Docker sandboxes for zero-trust PR analysis. Engineered a bounded tool-calling agent across LLM providers with an independent judge-validation pass, and shipped a Next.js dashboard with GitHub OAuth on a FastAPI + PostgreSQL backend.',
    technologies: ['Python', 'FastAPI', 'Redis', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker', 'CI/CD'],
    date: 'June 2026',
    Art: CodeReviewArt,
    highlight: '11 Languages Supported',
    category: 'Full Stack + AI',
    github: 'https://github.com/mithilesh-kumar-us/PRism-Smart-Code-Reviewer',
  },
  {
    id: 5,
    title: 'SyncSpace',
    subtitle: 'Real-Time Collaborative Sync Engine',
    description:
      'Architected a sync engine around Yjs CRDTs with a custom WebSocket layer, scaled horizontally via a Redis pub/sub relay, with permissions enforced at the raw WebSocket message level. Delivered a state-reconciliation bridge extending that sync core to a collaborative Excalidraw whiteboard, resolving concurrent edits via element-level tombstoning, a 50ms-throttled shape sync, and live multi-cursor presence tracking.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'Redis', 'BullMQ', 'WebSocket', 'Yjs', 'Next.js', 'TypeScript'],
    date: 'January 2026',
    Art: SyncCursorsArt,
    highlight: 'Real-Time CRDT Sync',
    category: 'Full Stack',
    github: 'https://github.com/mithilesh-kumar-us/SyncSpace',
  },
  {
    id: 1,
    title: "Huntington's Disease Prediction",
    subtitle: 'EEG Signal Classification using Deep Learning',
    description:
      'Built a deep learning pipeline to classify Huntington\'s disease using EEG data, processing 70+ clinical signals across 1000+ time samples. Applied FFT to extract top 50 power spectral features per signal. Designed a 1D CNN–LSTM hybrid model achieving 92.3% accuracy, 91% precision, and 93% recall. Enables early-stage neurodegenerative disease detection with low false positives.',
    technologies: ['Python', 'TensorFlow', 'SciPy', 'NumPy', 'MATLAB', 'Matplotlib'],
    date: 'April 2025',
    Art: BrainWaveArt,
    highlight: '92.3% Accuracy',
    category: 'AI / ML',
    github: null,
  },
  {
    id: 2,
    title: 'Expense Categorizer',
    subtitle: 'Smart Budget Tracker with AI Insights',
    description:
      'Full-stack expense tracking app that auto-categorizes 1,000+ entries from uploaded CSV using a custom keyword-based engine. Visualized trends via Plotly charts (bar, pie, radar, line) across 10+ categories. Used linear regression to forecast monthly spending and predict top 5 categories with 85%+ accuracy. AI-driven personalized saving tips based on user behavior.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'Plotly', 'Scikit-learn'],
    date: 'January 2025',
    Art: BudgetChartArt,
    highlight: '85%+ Forecast Accuracy',
    category: 'Full Stack',
    github: null,
  },
  {
    id: 3,
    title: 'Document Classifying AI Assistant',
    subtitle: 'Automated Multi-Format Document Sorting',
    description:
      'AI-powered classifier that automates document sorting with 95% accuracy, capable of processing 200+ documents efficiently. Supports multi-format document processing including PDFs, Word files, and scanned images. Deployed with scalable architecture for real-time classification and seamless integration across diverse data sources.',
    technologies: ['React.js', 'Flask', 'PostgreSQL', 'Llama', 'LayoutLMv3'],
    date: 'December 2024',
    Art: DocumentSortArt,
    highlight: '95% Classification Accuracy',
    category: 'Full Stack + AI',
    github: null,
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
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 h-full w-full p-4"
                >
                  <project.Art />
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
                <div className="mb-1 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary-400">
                      {project.title}
                    </h3>
                    <p className="text-xs text-dark-500 mt-0.5">{project.subtitle}</p>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-dark-800 text-dark-400 transition-colors hover:bg-primary-600 hover:text-white"
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
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
