import { Box, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";

const HtmlTagLayout = ({ children, title }) => {
  return (
    <Box>
      <Typography variant="body1" sx={{color : 'primary.main' , fontSize : 20}}> &lt;{title}&gt;</Typography>
      <Typography variant="body1" sx={{pl : 3 , fontSize : 18}}>{children}</Typography>
      <Typography variant="body1" sx={{color : 'primary.main' , fontSize : 20}}>&lt;\{title}&gt;</Typography>
    </Box>
  );
};

export default HtmlTagLayout;