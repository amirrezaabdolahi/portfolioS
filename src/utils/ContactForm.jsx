import React, { useRef } from "react";
import emailjs from "emailjs-com";
import {
  Box,
  Button,
  TextField,
  Typography,
  Snackbar,
  Alert,
  Paper,
} from "@mui/material";

const ContactForm = () => {
  const form = useRef();
  const [snackbar, setSnackbar] = React.useState({
    open: false,
    success: true,
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_51qjyjk",
        "template_e5kgtyn",
        form.current,
        "yLbj8eNvnai9ouMbk"
      )
      .then(
        () => {
          setSnackbar({ open: true, success: true });
          form.current.reset();
        },
        () => {
          setSnackbar({ open: true, success: false });
        }
      );
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        p: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Contact Us
      </Typography>

      <Box
        component="form"
        ref={form}
        onSubmit={sendEmail}
        noValidate
        autoComplete="off"
      >
        <TextField
          name="user_name"
          label="Your Name"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          name="user_email"
          label="Your Email"
          type="email"
          fullWidth
          required
          margin="normal"
        />
        <TextField
          name="message"
          label="Message"
          multiline
          rows={4}
          fullWidth
          required
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
        >
          Send
        </Button>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {snackbar.success ? "Message sent!" : "Failed to send message."}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default ContactForm;
