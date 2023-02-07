import React, { useState } from "react";
import './Charity.css';

// assets
import khpLogo from "../../assets/KHP_Extended_EN-01.png";
import mawLogo from "../../assets/Make-A-Wish-logo.svg";

// library 
import ModalVideo from "react-modal-video";

// things to do
// getting dynamic data for para and dynamic youtube link

const Charity = () => {
  // handling youtube video pop-up (2 videos)
    const [isOpen1, setOpen1] = useState(false);
    const [isOpen2, setOpen2] = useState(false);
  return (
    <section id="charity">
      <ul className="charity__container">
        <li className="charity__card">
          <img src={mawLogo} />

          <div className="charity__text">
            <h1>Make-A-Wish Canada</h1>
            <p>
              Make-A-Wish® Canada is thrilled to have been selected as a charity partner for the 2023 All-Star Charity Shootout. This event has made
              such an incredible impact on local charities over the past five years, and we are excited to be a part of it.
            </p>
            <p>
              Make-A-Wish® creates life-changing wishes for children with critical illnesses, and our mission to grant every eligible child across
              Canada their heartfelt wish. Over the past two years, the Covid-19 pandemic has left close to 4,000 wishes waiting, as an average of 60%
              of all wishes involve travel and could not be fulfilled.
            </p>
          </div>

          <button onClick={() => setOpen1(!isOpen1)}>Play video</button>
        </li>
        <ModalVideo channel="youtube" isOpen={isOpen1} videoId="4pl8aIQOxvg" onClose={() => setOpen1(false)} autoplay />

        <li className="charity__card">
          <img src={khpLogo} />
          <div className="charity__text">
            <h1>Kid’s Help Phone</h1>
            <p>
              Young people have been turning to Kids Help Phone for help during their most difficult challenges for more than 30 years now. We are
              Canada’s only 24/7/365 e-mental health service offering free, confidential support to young people in English and French.
            </p>
            <p>
              In fact in 2021, young people reached out to Kids Help Phone over 4.6 million times – an average of 12,300 times every single day. Your
              support of Kids Help Phone through the 2023 All-Star Charity Shootout means we can continue to scale up our supports and maximize access
              to services through the power of technology, data and innovation.
            </p>
          </div>

          <button onClick={() => setOpen2(!isOpen2)}>Play video</button>
        </li>
        <ModalVideo channel="youtube" isOpen={isOpen2} videoId="wftRcjG5EzI" onClose={() => setOpen2(false)} autoplay />
      </ul>
    </section>
  );
};

export default Charity;
