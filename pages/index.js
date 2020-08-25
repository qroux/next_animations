import { motion } from "framer-motion";
import Link from "next/link";

const easing = [0.6, -0.05, 0.01, 0.99];

const subTitles = {
  initial: { x: -100 },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  exit: { x: -100 },
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
    <motion.div
      initial={{ opacity: 0, x: "-5vh" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0, x: "-5vh" }}
    >
      <motion.div variants={stagger} className="container d-flex">
        <div className="">
          {/* <img src="/images/portrait-2.jpg" className="pres-photo" /> */}
          <div className="stripe"></div>
        </div>
        <div className="text-container">
          <h1>
            Quentin Roux - <s>Juriste</s> <strong> Développeur</strong>
          </h1>
          <hr />
          <motion.div variants={subTitles}>
            <h5>
              <strong>Pourquoi</strong>
            </h5>
          </motion.div>

          <h5 className="pb-4">
            Juriste de formation, je suis finalement tombé dans la programmation
            en cherchant à coder des smartcontracts sur blockchain ethereum.
          </h5>

          <h5 className="">
            <strong>Comment</strong>
          </h5>
          <h5 className="pb-4">
            Après une période de découverte en autodidacte, j'ai fini par suivre
            une formation de développeur Fullstack au Wagon Marseille (batch
            #212).
          </h5>

          <div className="border pt-2 px-2">
            <h5 className="">
              <strong>Maintenant</strong>
            </h5>
            <h5 className="pb-1">
              Je développe en langage{" "}
              <strong>Javascript et Ruby ( Backend/Frontend )</strong>.
            </h5>
          </div>

          <div className="text-right py-4 pr-1">
            <Link href="/portfolio">
              <a className="">Suite</a>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
