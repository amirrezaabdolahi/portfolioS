import { motion } from "framer-motion";

const SlideRight = ({ children, delay = 0, duration = 0.6 }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay, duration, type: "spring" }}
      viewport={{ once: true, amount: 1 }} // once: true = animate only once, amount = how much in view
    >
      {children}
    </motion.div>
  );
};

export default SlideRight;
