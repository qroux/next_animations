import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'projet1',
    url: 'https://picsum.photos/200/300',
  },
  {
    title: 'projet2',
    url: 'https://picsum.photos/200/300',
  },
  {
    title: 'projet3',
    url: 'https://picsum.photos/200/300',
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: '-100vh',
    transition: {
      duration: 2,
      ease: easing,
    },
  },
  animate: {
    y: -100,
    transition: {
      duration: 5,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

export default () => {
  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <motion.div
        initial={{ opacity: 0, x: '-10vh' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
      >
        <div className="container text-center">
          <h1>PORTFOLIO</h1>
          <div className="projects-container">
            {projects.map((project) => (
              <motion.div
                variants={fadeInUp}
                key={project.title}
                className="project"
              >
                <h3>{project.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
