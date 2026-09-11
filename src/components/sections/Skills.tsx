'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiMysql,
  SiFastapi,
  SiAmazonwebservices,
  SiTensorflow,
  SiPytorch,
  SiLangchain,
  SiHuggingface,
  SiDocker,
  SiGithubactions,
  SiRedis,
  SiCplusplus,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { HiChip, HiShare, HiSearch } from 'react-icons/hi';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'SQL', icon: FaDatabase, color: '#4479A1' },
    ],
  },
  {
    title: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiNodedotjs, color: '#ffffff' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
    ],
  },
  {
    title: 'AI / ML & LLM',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, color: '#EE4C2C' },
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'LangChain', icon: SiLangchain, color: '#1C3C3C' },
      { name: 'LangGraph', icon: HiShare, color: '#a855f7' },
      { name: 'Transformers', icon: SiHuggingface, color: '#FFD21E' },
      { name: 'RAG', icon: HiSearch, color: '#ec4899' },
      { name: 'MCP', icon: HiChip, color: '#c084fc' },
      { name: 'pgvector', icon: FaDatabase, color: '#4169E1' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
    ],
  },
];

export function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies I work with to bring ideas to life"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.title} variants={categoryVariants}>
              <h3 className="mb-6 text-xl font-semibold text-white">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="card card-hover group flex flex-col items-center gap-3 p-4"
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg bg-dark-800 transition-colors group-hover:bg-dark-700"
                      style={{ color: skill.color }}
                    >
                      <skill.icon size={28} />
                    </div>
                    <span className="text-center text-sm font-medium text-dark-300 group-hover:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-dark-400">
            Also experienced with:{' '}
            <span className="text-dark-300">
              REST APIs, Microservices, Distributed Systems, Linux, DSA, Operating Systems, Computer Networks, System Design, Database Management
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
