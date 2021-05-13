import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import setCZ from "./language/CZ";
import setENG from "./language/ENG";
import { makeStyles } from "@material-ui/core/styles";
import Particles from "react-particles-js";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(() => ({
  contentDiv: {
    overflow: "hidden",
    backgroundColor: "#1b1b1b",
    position: "relative",
  },
  allparticles: {
    width: "100%",
    position: "absolute",
    height: "100%",
  },
  dividers: {
    background: "#f8efd4",
    height: "4px",
    marginTop: "2rem",
  },
}));

const App = () => {
  const classes = useStyles();
  const [language, setLanguage] = useState({
    czech: true,
  });
  const [input, setInput] = useState(setCZ());
  console.log(input);

  const toggleLang = () => {
    setLanguage((prevState) => ({
      ...prevState,
      czech: !prevState.czech,
    }));
    if (!language.czech === true) {
      setInput(setENG());
    } else {
      setInput(setCZ());
    }
  };
  useEffect(() => {
    toggleLang();
    console.log(language);
  }, []);

  return (
    <div className="App">
      <Home language={input.home} toggle={toggleLang} />
      <div className={classes.contentDiv}>
        <Particles
          className={classes.allparticles}
          params={{
            particles: {
              number: {
                value: 8,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              opacity: {
                value: 0.4,
                random: false,
                anim: {
                  enable: false,
                },
              },
              size: {
                value: 4,
                random: true,
                anim: {
                  enable: false,
                },
              },
              line_linked: { enable: false },
              move: {
                enable: true,
                speed: 2,
                direction: "bottom",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: false,
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
                onclick: {
                  enable: "true",
                  mode: "bubble",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  size: 15,
                  duration: 4,
                  opacity: 0.4,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
          }}
        />
        <About language={input.about} />
        <Divider className={classes.dividers} />

        <Skills language={input.skills} />
        <Divider className={classes.dividers} />

        <Projects language={input.projects} />
        <Divider className={classes.dividers} />

        <Contact language={input.contacts} />
        <Divider className={classes.dividers} />

        <Footer language={input.footer} />
      </div>
    </div>
  );
};

export default App;
