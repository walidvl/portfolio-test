/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Officeal Address</h6>
                    <p>06110 , Mersb STR , Halle Saale </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>walidnhaila@mail.de</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+49 155 60042182</p>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Get In Touch</h5>
              </div>
              <ul>
              <li>
                  <div className="subscribe">
                    <input type="text" placeholder="Type Your Email" />
                    <a  href="mailto:walidnhaila@mail.de?subject=Subject"> <span className="subs pe-7s-paper-plane"> </span> </a>
                  </div>
                </li>

              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.instagram.com/vlwalid/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/vlwalid/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/vlwalid/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.instagram.com/vlwalid/">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                  © 2024, VL. Made with passion by
                  <Link
                    href=""

                  >
                    <a target="_blank">Walid vl</a>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
