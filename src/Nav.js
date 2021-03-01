import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import logo from "./images/CW-logo.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => history.push("/")}
          className="nav__logo"
          //src="https://png2.cleanpng.com/sh/f72bec30f5ccfe3994a98abfaa158080/L0KzQYm3WcI3N6h8f5H0aYP2gLBuTfxwb5CyeuRqbnSwc7nzj71kcJ10fZ9yboTofsTsTfVifV5pfZ95YYLphb60kCBzaV5ogN54ZT3oibbujPF0e5Z4RdH3LYPkfLa0hwJmbV54gNt5cHnxd368gvFjQGE1TaM6ZHLlSHAAV8IzQGE3TKMAM0e8Roe3WMUxP2Q3RuJ3Zx==/kisspng-logo-brand-chlo-chloe-intense-eau-de-parfum-spra-chloe-eyeglasses-on-sale-free-shipping-5bab800511dbb8.7722802415379660850732.png"
          //src="https://images.pexels.com/photos/47367/full-moon-moon-bright-sky-47367.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          src={logo}
          alt=""
        />
        <img
          className="nav__avatar"
          //src="../images_k/red-heart-transparent-background/red-heart-transparent-background-7.png"
          //src="https://toppng.com/uploads/preview/how-to-set-use-red-white-heart-icon-png-love-heart-11563411236sl0ynpmn4w.png"
          //src="https://p7.hiclipart.com/preview/16/73/143/heart-valentine-s-day-clip-art-heart.jpg"
          src="https://images.pexels.com/photos/4588001/pexels-photo-4588001.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          onClick={() => history.push("/profile")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
