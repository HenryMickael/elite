import React from "react";

const Rdv = () => {
  return (
    <div>
      <section
        id="rdv"
        className="container-fluid bg-dark d-flex align-items-center justify-content-center"
      >
        <div className="row">
          <div className="opening col-lg-6 opening text-white flex-column">
            <h2>Nos horaires d'ouvertures</h2>
            <br />
            <div data-opening-hours>
              <div data-opening-hours-specification>
                <meta itemProp="dayOfWeek" content="Monday" />
                <meta itemProp="opens" content="00:00" />
                <meta itemProp="closes" content="00:00" />
                Lundi : Fermé{" "}
              </div>
              <br />
              <div data-opening-hours-specification>
                <meta itemProp="dayOfWeek" content="Tuesday" />
                <meta itemProp="opens" content="09:00" />
                <meta itemProp="closes" content="19:00" />
                Mardi au Jeudi : 9h - 19h{" "}
              </div>
              <br />
              <div data-opening-hours-specification>
                <meta itemProp="dayOfWeek" content="Friday" />
                <meta itemProp="opens" content="10:00" />
                <meta itemProp="closes" content="21:00" />
                Vendredi : 10h - 21h{" "}
              </div>
              <br />
              <div data-opening-hours-specification>
                <meta itemProp="dayOfWeek" content="Saturday" />
                <meta itemProp="opens" content="08:00" />
                <meta itemProp="closes" content="17:00" />
                Samedi : 8h - 17h{" "}
              </div>
              <br />
              <div data-opening-hours-specification>
                <meta itemProp="dayOfWeek" content="Sunday" />
                <meta itemProp="opens" content="00:00" />
                <meta itemProp="closes" content="00:00" />
                Dimanche : Fermé{" "}
              </div>
            </div>
          </div>
          <div className="take-appointment col-lg-6 text-center flex-column">
            <h2 className="text-white mt-4">Prendre rendez-vous :</h2>
            <a
              href="https://www.planity.com/lelite-cut-color-57330-hettange-grande"
              target="_blank"
              rel="noreferrer"
              className="btn btn-light mt-4"
            >
              Rdv en ligne
            </a>
            <h2 className="text-white mt-4">Ou par téléphone au:</h2>
            <a href="tel:+33678079268" className="btn btn-light mt-4">
              <i className="bi bi-telephone-forward"></i> +33 6 78 07 92 68
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Rdv;
