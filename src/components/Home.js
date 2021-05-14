import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Particles from "react-particles-js";

const useStyles = makeStyles(() => ({
  homeWrapper: { height: "100vh", minHeight: "500px", width: "100%" },
  contentWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "inherit",
    backgroundImage: "linear-gradient(black 80%, #1b1b1b)",
  },
  contentText: {
    color: "white",
    backgroundColor: "transparent",
    display: "grid",
    gridTemplateColumns: "1fr 2fr 1fr",
    gridTemplateRows: "1fr 3fr 1fr",
    gridTemplateAreas: `
    "head head head"
    "greet name ."
    "foot foot foot"
    `,
    "@media (max-width:760px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  head: {
    gridArea: "head",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  greet: {
    gridArea: "greet",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
    paddingTop: "1.3rem",
    textAlign: "center",
    marginRight: "-2rem",
    "@media (max-width:760px)": {
      justifyContent: "center",
      marginRight: "0",
      paddingTop: "0",
    },
  },
  name: {
    gridArea: "name",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  foot: {
    gridArea: "foot",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  particlesHoldder: { width: "100%", height: "100vh", position: "absolute" },
  particles: { height: "100%" },
  alert: { color: "#f8efd4", opacity: 0.5, fontFamily: "JetBrains Mono" },
}));

const Home = (props) => {
  const classes = useStyles();
  const input = { ...props.language.home };

  return (
    <div className={classes.homeWrapper} id="home">
      <Header language={props.language.nav} toggle={props.toggle} />
      <div className={classes.contentWrapper}>
        <div className={classes.particlesHoldder}>
          <Particles
            className={classes.particles}
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                },
                color: { value: "#fff" },
                size: {
                  value: 8,
                  random: true,
                },
                opacity: {
                  value: 0.8,
                  random: true,
                  anim: {
                    enable: false,
                  },
                },
                move: {
                  speed: 0.65,
                },
                line_linked: {
                  enable: false,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "grab",
                  },
                  onclick: {
                    enable: true,
                    mode: "repulse",
                  },
                },
                modes: {
                  grab: {
                    distance: 250,
                    line_linked: {
                      opacity: 0.6,
                    },
                  },
                  repulse: {
                    distance: 280,
                  },
                },
              },
            }}
          />
        </div>
        <div className={classes.contentText}>
          <div className={classes.head}>
            <Typography className={classes.alert} variant="caption">
              alert("
            </Typography>
            <Typography
              style={{
                fontFamily: "Montserrat",
              }}
              variant="h2"
            >
              {input.greetings}
            </Typography>
            <Typography className={classes.alert} variant="caption">
              ")
            </Typography>
          </div>

          <div className={classes.greet}>
            <Typography variant="h2">{input.greetings2}</Typography>
          </div>

          <div className={classes.name}>
            <Typography variant="h1">{input.name}</Typography>
            <Typography variant="h1">{input.surname}</Typography>
          </div>
          <div className={classes.foot}>
            <Typography
              style={{
                fontFamily: "Montserrat",
                fontWeight: "600",
              }}
              variant="h2"
            >
              {input.frontend}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
