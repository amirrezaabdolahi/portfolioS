import * as motion from "motion/react-client";

export default function GesturesBox({ name, icon, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay }}
      style={{
        minWidth: 150,
        minHeight: 150,
        backgroundColor: "rgba(0 , 0, 0, 0.2)",
        backdropFilter: "blur(0.2rem)",
        borderRadius: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        padding: 10,
      }}
    >
      {icon}
      {name}
    </motion.div>
  );
}

/**
 * ==============   Styles   ================
 */
