import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";
import logo from "../images/CW-logo.png";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          //src="https://png2.cleanpng.com/sh/f72bec30f5ccfe3994a98abfaa158080/L0KzQYm3WcI3N6h8f5H0aYP2gLBuTfxwb5CyeuRqbnSwc7nzj71kcJ10fZ9yboTofsTsTfVifV5pfZ95YYLphb60kCBzaV5ogN54ZT3oibbujPF0e5Z4RdH3LYPkfLa0hwJmbV54gNt5cHnxd368gvFjQGE1TaM6ZHLlSHAAV8IzQGE3TKMAM0e8Roe3WMUxP2Q3RuJ3Zx==/kisspng-logo-brand-chlo-chloe-intense-eau-de-parfum-spra-chloe-eyeglasses-on-sale-free-shipping-5bab800511dbb8.7722802415379660850732.png"
          src={logo}
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
        <div className="loginScreen__body">
          {signIn ? (
            <SignupScreen />
          ) : (
            <>
              <h1>Unlimited films, TV Shows, Movies and Much More.</h1>
              <h2>Starting at $3.99/month. Cancle at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginScreen__input">
                <form action="">
                  <input type="email" placeholder="Email Address" />
                  <button
                    onClick={() => setSignIn(true)}
                    className="loginScreen__getStarted"
                  >
                    START YOUR FREE TRIAL
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
