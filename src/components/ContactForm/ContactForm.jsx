import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./ContactForm.module.css";
import { useState } from "react";

export const ContactForm = () => {
  const [input, setInput] = useState(" ");
  const [errMsg, setErrMsg] = useState(" ");

  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const errorMsg = (msg) => {
    setErrMsg(msg);
    setTimeout(() => {
      setErrMsg(" ");
    }, 3000);
  };

  const isFormValid = () => {
    if (!(input.name || input.email || input.subject || input.message)) {
      errorMsg("All Fields Are Required");
      return false;
    } else if (!input.name) {
      errorMsg("Name cannot be empty");
      return false;
    } else if (!input.email) {
      errorMsg("Email cannot be empty");
      return false;
    } else if (!input.subject) {
      errorMsg("please enter subject");
      return false;
    } else if (!input.message) {
      errorMsg("please type message");
    } else {
      alert("Message has been sent succesfully");
    }
  };

  const clickHandler = () => {
    if (!isFormValid()) {
      return false;
    }
  };

  return (
    <>
      <Box className={styles.inputBox}>
        <TextField
          onChange={inputHandler}
          className={styles.inputField}
          id="outlined-password-input"
          label="Name"
          name="name"
          value={input.name}
        />
        <TextField
          onChange={inputHandler}
          className={styles.inputField}
          id="outlined-password-input"
          label="Email"
          name="email"
          value={input.email}
        />
        <TextField
          onChange={inputHandler}
          className={styles.inputField}
          id="outlined-password-input"
          label="Subject"
          name="subject"
          value={input.subject}
        />
        <TextField
          onChange={inputHandler}
          className={styles.inputField}
          id="outlined-password-input"
          label="Message"
          name="message"
          value={input.message}
        />

        <Button
          variant="contained"
          sx={{ bgcolor: "black" }}
          onClick={clickHandler}
        >
          Send Message
        </Button>
        <Typography>{errMsg}</Typography>
      </Box>
    </>
  );
};
