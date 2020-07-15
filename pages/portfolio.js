import { motion } from 'framer-motion';
import Link from 'next/link';

export default () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-10vh' }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: '10vh' }}
    >
      <div className="container text-center">
        <h1>PORTFOLIO Component</h1>
        <Link href="/">
          <a>Présentation</a>
        </Link>
      </div>
    </motion.div>
  );
};
