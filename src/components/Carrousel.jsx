import React from "react";
import image1 from "../assets/Caissebac.webp";
import image2 from "../assets/Entrée.webp";
import image3 from "../assets/bac.webp";
import image4 from "../assets/attente3.webp";

const Carrousel = () => {
  return (
    <div>
      <section id="home" className="carousel-section mt-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title-container text-center mb-4 mt-5">
                <h1>L'Elite Cut & Color</h1>
              </div>
              <div
                id="carouselExample"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={image1}
                      className="d-block w-100"
                      alt="Coiffure 1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image2}
                      className="d-block w-100"
                      alt="Coiffure 2"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image3}
                      className="d-block w-100"
                      alt="Coiffure 3"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={image4}
                      className="d-block w-100"
                      alt="Coiffure 4"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
                <ol className="carousel-indicators">
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="0"
                    className="active"
                  ></li>
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="1"
                  ></li>
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="2"
                  ></li>
                  <li
                    data-bs-target="#carouselExample"
                    data-bs-slide-to="3"
                  ></li>
                </ol>
              </div>
              <h2 className="title-container-suite text-center mb-4 mt-5">
                By Arielle et Sabrina
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carrousel;
