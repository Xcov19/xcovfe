import React from 'react';

import '../stylesheets/home.scss';
const Home = () => {

  return (

    <>

      <nav className="navbar navbar-light bg-light static-top">
        <div className="container">
          <a className="navbar-brand" href="home.html">
            <img width="150" src="website/static/images/logo.png" />
          </a>
          <a href="aboutus.html" className="btn">About us</a>
        </div>
      </nav>

      <section id="carousel-section">
        <div className="container my-auto">
          <div className="row my-auto">
            <div className="col-md-4 col-sm-12">
              <div id="text-carousel">
                <h1>Smart Patient Management</h1>
                <h1>HIPPA Compliant Cloud Storage</h1>
                <h1>Extensible Healthcare Infrastructure</h1>
              </div>
              <h1 className="mb-5 heading center-mobile">
                <h5 style={{color: "gray"}} className="mb-5 center-mobile ml11">
                  <span className="small-text text-wrapper">
                    <span className="line line1"></span>
                    Fix <span className="letters" id="fix-one">Healthcare</span>
                  </span>
                </h5>
              </h1>
              <a className="btn btn-outline-primary center-mobile" href="https://bit.ly/38rinqw">
                Schedule A Call Now
              </a>
            </div>
            <div className="col-md-8 col-sm-12">
              <div id="carousel">
                <img src="website/static/images/carousel_1.png" />
                <img src="website/static/images/carousel_2.png" />
                <img src="website/static/images/carousel_3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video-section">
        <div className="container my-auto">
          <div className="row">
            <div className="col-md-6 col-lg-7 col-sm-12">
              <video controls poster="website/static/images/carousel_1.png" style={{width: "100%"}} preload="none">
                <source src="https://xcov-videos.s3-ap-southeast-1.amazonaws.com/landpage_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            </div>

            <div className="col-md-6 col-lg-5 col-sm-12">
              <h1 className="heading white center-mobile">
                A timely response to COVID-19
              </h1>

              <p className="video-text">
                <article style={{color:"white"}}>
                  During times of crises, a performant tool is needed.
                  EMRs (Electronic Medical Records) today are notoriously hard to use and
                  lack effective communication between the different stakeholders of a hospital.
                  We understand. This is why we leverage technology, analytics and a team of passionate
                  individuals to build a tool that will help hospitals navigate this pandemic with ease.
              </article>
              </p>
              <button className="btn btn-outline-primary center-mobile">
                <a style={{color: "white", fontWeight: "bold"}} href="https://bit.ly/38rinqw  ">Get a free demo now</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5 mb-4">
        <h1 className="text-center heading">The Problem</h1>
        <h3 className="text-center">There is no simple, efficient, & reliable way to manage patients during COVID-19</h3>

        <div className="row" style={{justifyContent: "center"}}>
          <div className="col-md-4 col-lg-3 col-sm-12 usp-item">
            <img src="website/static/icons/icon1.svg" className="usp-icon-large" />
            <h5>
              Long Setup Time
      </h5>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-12 usp-item">
            <img src="website/static/icons/icon2.svg" className="usp-icon-large" />
            <h5>
              Long Patient Admission Time
      </h5>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-12 usp-item">
            <img src="website/static/icons/icon3.svg" className="usp-icon-large" />
            <h5>
              High Cost
      </h5>
          </div>
        </div>
      </section>

      <section className="container pb-5 mb-5">
        <h1 className="text-center heading">Our Solution</h1>
        <h3 className="text-center mb-4">A simple, yet powerful patient management system.</h3>

        <div id="gradient-bg-wrapper">
          <div id="gradient-bg">
            <div className="row shadow" id="gradient-overlay">

              <div className="col-md-3 col-sm-6 usp-item">
                <img src="website/static/icons/icon4.svg" className="usp-icon" />
                <h5 className="heading">
                  Easy to Use
          </h5>
                <h6>
                  Unified Management Model. Easy to use and modular interface for case and roster management, medical inventory.
          </h6>
              </div>

              <div className="col-md-3 col-sm-6 usp-item">
                <img src="website/static/icons/icon5.svg" className="usp-icon" />
                <h5>
                  Real-time Communication
          </h5>
                <h6>
                  Keep all stakeholders informed.
          </h6>
              </div>

              <div className="col-md-3 col-sm-6 usp-item">
                <img src="website/static/icons/icon6.svg" className="usp-icon" />
                <h5>
                  Analytical Insights
          </h5>
                <h6>
                  Predict your needs and mitigate the unexpected.
          </h6>
              </div>

              <div className="col-md-3 col-sm-6 usp-item">
                <img src="website/static/icons/icon7.svg" className="usp-icon" />
                <h5>
                  Data Privacy Aware
          </h5>
                <h6>
                  Backed-up and securely stored with Zero-Knowledge Storage.
          </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img width="30" src="./website/static/images/Group 2573.png" />
              <p className="footer-text">
                At XCOV19, we aim to bring you the cutting-edge technology that you need to navigate this pandemic. Together, we can address this pandemic in a more efficient manner.
            </p>
              <a className="footer-button" href="https://bit.ly/38rinqw">
                Connect With Us
            </a>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-section">
                    <h6>Social Citings</h6>
                    <table>
                      <tr>
                        <th></th>
                      </tr>
                      <tr>
                        <td><a href="https://helpful.directory/projects/HE-1594886592000">Helpful Engineering</a></td>
                      </tr>
                      <tr>
                        <td><a href="https://app.jogl.io/project/251">JOGL</a></td>
                      </tr>
                      <tr>
                        <td><a href="https://covid.mattermore.io/projects/TWF0dGVyOjky">Mattermore</a></td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-section">
                    <h6>VC Kit</h6>
                    <span>Email : <a href="mailto:info@xcov19.com">xcov19@googlegroups.com</a></span>
                    <span>Phone : <a href="tel:+91 1234 234 143">+91 9131167787</a></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright">
            <span>Made with
            <svg className="Icon_awesome-heart_vq" viewBox="-0.001 2.248 21.144 18.501">
                <linearGradient id="Icon_awesome-heart_vq" spreadMethod="pad" x1="0.5" x2="0.5" y1="0" y2="1">

                  <stop offset="0" stop-color="#0cf" stop-opacity="1"></stop>
                  <stop offset="1" stop-color="#00d1b4" stop-opacity="1"></stop>
                </linearGradient>
                <path fill="#00cedd" id="Icon_awesome-heart_vq"
                  d="M 19.09038925170898 3.512668132781982 C 16.82741355895996 1.584184885025024 13.46186065673828 1.931064128875732 11.38471508026123 4.074282169342041 L 10.57120132446289 4.912573337554932 L 9.757686614990234 4.074282169342041 C 7.684669971466064 1.931064128875732 4.314986228942871 1.584184885025024 2.05201244354248 3.512668132781982 C -0.5413227081298828 5.726088047027588 -0.6775966882705688 9.698680877685547 1.643190383911133 12.09792900085449 L 9.633801460266113 20.34869766235352 C 10.14999008178711 20.88140678405762 10.98828125 20.88140678405762 11.50447082519531 20.34869766235352 L 19.49508094787598 12.09792995452881 C 21.81999778747559 9.698681831359863 21.68372344970703 5.726089477539062 19.09038734436035 3.512669324874878 Z">
                </path>
              </svg>

            in India
          </span>
          </div>
        </div>
      </footer>

    </>
  )
};

export default Home;