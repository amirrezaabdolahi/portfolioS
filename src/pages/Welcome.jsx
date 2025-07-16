import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedTextPage = () => {
  const [showTexts, setShowTexts] = useState(true);
  const [showBackground, setShowBackground] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTexts(false);
    }, 3500); // Hide all texts after 4 seconds

    const bgTimer = setTimeout(() => {
      setShowBackground(false);
    }, 3500); // Background fades after texts disappear

    return () => {
      clearTimeout(timer);
      clearTimeout(bgTimer);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: showBackground ? "black" : "transparent",
        transition: "background-color 0.4s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        pointerEvents: "none",
        gap: "1.5rem",
        padding: "0 20px",
        textAlign: "center",
      }}
    >
      <AnimatePresence>
        {showTexts && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.3 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1
                key="welcome"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 1.5,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "clamp(1.5rem, 5vw, 4rem)",
                  margin: 0,
                  userSelect: "none",
                }}
              >
                Welcome To My
              </motion.h1>

              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  marginTop: "0.5rem",
                  justifyContent : 'center'
                }}
              >
                <motion.h2
                  key="portfolio"
                  className="gradient-text-color"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.8,
                    duration: 1.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(1.2rem, 4vw, 3rem)",
                    margin: 0,
                    userSelect: "none",
                    textAlign: "center",
                  }}
                >
                  Portfolio
                </motion.h2>

                <motion.h2
                  key="website"
                  className="gradient-text-color-2"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 1,
                    duration: 1.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                  }}
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "clamp(1.2rem, 4vw, 3rem)",
                    margin: 0,
                    userSelect: "none",
                    textAlign: "center",
                  }}
                >
                  Website
                </motion.h2>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTextPage;
