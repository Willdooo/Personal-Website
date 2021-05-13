import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";

const useStyles = makeStyles(() => ({
  navBar: {
    fontFamily: "Raleway",
    backgroundOpacity: "flex",
    zIndex: 100,
    position: "fixed",
    textAlign: "center",
    width: "100%",
    left: "0",
    right: "0",
    minHeight: "50px",
    display: "grid",
    gridTemplateColumns: "1fr 8fr 1fr",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:1110px)": {
      display: "none",
    },
  },
  ul: {
    display: "flex",
    justifyContent: "center",
    flexGrow: "1",
    fontWeight: 900,
    "@media (max-width:1110px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  buttonwrap: {},
  button: {
    borderRadius: "0",
    color: "white",
    fontSize: "1.7rem",
    "&:hover": {},
  },
  smallnavBar: {
    display: "none",
    "@media (max-width:1110px)": {
      display: "block",
      position: "fixed",
      right: 0,
      zIndex: 10,
    },
  },
  list: {
    color: "white",
    fontFamily: "Raleway",
    fontSize: "2rem",
    backgroundColor: "#353535",
    width: 250,
    height: "100%",
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

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleChangeBG = (scrollPosition) => {
    if (scrollPosition > 899) {
      return "rgb(102, 102, 102)";
    } else {
      return "transparent";
    }
  };
  const handleChangeColor = (scrollPosition) => {
    if (scrollPosition > 200 && scrollPosition < 900) {
      return "transparent";
    } else {
      return "white";
    }
  };
  const handleDisplay = (scrollPosition) => {
    if (scrollPosition > 200 && scrollPosition < 900) {
      return "none";
    } else {
      return "inline-flex";
    }
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
            <Typography
              variant="h6
            "
              className="hvr-underline-from-center"
            >
              {input.home}
            </Typography>
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#about">
            <Typography
              variant="h6
            "
              className="hvr-underline-from-center"
            >
              {input.about}
            </Typography>{" "}
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#skills">
            <Typography
              variant="h6
            "
              className="hvr-underline-from-center"
            >
              {input.skills}
            </Typography>
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#projects">
            <Typography
              variant="h6
            "
              className="hvr-underline-from-center"
            >
              {input.projects}
            </Typography>
          </a>
        </li>
        <li style={{ paddingTop: "2rem" }}>
          <a href="#contact">
            <Typography
              variant="h6
            "
              className="hvr-underline-from-center"
            >
              {input.contact}
            </Typography>
          </a>
        </li>
      </ul>
      <div
        className={classes.buttonwrap}
        style={{
          paddingTop: "1rem",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Button className={classes.button} onClick={props.toggle}>
          {setButtonValue()}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={classes.navBar}
        style={{
          backgroundColor: handleChangeBG(scrollPosition),
          color: handleChangeColor(scrollPosition),
        }}
      >
        <div></div>
        <ul className={classes.ul}>
          <li>
            <a href="#home">
              <Typography
                variant="h6
              "
                className="hvr-underline-from-center"
              >
                {input.home}
              </Typography>
            </a>
          </li>
          <li>
            <a href="#about">
              <Typography
                variant="h6
              "
                className="hvr-underline-from-center"
              >
                {input.about}
              </Typography>{" "}
            </a>
          </li>
          <li>
            <a href="#skills">
              <Typography
                variant="h6
              "
                className="hvr-underline-from-center"
              >
                {input.skills}
              </Typography>
            </a>
          </li>
          <li>
            <a href="#projects">
              <Typography
                variant="h6
              "
                className="hvr-underline-from-center"
              >
                {input.projects}
              </Typography>
            </a>
          </li>
          <li>
            <a href="#contact">
              <Typography
                variant="h6
              "
                className="hvr-underline-from-center"
              >
                {input.contact}
              </Typography>
            </a>
          </li>
        </ul>
        <div
          className={classes.buttonwrap}
          style={{
            display: handleDisplay(scrollPosition),
            justifyContent: "center",
          }}
        >
          <Button className={classes.button} onClick={props.toggle}>
            {setButtonValue()}
          </Button>
        </div>
      </div>
      <div className={classes.smallnavBar}>
        <div>
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                style={{
                  color: "white",
                  boxShadow: "rgba(255, 227, 0, 0.74) 0px 5px 25px",
                }}
                onClick={toggleDrawer(anchor, true)}
              >
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
