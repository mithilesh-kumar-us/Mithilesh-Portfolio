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
  SiFlask,
  SiBootstrap,
  SiFigma,
  SiAmazonwebservices,
  SiSpringboot,
  SiTensorflow,
  SiNumpy,
} from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { SiCplusplus } from 'react-icons/si';

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'Java', icon: FaJava, color: '#ED8B00' },
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
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    title: 'Backend & Frameworks',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express.js', icon: SiNodedotjs, color: '#ffffff' },
      { name: 'Flask', icon: SiFlask, color: '#ffffff' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    title: 'AI / ML & Data',
    skills: [
      { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      { name: 'NumPy', icon: SiNumpy, color: '#013243' },
      { name: 'Scikit-learn', icon: SiPython, color: '#F7931E' },
    ],
  },
  {
    title: 'Tools & Cloud',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'AWS', icon: SiAmazonwebservices, color: '#FF9900' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
      { name: 'Postman', icon: SiNodedotjs, color: '#FF6C37' },
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
              DSA, REST APIs, Embedded C, Notion, Pandas, Matplotlib, SciPy
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
