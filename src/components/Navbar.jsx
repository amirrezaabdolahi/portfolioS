import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: 1,
        height: 70,
        backgroundColor: "rgba(0 , 0, 0,0.1)",
        backdropFilter: "blur(0.3rem)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        position : "fixed",
        top : 0,
        zIndex : 999
      }}
    >
      <Typography
        variant="body1"
        sx={{
          ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
          transition: "all 250ms ease",
          cursor: "pointer",
        }}
      >
        About
      </Typography>
      <Typography
        variant="body1"
        sx={{
          ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
          transition: "all 250ms ease",
          cursor: "pointer",
        }}
      >
        Skills
      </Typography>
      <Typography
        variant="body1"
        sx={{
          ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
          transition: "all 250ms ease",
          cursor: "pointer",
        }}
      >
        Projects
      </Typography>
      <Typography
        variant="body1"
        sx={{
          ":hover": { color: grey[400], borderBottom: "1px solid yellow" },
          transition: "all 250ms ease",
          cursor: "pointer",
        }}
      >
        Contact
      </Typography>
    </Box>
  );
};

export default Navbar;
