import React from "react";

const Contact = () => {
  return (
    <div>
      <section id="contact">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center">
              <div id="map" style={{ width: "350px", height: "300px" }}></div>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div
                className="address"
                itemScope
                itemType="http://schema.org/PostalAddress"
              >
                <h2>Adresse</h2>
                <p>
                  <span itemProp="name">L'Elite Cut & Color by A.S</span> <br />
                  <span itemProp="streetAddress">4 Rue des Ateliers</span>{" "}
                  <br />
                  <span itemProp="addressLocality">Hettange-Grande</span> <br />
                  <span itemProp="postalCode">57330</span>
                </p>
                <p>
                  Tel : <span itemProp="telephone">06 78 07 92 68</span>
                </p>
                <p>
                  Email :
                  <a href="mailto:lelitecutcolor@gmail.com" itemProp="email">
                    lelitecutcolor@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
