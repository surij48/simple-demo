import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  console.log("Check env file varriables", process.env.NODE_ENV, process.env.REACT_APP_CUSTOM_NAME)
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;