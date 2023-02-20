import React from "react";
import TicketBtn from "../Common/TicketBtn";
import "./Hero.css";

// assets
import heroVid from "../../assets/Basketball - 115663.mp4";
import khpLogo from "../../assets/KHP_Extended_EN-01.png";
import mawLogo from "../../assets/Make-A-Wish-logo.svg";

// libs
import { GrCalendar, GrMapLocation } from "react-icons/gr";

// things to do
// dynamic img with dynamic alt text
const Hero = () => {
  return (
    <section id="hero">
      {/* <div className="hero__header">
        <h2>All Star Charity Shootout</h2>
        <span>20 of Canada's Top Stars Battle in</span>
        <h1>Clash of the Charities</h1>
      </div>

      <div className="hero__body">
        <img src={mawLogo} alt="" />
        <span>V/S</span>
        <img src={khpLogo} alt="" />
      </div>

      <div className="hero__footer">
      <div>
          <GrMapLocation />
          <span>Humber College, Toronto</span>
        </div>

        <div>
          <GrCalendar />
          <span>July 9, 2023 at 4:00 pm</span>
        </div>

        <TicketBtn />

      </div> */}
      <div className="hero_video">
        <video loop autoPlay muted id="hero_bgVideo">
          <source src={heroVid} type="video/mp4"/>
        </video>
      </div>
    </section>
  );
};

export default Hero;
