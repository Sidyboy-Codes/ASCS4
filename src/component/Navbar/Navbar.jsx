import React, { useState } from "react";
import TicketBtn from "../Common/TicketBtn";
import "./Navbar.css";

// Assets
import logo from "../../assets/ASCS-logo.svg";

// lib
import Hamburger from "hamburger-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { Link } from "react-router-dom";

// ****** Things left. **************

// ticket page link, Social media links

const Menu = (props) => {
  return (
    <ul className="navbar__links">
      <li onClick={() => props.setOpen(false)}>
        <a href="./#about">About</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a href="/#charity">Charities</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a href="/#team">Teams</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a href="/#article">Articles</a>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <Link to="/contact">Contact</Link>
      </li>
      <li onClick={() => props.setOpen(false)}>
        <a href="/">Shop</a>
      </li>
    </ul>
  );
};

const Socials = (props) => {
  return (
    <ul className="navbar__socials">
      <li>
        <a onClick={() => props.setOpen(false)}>
          <BsFacebook />
        </a>
      </li>
      <li>
        <a onClick={() => props.setOpen(false)}>
          <BsInstagram />
        </a>
      </li>
      <li>
        <a onClick={() => props.setOpen(false)}>
          <BsTwitter />
        </a>
      </li>
    </ul>
  );
};

const Navbar = () => {
  // handling opening closing of hamburger menu
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <nav id="navbar">
        {/* Small screen navbar */}
        <div className="sm__navbar">
        <a href="/" className="logo__link">
            <img src={logo} alt="all star charity shootout logo" />
          </a>
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
        </div>

        {/* large screen navbar */}
        <div className="lg__navbar">
          <a href="/" className="logo__link">
            <img src={logo} alt="all star charity shootout logo" />
          </a>
          <div className="lg__navbar__menu">
            <Menu />
            <div className="menu__right">
              <TicketBtn />
              <Socials />
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="sm__navbar__menu">
          <Menu setOpen={setOpen} />
          <TicketBtn />
          <Socials setOpen={setOpen} />
        </div>
      )}
    </>
  );
};

export default Navbar;
