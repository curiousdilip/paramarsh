import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row footer-top">
            <div className="col-md-6">
              <div className="content">
                <h1>Paramarsh Informatics Pvt. Ltd. </h1>
                <p>
                  PARAMARSH is a diverse end to end IT solutions provider
                  offering a comprehensive set of software and IT services
                  including strategic consulting, creative design, technology
                  integration and implementation.
                </p>
                <a href="" className="know-more">
                  Know More
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="details">
                <h2>Get in Touch</h2>

                <div className="icons">
                  <div className="icon">
                    {" "}
                    <i className="bi bi-geo-alt-fill"></i>
                    <p>
                      Paramarsh Informatics Pvt. Ltd. Unit No. 29, HARTRON
                      Complex Electronic City, Sector 18 Gurgaon 122015 Haryana,
                      India
                    </p>
                  </div>

                  <div className="icon">
                    <i className="bi bi-telephone-fill"></i>
                    <p>(+91) 124-4383934</p>
                  </div>
                  <div className="icon">
                    <i className="bi bi-envelope"></i>
                    <p> sales@paramarsh.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row footer-bottom">
            <div className="col-md-6">
              © 2023 Paramarsh Informatics Pvt. Ltd. | All rights reserved.
            </div>
            <div className="col-md-6">
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/company/paramarsh-informatics-pvt-ltd./"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/ParamarshInformaticsPvtLimited/"
                  target="_blank"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCKSc4vVNdNzF20vxhNtwwRg"
                  target="_blank"
                >
                  <i className="bi bi-youtube"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
