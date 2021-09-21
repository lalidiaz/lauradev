import styles from './Section.module.scss';
import { motion } from 'framer-motion';

export default function Section({ title, children }) {
  return (
    <div className={styles.content}>
      <motion.h4
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className={styles.title}
      >
        {title}{' '}
      </motion.h4>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className={styles.children}
      >
        {children}
      </motion.p>
    </div>
  );
}
