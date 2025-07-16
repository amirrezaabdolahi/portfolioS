import {
  Box,
  Button,
  Grid,
  IconButton,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import WelcomePage from "./pages/Welcome";
import MainLayout from "./utils/MainLayout";
import profileImg from "./assets/self-profile-img.jpg";
import { grey } from "@mui/material/colors";
import PathDrawing from "./utils/Shapes";
import Navbar from "./components/Navbar";
import AnimatedIntro from "./utils/HeroContent";
import ScrollShow from "./utils/ScrollShow";
import { motion } from "motion/react";
import ScrollLinked from "./utils/Scrolleffect";
import { useState } from "react";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
} from "@mui/icons-material";
import GesturesBox from "./utils/GesturesBox";
import icons from "./utils/icons";
import LoadingThreeDotsPulse from "./pages/Loading";
import { useNavigate } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function App() {
  const [value, setValue] = useState(0);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <ScrollLinked>
        <WelcomePage />
        <Navbar />
        <MainLayout>
          <Grid
            id="hero"
            container
            sx={{ alignItems: "center", mt: { xs: 10, lg: 0 } }}
          >
            <Grid size={{ xs: 12, lg: 6 }} sx={{ backgroundColor: "" }}>
              <AnimatedIntro />
            </Grid>
            <Grid size={{ xs: 12, lg: 6 }} sx={{ textAlign: "center" }}>
              <PathDrawing />
            </Grid>
          </Grid>
          <ScrollShow>
            <Typography id="about" variant="body1" className="section-title">
              About
            </Typography>

            <Grid container sx={{ alignItems: "center" }}>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <Typography variant="h3" className="text-shadow">
                    {" "}
                    Hey Dear
                  </Typography>
                  <Typography variant="h3" className="text-shadow">
                    {" "}
                    I'm
                  </Typography>
                  <Typography
                    variant="h3"
                    className="gradient-text-color"
                    sx={{ fontWeight: "bold" }}
                  >
                    {" "}
                    Amirreza Abdollahi{" "}
                  </Typography>
                  <Typography variant="h6" sx={{ color: grey[400] }}>
                    {/* Hi, I'm Amir 👋 I'm a passionate **React developer** with a strong
              love for building modern web applications. I began my programming
              journey at the age of 16 with Python. From the very beginning, I
              found myself deeply drawn to the world of code. Initially, I
              planned to focus on backend development using Django, but I
              decided to start with frontend first to build a solid foundation.
              I’ve now completed my journey with React and am currently learning
              **Next.js** to level up my frontend skills even more. My goal is
              to become a highly skilled **full-stack developer** by combining
              powerful frontend tools like React and Next.js with a robust
              backend built on Django. Thanks for stopping by! 🚀
              
               */}
                    Hi, I'm Amir 👋 I'm a React developer who started coding at
                    16 with Python and quickly fell in love with it. I began
                    with frontend development using React, and now I'm learning
                    Next.js. My next step is mastering Django for the backend to
                    become a strong full-stack developer. Thanks for visiting!
                    🚀
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      transition: "all 250ms ease",
                      backgroundImage:
                        "linear-gradient(90deg,rgba(0, 135, 207, 1) 0%, rgba(162, 0, 207, 1) 100%)",
                      color: "white",
                      width: 150,
                      ":hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    comment
                  </Button>
                </Box>
              </Grid>
              <Grid size={{ xs: 12, lg: 6 }}>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                    margin: "auto",
                    boxShadow: "0 0 25px -10px white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <motion.img
                    src={profileImg}
                    alt={"profile image"}
                    style={{
                      width: "110%",
                      height: "110%",
                      borderRadius: "12px",
                      cursor: "pointer",
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: 2,
                      filter: "brightness(1.1)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </Box>
              </Grid>
            </Grid>
          </ScrollShow>
          <ScrollShow>
            <Typography variant="h4" className="section-title" id="skills">
              Skills
            </Typography>

            <Box sx={{ width: 1 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant="fullWidth"
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <Tab
                  label="Skills"
                  {...a11yProps(0)}
                  sx={{ width: 250, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
                <Tab
                  label="Projects"
                  {...a11yProps(1)}
                  sx={{ width: 250, backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                />
              </Tabs>

              <TabPanel value={value} index={0}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                  }}
                >
                  {icons.map((icon, index) => (
                    <GesturesBox
                      name={icon.name}
                      icon={icon.icon}
                      key={icon.id}
                      delay={index * 0.1}
                    />
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box
                  sx={{
                    width: 1,
                    height: 350,
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "rgba(0,0,0,0.2)",
                    backdropFilter: "blur(0.2rem)",
                  }}
                >
                  <LoadingThreeDotsPulse />
                </Box>
              </TabPanel>
            </Box>
          </ScrollShow>

          <ScrollShow>
            <Typography variant="h4" className="section-title" id="contact">
              Contact me
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <a href="https://github.com/amirrezaabdolahi" target="_blank">
                <IconButton size="large">
                  <GitHub />
                </IconButton>
              </a>
              <a
                href="https://www.instagram.com/amireza.abdolahi86/"
                target="_blank"
              >
                <IconButton size="large">
                  <Instagram />
                </IconButton>
              </a>
              <a href="https://facebook.com" target="_blank">
                <IconButton size="large">
                  <Facebook />
                </IconButton>
              </a>
              <a href="https://t.me/@AmirEnzeva" target="_blank">
                <IconButton size="large">
                  <Telegram />
                </IconButton>
              </a>
              <a href="https://linkedin.com" target="_blank">
                <IconButton size="large">
                  <LinkedIn />
                </IconButton>
              </a>
            </Box>
          </ScrollShow>
        </MainLayout>
      </ScrollLinked>
    </>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default App;
