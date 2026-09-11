'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { HiAcademicCap, HiStar, HiBadgeCheck } from 'react-icons/hi';

const education = [
  {
    id: 1,
    degree: 'B.Tech in Computer and Communication Engineering',
    institution: 'Amrita School of Engineering',
    location: 'Chennai, India',
    period: 'Aug 2023 – May 2027',
    score: 'CGPA: 8.91 / 10.0',
    coursework: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'DBMS', 'Computer Networks', 'Machine Learning', 'Data Science', 'Deep Learning', 'Distributed Systems'],
  },
  {
    id: 2,
    degree: 'Higher Secondary Education (HSE) – Computer Science',
    institution: 'Perks Matriculation School',
    location: 'Coimbatore, India',
    period: 'June 2021 – May 2023',
    score: 'Score: 92.8%',
    coursework: ['Python', 'SQL', 'C++', 'Mathematics'],
  },
];

const achievements = [
  {
    id: 1,
    title: 'Finalist – IndustriAI Hackathon',
    venue: 'IIT Madras, Chennai',
    description: 'Selected from 300+ teams for an AI-driven solution that was deployed and demonstrated.',
    icon: HiBadgeCheck,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/30',
  },
  {
    id: 2,
    title: 'Winner – TechBiz\'25 Hackathon',
    venue: 'Amrita, Chennai',
    description: 'Built "Third Eye" — an AI-powered proctoring system, winning the hackathon.',
    icon: HiBadgeCheck,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
    border: 'border-green-500/30',
  },
  {
    id: 3,
    title: '1st Place – Technical Treasure Hunt',
    venue: 'Tantrotsav 2026, Amrita',
    description: 'Solved a series of technical puzzles to claim first place in the treasure hunt event.',
    icon: HiStar,
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/30',
  },
  {
    id: 4,
    title: '2nd Place – Crazy Syntax',
    venue: 'Tantrotsav 2026, Amrita',
    description: 'Solved coding challenges in an unconventional syntax language under timed conditions.',
    icon: HiStar,
    color: 'text-primary-400',
    bg: 'bg-primary-500/10',
    border: 'border-primary-500/30',
  },
  {
    id: 5,
    title: 'Runner-up – Code of Duty',
    venue: 'Amrita, Chennai',
    description: 'Solved 15+ challenges with 90%+ accuracy, showcasing strong DSA and real-time problem-solving skills.',
    icon: HiStar,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
  {
    id: 6,
    title: 'Runner-up – HackQuest CTF',
    venue: 'Amrita, Chennai',
    description: 'Completed 10+ Mr. Robot-themed challenges in enumeration, privilege escalation, and reverse engineering.',
    icon: HiStar,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/30',
  },
];

export function EducationAndAchievements() {
  const { ref: eduRef, inView: eduInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: achRef, inView: achInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
      {/* Education */}
      <section id="education" className="section-padding bg-dark-900/30">
        <div className="section-container">
          <SectionHeading
            title="Education"
            subtitle="My academic background and coursework"
          />

          <motion.div
            ref={eduRef}
            variants={containerVariants}
            initial="hidden"
            animate={eduInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-primary-500 via-dark-700 to-transparent md:left-8" />

            {education.map((edu) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className="relative mb-10 last:mb-0 pl-16 md:pl-20"
              >
                {/* Icon dot */}
                <div className="absolute left-3 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary-500/20 border border-primary-500/40 md:left-4">
                  <HiAcademicCap size={16} className="text-primary-400" />
                </div>

                <div className="card card-hover p-6">
                  <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                      <p className="text-primary-400 font-medium">{edu.institution}</p>
                      <p className="text-sm text-dark-400">{edu.location} · {edu.period}</p>
                    </div>
                    <span className="rounded-lg bg-primary-500/10 px-3 py-1.5 text-sm font-semibold text-primary-400 border border-primary-500/30 whitespace-nowrap">
                      {edu.score}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-md bg-dark-800 px-2.5 py-1 text-xs text-dark-300"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section-padding">
        <div className="section-container">
          <SectionHeading
            title="Achievements"
            subtitle="Competitions, hackathons and recognitions"
          />

          <motion.div
            ref={achRef}
            variants={containerVariants}
            initial="hidden"
            animate={achInView ? 'visible' : 'hidden'}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`card flex gap-4 p-5 border ${achievement.border} transition-all duration-300`}
              >
                <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl ${achievement.bg}`}>
                  <achievement.icon size={24} className={achievement.color} />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm leading-snug">{achievement.title}</h3>
                  <p className={`text-xs font-medium mt-0.5 ${achievement.color}`}>{achievement.venue}</p>
                  <p className="text-xs text-dark-400 mt-1.5 leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
