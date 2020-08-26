import { motion } from "framer-motion";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-5vh" }}
      animate={{ opacity: 1, x: "0" }}
      exit={{ opacity: 0, x: "-5vh" }}
    >
      <div className="container contacts-padding text-center mb-5">
        <div>
          <h1>CONTACTS</h1>
          <hr />
          <div className="contacts-container">
            <div className="contact">
              <FontAwesomeIcon icon={faGithub} />
              <br />
              <h4 className="pt-2">
                <a href="https://github.com/qroux" target="blank">
                  github.com/qroux
                </a>
              </h4>
            </div>
            <div className="contact">
              <FontAwesomeIcon icon={faPaperPlane} />
              <br />
              <h4 className="pt-2">
                <a href="https://github.com/qroux" target="blank">
                  quentin.roux@hotmail.fr
                </a>
              </h4>
            </div>
            <div className="contact">
              <FontAwesomeIcon icon={faLinkedin} />
              <br />
              <h4 className="pt-2">
                <a
                  href="https://fr.linkedin.com/in/quentin-roux-445164182"
                  target="blank"
                >
                  quentin-roux-445164182
                </a>
              </h4>
            </div>
          </div>
        </div>

        {/* <Link href="/">
          <a>retour</a>
        </Link> */}
      </div>
    </motion.div>
  );
};
