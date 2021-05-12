import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import setCZ from "./language/CZ";
import setENG from "./language/ENG";

const App = () => {
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
  useState(() => {
    toggleLang();
    console.log(language);
  }, []);

  return (
    <div className="App">
      <Home language={input.home} toggle={toggleLang} />
      <About language={input.about} />
      <Skills language={input.skills} />
      <Projects language={input.projects} />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
