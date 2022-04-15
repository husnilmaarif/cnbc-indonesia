import React from "react";
// import { Link } from "react-router-dom";

// image
import appStore from "../img/download-app-store.png";
import googlePlay from "../img/download-google-play.png";
import facebook from "../img/facebook_icon.png";
import twitter from "../img/twitter.png";
import instagram from "../img/instagram-icon.png";

function Footer() {
  return (
    <div className="container-fluid mt-5" style={{ backgroundColor: "#295d97" }}>
      <footer className="container p-5">
        <div style={{ display: "inline-block", color: "white" }}>
          Download aplikasi CNBC Indonesia
          <img src={appStore} alt="App Store" width={100} className="shadow ms-3 me-3" />
          <img src={googlePlay} alt="Google Play" width={100} className="shadow" />
          <div style={{ display: "inline-block", marginLeft: "375px" }}>
            <a href="https://www.facebook.com/CNBCIndonesia/">
              <img src={facebook} alt="Facebook" width={50} className="shadow me-2" />
            </a>
            <a href="https://twitter.com/cnbcindonesia">
              <img src={twitter} alt="Twitter" width={50} className="shadow me-2" />
            </a>
            <a href="https://www.instagram.com/cnbcindonesia/">
              <img src={instagram} alt="Instagram" width={50} className="shadow" />
            </a>
          </div>
          <hr />
        </div>
        <br />
        <div className="info-footer" style={{ display: "inline-block" }}>
          <a href="#"> Tentang Kami </a>
          <span> | </span>
          <a href="#"> Redaksi </a>
          <span> | </span>
          <a href="#"> Pedoman Media Siber </a>
          <span> | </span>
          <a href="#"> Karir </a>
          <span> | </span>
          <a href="#"> Disclaimer </a>
          <span> | </span>
        </div>
        <br />
        <br />
        <p style={{ color: "white" }}>&copy;2022 CNBC Indonesia, A Transmedia Company</p>
      </footer>
    </div>
  );
}

export default Footer;
