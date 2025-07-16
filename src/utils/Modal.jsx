// MotionModal.js
import { useState } from "react";
import { Modal, Box, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import ContactForm from "./ContactForm";

// Framer Motion variants
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    y: "-50px",
    transition: { duration: 0.2 },
  },
};

const MotionModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        sx={{
          width: "max-content",
          backgroundColor: grey[800],
          color: "white",
          px: 5,
          mt: 2,
          borderRadius: 20,
        }}
        onClick={() => setOpen(true)}
      >
        send mail <Send sx={{ ml: 1, fontSize: 18 }} />
      </Button>

      <AnimatePresence>
        {open && (
          <Modal open={open} onClose={() => setOpen(false)}>
            <motion.div
              className="MuiBackdrop-root"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Box
                  sx={{
                    width: 400,
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    borderRadius: 2,
                    p: 4,
                    outline: "none",
                  }}
                >
                  <ContactForm />
                  <Button
                    onClick={() => setOpen(false)}
                    variant="outlined"
                    sx={{ mt: 3 }}
                  >
                    Close
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};

export default MotionModal;
