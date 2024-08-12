/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                My Recent Web Design & <br /> Some Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">


          <div className="gallery full-width">
            <div
              className="col-md-6 items graphic lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Landing Page</h6>
                  <p>Ui / Ux creative Web app design</p>
                </div>
                <Link href={``}>
                  <a className="rota">
                    <img src="/img/portfolio/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">

                  <span>
                    <Link href="">Web</Link>
                  </span>
                  <span>
                    <Link href="">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative VSL</h6>

                </div>
                <Link href={``}>
                  <a className="rota">
                    <img src="/img/portfolio/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">

                  <span>
                    <Link href="">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Footer</h6>
                  <p>Ui / Ux creative  app design</p>
                </div>
                <Link href={``}>
                  <a className="rota">
                    <img src="/img/portfolio/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">

                  <span>
                    <Link href="">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web graphic wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Mobile App</h6>
                  <p>Ui / Ux creative mobile app design</p>
                </div>
                <Link href={``}>
                  <a className="rota">
                    <img src="/img/portfolio/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="">Web</Link>
                  </span>

                  <span>
                    <Link href="">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative WEB App</h6>
                  <p>Ui / Ux creative app design</p>
                </div>
                <Link href={``}>
                  <a className="rota">
                    <img src="/img/portfolio/5.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="">App</Link>
                  </span>

                  <span>
                    <Link href="">Creative</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Creative Sign App</h6>
                  <p>Ui / Ux creative  app design</p>
                </div>
                <Link href={``}>
                  <a className="rota">
                    <img src="/img/portfolio/6.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
