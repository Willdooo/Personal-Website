import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(() => ({
  navBar: {
    zIndex: 10,
    position: "fixed",
    textAlign: "center",
    width: "100%",
    backgroundColor: "gray",
    left: "0",
    right: "0",
    minHeight: "50px",
    display: "grid",
    gridTemplateColumns: "1fr 8fr 1fr",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:760px)": {
      display: "none",
    },
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    flexGrow: "1",
    "@media (max-width:760px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  buttonwrap: { flexGrow: "1" },
  button: { borderRadius: "80%", flexGrow: "1" },
  smallnavBar: {
    display: "none",
    "@media (max-width:760px)": {
      display: "block",
      position: "fixed",
      right: 0,
    },
  },
  list: {
    width: 150,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const input = { ...props.language };
  const setButtonValue = () => {
    if (input.home === "DOMŮ") {
      return "ENG";
    } else {
      return "CZ";
    }
  };
  //
  //Material UI, thank you
  //
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className={classes.ul}>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#home">
            <Typography variant="h6">{input.home}</Typography>
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#about">
            <Typography variant="h6">{input.about}</Typography>{" "}
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#skills">
            <Typography variant="h6">{input.skills}</Typography>
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#projects">
            <Typography variant="h6">{input.projects}</Typography>
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#contact">
            <Typography variant="h6">{input.contact}</Typography>
          </a>
        </li>
      </ul>
      <div className={classes.buttonwrap} style={{ paddingTop: "2rem" }}>
        <Button className={classes.button} onClick={props.toggle}>
          {setButtonValue()}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div className={classes.navBar}>
        <div></div>
        <ul className={classes.ul}>
          <li>
            <a href="#home">
              <Typography variant="h6">{input.home}</Typography>
            </a>
          </li>
          <li>
            <a href="#about">
              <Typography variant="h6">{input.about}</Typography>{" "}
            </a>
          </li>
          <li>
            <a href="#skills">
              <Typography variant="h6">{input.skills}</Typography>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Typography variant="h6">{input.projects}</Typography>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Typography variant="h6">{input.contact}</Typography>
            </a>
          </li>
        </ul>
        <div className={classes.buttonwrap}>
          <Button className={classes.button} onClick={props.toggle}>
            {setButtonValue()}
          </Button>
        </div>
      </div>
      <div className={classes.smallnavBar}>
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton onClick={toggleDrawer(anchor, true)}>
                <MenuIcon style={{ fontSize: "3rem" }} />
              </IconButton>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;
