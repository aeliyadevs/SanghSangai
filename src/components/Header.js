import { useEffect, useState } from "react";
import "../css/Header.css";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menuOpen = () => {
    var nav = document.getElementById("navigation");
    nav.classList.add("active");
  };

  const menuClose = () => {
    var nav = document.getElementById("navigation");
    nav.classList.remove("active");
  };

  const scrollToBackground = () => {
    const backgroundSection = document.getElementById("background");
    if (backgroundSection) {
      backgroundSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToCP = () => {
    const CPSection = document.getElementById("communityPartner");
    if (CPSection) {
      CPSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProject = () => {
    const ProjectSection = document.getElementById("project");
    if (ProjectSection) {
      ProjectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTeam = () => {
    const TeamSection = document.getElementById("team");
    if (TeamSection) {
      TeamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="SanghSangai logo" />
      </div>
      <nav id="navigation">
        <ul>
          <li className="active">
            <a href="#background" onClick={scrollToBackground}>
              Background
            </a>
          </li>

          <li>
            <a href="#communityPartner" onClick={scrollToCP}>
              Community Partner
            </a>
          </li>
          <li>
            <a href="#project" onClick={scrollToProject}>
              Project
            </a>
          </li>
          <li>
            <a href="#team" onClick={scrollToTeam}>
              Team
            </a>
          </li>
          <i
            id="menu-close"
            className="fa-solid fa-xmark"
            onClick={menuClose}
          ></i>
        </ul>
      </nav>
      <div className="menu-icon">
        <i id="menu-toggle" className="fa-solid fa-bars" onClick={menuOpen}></i>
      </div>
    </header>
  );
};

export default Header;
