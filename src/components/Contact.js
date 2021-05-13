import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  contactWrapper: {
    position: "relative",
    width: "100%",
    textAlign: "center",
    paddingTop: "3rem",
    height: "100vh",
    zIndex: 10,
  },
  contentWrapper: { width: "75" },
}));

const Contact = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <div id="contact" className={classes.contactWrapper}>
      <div>{input.title}</div>
      <Typography variant="h4">wollmada@gmail.com</Typography>
      <a
        href="www.linkedin.com/in/daniel-wollmann
"
        target="_blank"
        rel="noreferrer"
      >
        <Typography variant="h3">LinkedIn</Typography>
      </a>
      <a href="https://github.com/Willdooo" target="_blank" rel="noreferrer">
        <Typography variant="h3">GitHub</Typography>{" "}
      </a>
    </div>
  );
};

export default Contact;
