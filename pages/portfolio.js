import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const projectsJS = [
  {
    title: "Cursed Twitch",
    lang: "React | Redux",
    logo: "/images/logo/react-redux.png",
    link: "https://react-stream-client.herokuapp.com/",
    src: "/images/portfolio/js/cursed-twitch.png",
  },
  {
    title: "Kickstarter",
    lang: "React | Web3",
    logo: "/images/logo/eth-logo.png",
    link: "https://kickstarter-copy.herokuapp.com/",
    src: "/images/portfolio/js/kickstarter.png",
  },
  {
    title: "Cabinet",
    lang: "Vue | Nuxt",
    logo: "/images/logo/vue-logo.png",
    link: "https://dr-roux-gilbert.chirurgiens-dentistes.fr/",
    src: "/images/portfolio/js/nuxt-cabinet.png",
  },
];

const projectsRuby = [
  {
    title: "Notice-droit.fr",
    lang: "Ruby",
    logo: "/images/portfolio/ruby/ruby-logo.png",
    link: "https://notice-droit.fr/",
    src: "/images/portfolio/ruby/notice.png",
  },
  {
    title: "OpenData Paris",
    lang: "Ruby",
    logo: "/images/portfolio/ruby/ruby-logo.png",
    link: "https://trustpair-test.herokuapp.com/",
    src: "/images/portfolio/ruby/trust.png",
  },
  {
    title: "Cabinet",
    lang: "Sinatra",
    logo: "/images/portfolio/ruby/sinatra-logo.png",
    link: "https://skello-sinatra.herokuapp.com/",
    src: "/images/portfolio/ruby/skello.png",
  },
];

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const renderJs = (projects) => {
  return (
    <motion.div variants={stagger} className="project-container">
      {projects.map((project) => (
        <motion.div
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
          // whileTap={{ scale: 0.95 }}
          className="card project flex-md-column"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            key={project.title}
            src={project.src}
            width={"100%"}
          />
          <div className="project-info text-center border-top py-2">
            <img src={project.logo} />

            <a href={project.link} target="blank" className="text-dark">
              <FontAwesomeIcon icon={faGithub} />
            </a>

            {/* <h4 className="text-dark font-weight-bold">{project.lang}</h4> */}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default () => (
  <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
    <div className="container">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="title"
      >
        <h1>PORTFOLIO</h1>
        <hr />
      </motion.div>
      <h2>Javascript</h2>
      {renderJs(projectsJS)}
      <h2>Ruby</h2>
      {renderJs(projectsRuby)}
    </div>
  </motion.div>
);

// const easing = [0.6, -0.05, 0.01, 0.99];

// const test = {
//   show: { y: '-100vh' },
//   animate: {
//     y: -100,
//     transition: {
//       duration: 0.5,
//       ease: easing,
//     },
//   },
//   exit: { y: '-100vh' },
// };

// const stagger = {
//   animate: {
//     transition: {
//       staggerChildren: 1,
//     },
//   },
// };

// export default () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: '-10vh' }}
//       animate={{ opacity: 1, x: 0 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="container text-center">
//         <h1>PORTFOLIO</h1>
//         <div className="projects-container">
//           {projects.map((project) => (
//             <motion.div variants={test} key={project.title} className="project">
//               <h3>{project.title}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// };
