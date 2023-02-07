import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer__heading">
        <h1>Get the latest</h1>
        <span>Stay up to date with ASCS news, events, and exclusive opportunities</span>
      </div>

      <form className="footer__form">
        <div className="form__grp">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="e.g. youremail@gmail.com" required />
        </div>
        <div className="form__grp">
          <label htmlFor="postal_code">Postal Code</label>
          <input
            type="text"
            name="postal_code"
            id="postal_code"
            placeholder="e.g. m4m 3s5"
            pattern="^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$"
            required
          />
        </div>

        <div className="form__radio">
          <input type="checkbox" name="consent" id="consent" required />
          <label htmlFor="consent">
            By clicking the box, you are agreeing to receive electronic communications from All-Star Charity Shootout. You are free to unsubscribe at
            any time.
          </label>
        </div>

        <button type="submit">Sign Up</button>
      </form>

      <div className="footer__links">
        <p>
          <a href="">Privacy Policy</a>
          <span>|</span>
          <a href="">Terms & Conditions</a>
          <span>|</span>
          <Link to="/contact">Contact</Link>
        </p>
      </div>

      <div className="footer__socialMedia">
        <a href="">
          <BsFacebook />
        </a>

        <a href="">
          <BsInstagram />
        </a>

        <a href="">
          <BsTwitter />
        </a>

        <a href="">
          <BsYoutube />
        </a>
      </div>

      <div className="footer__copyRight">
        <p>Copyright © 2023. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
