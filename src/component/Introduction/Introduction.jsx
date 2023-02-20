import React, { useState } from "react";
import '../../component/Common/responsive-modal.css';
import "./Introduction.css";
                                                                                       
// assets
import Host1 from "../../assets/Host1.jpg";
import Host0 from "../../assets/Temp-avatar.jpg";
import tempVidImg from "../../assets/VideoImg.jpg";

//libs
import { FcInfo } from "react-icons/fc";
import { RiPlayCircleFill } from "react-icons/ri";
import ModalVideo from "react-modal-video";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Modal } from "react-responsive-modal";
// import "react-responsive-modal/styles.css";

// things to do
// dynamic link for youtube video
// dynamic guest with img

const Introduction = () => {
  const [isOpen, setOpen] = useState(false);

  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

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

      <div
        style={{
          paddingBottom: "30px",
          position: "relative",
        }}
        className="intro__guest"
      >
        <Carousel containerClass="container" draggable minimumTouchDrag={80} renderDotsOutside showDots responsive={responsive}>
          <div className="intro__guest__card">
            <img src={Host0} alt="guest img" />
            <div className="intro__guest__card__text">
              <h2>Event Host</h2>
              <span>Tychon Carter</span>
              <p onClick={() => setModal1(true)}>
                <FcInfo />
                read about guest
              </p>
            </div>
            <Modal
              open={modal1}
              onClose={() => setModal1(false)}
              center
              classNames={{
                modal: "customModal",
              }}
            >
              <div className="guest__modal">
              <div className="guest__modal-img">
                <img src={Host0} alt="" />
              </div>
              <div className="guest__modal-txt">
              <p>
                Tychon's debut as a public figure stemmed from being crowned as the winner of Big Brother Canada Season 9. As the first black winner
                of the series, he uses his platform to make a positive difference in the world.
              </p>
              <p>
                Tychon's life's work has been dedicated to Community Building, mostly as an Urban Planner, Basketball Coach, and Youth Program
                Director. Through being an Ambassador for Diversity and Inclusion, Mental Health, Education, and Active Living, he believes he can
                help be part of the change he'd like to see in today's world.{" "}
              </p>
              <p>
                Motivational speaking is the vehicle he uses to inspire, empower and advocate for change. Through storytelling, humour and engagement
                he is able to connect with his audience in the aspiration of helping people reach their potential.
              </p>
              </div>
              </div>
            </Modal>
          </div>

          <div className="intro__guest__card">
            <img src={Host1} alt="guest img" />
            <div className="intro__guest__card__text">
              <h2>Event Host</h2>
              <span>Akil Augustine</span>
              <p onClick={() => setModal2(true)}>
                <FcInfo />
                read about guest
              </p>
            </div>
            <Modal
              open={modal2}
              onClose={() => setModal2(false)}
              center
              classNames={{
                modal: "customModal",
              }}
            >
              <div className="guest__modal">
              <div className="guest__modal-img">
                <img src={Host1} alt="" />
              </div>
              <div className="guest__modal-txt">
              <p>Akil Augustine has been reporting on the Toronto Raptors for over a decade with NBATVCanada and Raptors.com and has been a member of the Raptors 905 broadcast team for the last 3 seasons. Raised in Toronto and a graduate of Seneca College’s Broadcast journalism program, Akil has stayed involved in the game of basketball at all levels in the city and continues to volunteer his services with the cities youth through initiatives like Northern Kings AAU and the not for profit Amadeuz.</p>
              </div>
              </div>
            </Modal>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Introduction;
