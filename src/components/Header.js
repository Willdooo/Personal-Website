import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  navBar: {
    position: "fixed",
    textAlign: "center",
    width: "100%",
    backgroundColor: "gray",
    left: "0",
    right: "0",
    minHeight: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ul: { display: "flex", justifyContent: "center" },
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.navBar}>
      <ul className={classes.ul}>
        <li>
          <a href="#home">
            <Typography variant="h6">{props.language.home}</Typography>
          </a>
        </li>
        <li>
          <a href="#about">
            <Typography variant="h6">About</Typography>{" "}
          </a>
        </li>
        <li>
          <a href="#skills">
            <Typography variant="h6">Skills</Typography>
          </a>
        </li>
        <li>
          <a href="#projects">
            <Typography variant="h6">Projects</Typography>
          </a>
        </li>
        <li>
          <a href="#contact">
            <Typography variant="h6">Contact</Typography>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
