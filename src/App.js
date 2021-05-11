import React, { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import setCZ from "./language/CZ";

const App = () => {
  const [language, setLanguage] = useState({
    czech: true,
  });
  const [input, setInput] = useState(setCZ());

  console.log(input);
  console.log(input.home);
  return (
    <div className="App">
      <Home language={input.home} />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
