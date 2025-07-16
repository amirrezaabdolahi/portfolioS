import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Container
      sx={{
        maxWidth: { xs: "xs", sm: "sm", lg: "lg" , xl : 'xl' },
      }}
    >
      {children}
    </Container>
  );
};

export default MainLayout;
