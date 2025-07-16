import { Box, Link } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const sections = ["hero", "about", "skills", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.9, // 60% of section visible
      }
    );

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scroll({
        top: el.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        width: 1,
        height: 70,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(0.3rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        position: "fixed",
        top: 0,
        zIndex: 999,
      }}
    >
      {sections.map((id) => (
        <Link
          key={id}
          underline="none"
          onClick={() => scrollTo(id)}
          className={`nav-item ${active === id ? "nav-item--active" : ""}`}
          sx={{
            cursor: "pointer",
            color: active === id ? "#1976d2" : "black",
            transition: "all 0.3s ease",
          }}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </Link>
      ))}
    </Box>
  );
};

export default Navbar;
