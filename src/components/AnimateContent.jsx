import { motion } from "framer-motion";

const AnimateContent = ({ children, animate, delay }) => {
  return (
    <motion.div
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
            delay: delay,
          },
        },
        hidden: { opacity: 0, y: 50 },
      }}
      animate={animate}
      initial="hidden"
      transition={{
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      {children}
    </motion.div>
  );
};
export default AnimateContent;
