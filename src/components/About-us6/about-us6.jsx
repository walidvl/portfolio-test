import React from "react";
import Link from "next/link";

const AboutUs6 = () => {
  return (
    <section id="about" className="about-ar section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="img">
              <div
                className="bg-img bg-fixed hero-bg"
                style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
              ></div>
              <div className="exp valign text-center">
                <div className="full-width">
                  <h2
                    className="bg-img bg-fixed"
                    style={{ backgroundImage: "url(/img/arch/hero.jpg)" }}
                  >
                    3
                  </h2>
                  <p>Years Of Experience</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8  wow fadeInLeft">
            <div>
              <iframe
                src="https://calendly.com/walidnhaila55/book-your-free-website-consultation"
width="100%"
                height="750"
                frameBorder="0"
              />

              <Link
                href={`https://calendly.com/walidnhaila55/book-your-free-website-consultation`}
              >
                <a className="butn bord mt-30">
                  <span> Free Consultation</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs6;
