import { Grid, Box, Typography, Button, Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImg from "../assets/self-profile-img.jpg"; // adjust your path

const ScrollShow = ({children}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // how much of the section must be visible to trigger
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
    {children}
    </motion.div>
  );
};

export default ScrollShow;
