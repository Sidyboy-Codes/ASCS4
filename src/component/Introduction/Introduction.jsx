import React, { useState } from "react";
import "./Introduction.css";

// assets
import tempAvatar from "../../assets/Temp-avatar.jpg";
import tempVidImg from "../../assets/VideoImg.jpg";

//libs
import { RiPlayCircleFill } from "react-icons/ri";
import ModalVideo from "react-modal-video";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// things to do
// dynamic link for youtube video
// dynamic guest with img

const Introduction = () => {
  const [isOpen, setOpen] = useState(false);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 560 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 560, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section id="introduction">
      <div className="intro__video">
        <div className="intro__video__text">
          <h1>
            Celebrating our games!
            <br />
            giving back to our <br /> communities!
          </h1>
          <span>
            All-Star Charity Shootout(ASCS) 2023 <br /> Let the game begin!
          </span>
        </div>

        <div
          className="intro__video__sec"
          style={{
            backgroundImage: `url(${tempVidImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          onClick={() => setOpen(!isOpen)}
        >
          <RiPlayCircleFill size="20%" />
          <ModalVideo channel="youtube" isOpen={isOpen} videoId="xoBE5KyZFb8" onClose={() => setOpen(false)} autoplay />
        </div>
      </div>

      <div className="intro__guest">
        <Carousel responsive={responsive}>
          <div className="intro__guest__card">
            <img src={tempAvatar} alt="guest img" />
            <div className="intro__guest__card__text">
              <h2>
                Event Guest
              </h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, hic.</p>
            </div>
          </div>

          <div className="intro__guest__card">
            <img src={tempAvatar} alt="guest img" />
            <div className="intro__guest__card__text">
              <h2>
                Event Host
              </h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, hic. ur adipisicing elit. Atque, hic. ur adipisicing elit. Atque, hic.</p>
            </div>
          </div>

          <div className="intro__guest__card">
            <img src={tempAvatar} alt="guest img" />
            <div className="intro__guest__card__text">
              <h2>
                Event Host
              </h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, hic. ur adipisicing elit. Atque, hic. ur adipisicing elit. Atque, hic.</p>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Introduction;
