import { Box, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import { grey } from "@mui/material/colors";
import MotionModal from "./Modal";
import { TypeAnimation } from "react-type-animation";

// Variants for parent container (for stagger effect)
const container = {
  hidden: { opacity: 0 }, // add this
  show: {
    opacity: 1,
    transition: {
      delay: 3.5, // this now applies to the parent itself
      when: "beforeChildren", // waits before triggering children
      staggerChildren: 0.2,
    },
  },
};

// Variants for each item
const item = {
  hidden: { opacity: 0, x: -50, y: 0 },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AnimatedIntro = () => {
  const handleClick = () => {
    // your click logic
  };

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <motion.div variants={item}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", width: "max-content" }}
            className="text-shadow"
          >
            FrontEnd
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", width: "max-content", mb: 1 }}
            className="gradient-text-color"
          >
            Developer
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography variant="h6" sx={{ mb: 0 }}>
            <TypeAnimation
              sequence={[
                " ",
                4000, // wait 1s
                "Network & technology student ! ",
                1000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
            />
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Typography
            variant="body1"
            sx={{ textTransform: "capitalize", color: grey[400] }}
          >
            hi this Amirreza & its my portfolio website . you can know <br /> my
            Skills in this webapp
          </Typography>
        </motion.div>

        <motion.div variants={item}>
          <Box sx={{ mt: 3, display: "flex", gap: 1 }}>
            <Chip sx={{ p: 1 }} label="React Js" onClick={handleClick} />
            <Chip sx={{ p: 1 }} label="Next Js" onClick={handleClick} />
            <Chip sx={{ p: 1 }} label="Redux" onClick={handleClick} />
            <Chip sx={{ p: 1 }} label="Django" onClick={handleClick} />
          </Box>
        </motion.div>

        <motion.div variants={item}>
          <MotionModal />
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default AnimatedIntro;
