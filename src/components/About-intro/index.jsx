import React from "react";
import Split from "../Split";


const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who I am ? </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p
                  className="wow txt mb-10 words chars splitting"
                  data-splitting
                >
                I am a creative designer with a passion for transforming ideas into visually captivating experiences. My expertise lies in crafting unique and compelling designs that tell a story and connect with audiences on an emotional level. I believe in the power of creativity to drive innovation and engage people, and I am dedicated to delivering work that resonates and inspires.


                </p>
                <p className="wow txt words chars splitting" data-splitting>
                In addition to my design skills, I am a full-stack web developer with a strong technical background. I have experience in building dynamic, responsive websites and applications that provide seamless user experiences across all devices. By combining my design sensibilities with my technical expertise, I create solutions that are both beautiful and functional, ensuring that every project I work on is of the highest quality.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
