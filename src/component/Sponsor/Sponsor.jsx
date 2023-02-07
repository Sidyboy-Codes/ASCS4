import React from "react";
import './Sponsor.css';

// assets
import temp1Logo from "../../assets/Temp-1-logo.svg";
import temp2Logo from "../../assets/Temp-2-logo.svg";
import temp3Logo from "../../assets/Temp-3-logo.svg";

// libs
import Marquee from "react-fast-marquee";

// things to do
// for loop for sponsor image

const Sponsor = () => {
  return (
    <Marquee className="sponsor" gradient={false}>
      {Array.from({ length: 6 }).map((item, i) => (
        <>
        <img src={temp1Logo} alt="" />
        <img src={temp2Logo} alt="" />
        <img src={temp3Logo} alt="" />
        </>
      ))}
    </Marquee>
  );
};

export default Sponsor;