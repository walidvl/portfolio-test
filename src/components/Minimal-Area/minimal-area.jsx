/* eslint-disable @next/next/no-img-element */
import React from "react";
import cardMouseEffect from "../../common/cardMouseEffect";
import { thumparallaxDown } from "../../common/thumparallax";

const MinimalArea = () => {
  React.useEffect(() => {
    cardMouseEffect(document.querySelectorAll(".feat .items"));
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img">
              <img
                className="thumparallax-down"
                src="/img/min-area.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 valign">
          <div className="content pt-0">
  <h4 className="wow color-font">About Me.</h4>
  <p className="wow txt" data-splitting>
    I am a creative designer and full-stack web developer passionate about crafting innovative solutions. I have a track record of transforming complex ideas into compelling, user-friendly digital experiences.
  </p>
  <ul className="feat">
    <li className="wow fadeInUp" data-wow-delay=".2s">
      <h6>
        <span>1</span> My Mission
      </h6>
      <p>
        To create visually stunning and functional designs that engage and inspire users while addressing the unique needs of each client.
      </p>
    </li>
    <li className="wow fadeInUp" data-wow-delay=".4s">
      <h6>
        <span>2</span> My Goals
      </h6>
      <p>
        To continuously improve my skills and knowledge, deliver high-quality work, and contribute to projects that have a positive impact.
      </p>
    </li>
    <li className="wow fadeInUp" data-wow-delay=".6s">
      <h6>
        <span>3</span> Why Me?
      </h6>
      <p>
        I bring a unique combination of creative and technical expertise, ensuring projects are both aesthetically pleasing and technically sound. My dedication to quality and attention to detail sets me apart.
      </p>
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
