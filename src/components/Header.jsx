import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

import Home from "../pages/Home/Home";
import Destination from "../pages/Destination/Destination";
import Crew from "../pages/Crew/Crew";
import Technology from "../pages/Technology/Technology";

import Logo from "../assets/images/shared/logo.svg";
import OpenIcon from "../assets/images/shared/icon-hamburger.svg";
import CloseIcon from "../assets/images/shared/icon-close.svg";


export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);

    if (!isMenuOpen) {
      setTimeout(() => {
        const closeButton = document.querySelector(".btn-close");
        closeButton?.focus();
      }, 100);
    }
  };

  return (
    <BrowserRouter>
      <header>
        <div className="container">
          <div className="logo">
            <img src={Logo} loading="lazy" alt="Logo da Space Tourism" />
          </div>

          <button className="btn-open" onClick={toggleMenu} aria-label="Abrir menu">
            <img src={OpenIcon} alt="Icon menu hamburger" />
          </button>
          
          <nav className={`nav ${isMenuOpen ? "active" : "" }`}>
            <button className="btn-close" onClick={toggleMenu} aria-label="Fechar menu">
              <img src={CloseIcon} alt="Icon fechar menu" />
            </button>
            <ul className="nav-links">
              <li>
                <NavLink to="/" className={({ isActive }) => (isActive) ? "active" : ""}>
                  <span>00</span>
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/destination" className={({ isActive }) => (isActive) ? "active" : ""}>
                  <span>01</span>
                  <p>Destination</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/crew" className={({ isActive }) => (isActive) ? "active" : ""}>
                  <span>02</span>
                  <p>Crew</p>
                </NavLink>
              </li>
              <li>
                <NavLink  to="/technology" className={({ isActive }) => (isActive) ? "active" : ""}>
                  <span>03</span>
                  <p>Technology</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>


      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  )
}
