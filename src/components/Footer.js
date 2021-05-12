import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { FaGithub } from "react-icons/fa";

const useStyles = makeStyles(() => ({
  footer: {},
}));

const Footer = (props) => {
  const classes = useStyles();
  const input = { ...props.language };

  return (
    <div className={classes.footer}>
      {input.created} | <FaGithub /> Willdooo{" "}
    </div>
  );
};

export default Footer;
