import React from "react";
import "./App.css";
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <HeroSection />
      <Service />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
