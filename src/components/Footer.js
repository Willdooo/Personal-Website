import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaGithub } from "react-icons/fa";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() => ({
  footer: {
    padding: "1.5rem 0rem 0.5rem 0rem",
    textAlign: "center",
    zIndex: 100,
  },
}));

const Footer = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <div className={classes.footer}>
      {input.created} |
      <IconButton
        href="https://github.com/Willdooo"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub style={{ color: "#f8efd4" }} />{" "}
      </IconButton>
      Willdooo
    </div>
  );
};

export default Footer;
