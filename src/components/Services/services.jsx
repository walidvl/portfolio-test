import React from "react";


const Services = ({ style, lines }) => {
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
                I craft digital solutions that blend design and functionality.
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box md-mb50">
              <span className="icon pe-7s-paint-bucket"></span>
              <h6>Graphic Design</h6>
              <p>
                Creating visually stunning graphics that enhance brand identity
                and captivate audiences.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box md-mb50">
              <span className="icon pe-7s-phone"></span>
              <h6>Web Design</h6>
              <p>
                Designing intuitive and responsive interfaces for seamless user
                experiences on both web and mobile platforms.
              </p>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInLeft" data-wow-delay=".5s">
            <div className="item-box md-mb50">
              <span className="icon pe-7s-display1"></span>
              <h6>Professional Tone</h6>
              <p>
                Maintains a professional and engaging tone to attract potential
                clients.
              </p>
            </div>
          </div>
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Services;
