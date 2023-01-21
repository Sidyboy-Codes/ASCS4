import React from "react";
import "./Team.css";

// assets
import player from "../../assets/Temp-player.png";

// libs
import { AiFillYoutube } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// things to do
// get dynamic player info
// dynamic youtube link and way to handle all different youtube link

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Team = () => {
  return (
    <section id="team">
      <div className="team__container">
        <h1>Team Make A Wish</h1>
        <Carousel responsive={responsive} className="team__carousel">
          {[...Array(10)].map((index) => (
            <div className="player__card" key={index}>
              <div className="player__card__header">
                <img src={player} />
                <span>Bernard James</span>
              </div>
              <div className="player__card__body">
                <p>
                  Height: <span>6ft</span>
                </p>
                <p>
                  Position: <span>Half court</span>
                </p>
                <p>
                  Current Team: <span>Toronto Raptors</span>
                </p>
                <p>
                  Accolades: <span></span>
                </p>
                <span className="yt__link">
                  <AiFillYoutube size={26} />
                  Highlights
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="team__container">
        <h1>Team Kids Help Phone</h1>
        <Carousel responsive={responsive} className="team__carousel">
          {[...Array(10)].map((index) => (
            <div className="player__card" key={index}>
              <div className="player__card__header">
                <img src={player} />
                <span>Bernard James</span>
              </div>
              <div className="player__card__body">
                <p>
                  Height: <span>6ft</span>
                </p>
                <p>
                  Position: <span>Half court</span>
                </p>
                <p>
                  Current Team: <span>Toronto Raptors</span>
                </p>
                <p>
                  Accolades: <span></span>
                </p>
                <span className="yt__link">
                  <AiFillYoutube size={26} />
                  Highlights
                </span>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Team;
