import React from "react";
import About from "../component/About/About";
import Article from "../component/Articles/Article";
import Charity from "../component/Charity/Charity";
import Footer from "../component/Footer/Footer";
import Hero from "../component/Hero/Hero";
import Introduction from "../component/Introduction/Introduction";
import Sponsor from "../component/Sponsor/Sponsor";
import Team from "../component/Team/Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Sponsor />
      <Introduction/>
      <About />
      <Charity />
      <Team />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
