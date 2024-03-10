import React from "react";
import AvantApres1 from "../photoAvAp/AvantApres1.jpg";
import AvantApres2 from "../photoAvAp/AvantApres2.jpg";
import AvantApres3 from "../photoAvAp/AvantApres3.jpg";
import AvantApres4 from "../photoAvAp/AvantApres4.jpg";
import AvantApres5 from "../photoAvAp/AvantApres5.jpg";
import AvantApres6 from "../photoAvAp/AvantApres6.jpg";

const Realisation = () => {
  return (
    <div>
      <section id="realisation" className="bg-dark">
        <div className="container">
          <h2 className="title-realisation text-center text-white">
            Nos réalisations
          </h2>
          <div className="card-all1 row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={AvantApres1}
                  className="card-img-top"
                  alt="Avant-Après 1"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={AvantApres2}
                  className="card-img-top"
                  alt="Avant-Après 2"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={AvantApres3}
                  className="card-img-top"
                  alt="Avant-Après 3"
                />
              </div>
            </div>
          </div>
          <div className="card-all2 row">
            <div className="col-md-4">
              <div className="card">
                <img
                  src={AvantApres4}
                  className="card-img-top"
                  alt="Avant-Après 4"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={AvantApres5}
                  className="card-img-top"
                  alt="Avant-Après 5"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  src={AvantApres6}
                  className="card-img-top"
                  alt="Avant-Après 6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Realisation;
