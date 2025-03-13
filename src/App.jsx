import React from "react";
import Navbar from "./Components/NavBar/Navbar";
import Header from "./Components/Header/Header";
import Programs from "./Components/Programs/Programs";
import Title from "./Components/Title/Title";
import About from "./Components/About/About";
import Campus from "./Components/Campus/Campus";
import TESTMONIALS from "./Components/TESTMONIALS/TESTMONIALS";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offers" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="TESTMONIALS" title="What Student Says'" />
        <TESTMONIALS />
        <Title subTitle="Contact Us" title="Get In Touch" />
        <Contact />
        <Footer />
        
      </div>
    </div>
  );
};

export default App;
