import React from "react";
import { Card } from "react-bootstrap";

const servicesData = [
  {
    title: "Coupe",
    description:
      "Optez pour une nouvelle coupe de cheveux qui correspond à votre style et votre personnalité. Nos coiffeurs expérimentés sauront vous conseiller et réaliser la coupe de vos rêves.",
  },
  {
    title: "Coloration",
    description:
      "Transformez votre look avec notre service de coloration professionnel. Que vous souhaitiez des reflets subtils, une coloration complète ou des mèches audacieuses, notre équipe saura créer la couleur parfaite pour vous.",
  },
  {
    title: "Mèches",
    description:
      "Apportez de la dimension à vos cheveux avec nos mèches expertes. Qu'il s'agisse de mèches délicates pour un effet naturel ou de mèches plus prononcées pour un look tendance, nous sommes là pour réaliser vos envies.",
  },
  {
    title: "Soin",
    description:
      "Dorlotez vos cheveux avec nos traitements capillaires nourrissants. Nous offrons une gamme de soins adaptés à différents types de cheveux pour les revitaliser, les hydrater et les rendre plus sains et éclatants.",
  },
  {
    title: "Lissage",
    description:
      "Obtenez des cheveux lisses et soyeux avec notre service de lissage professionnel. Que vous ayez des boucles, des frisottis ou des cheveux indisciplinés, notre équipe utilisera les techniques les plus avancées pour vous offrir un lissage impeccable.",
  },
];

const Service = () => {
  return (
    <div>
      <section id="services" className="bg-light">
        <div className="container d-flex flex-column justify-content-center">
          <h2 className="title-services text-center mb-4">Nos services</h2>
          <div className="row">
            {servicesData.map((service, index) => (
              <div key={index} className="col-md-4">
                <Card>
                  <Card.Body>
                    <h5 className="card-title text-center">{service.title}</h5>
                    <p className="card-text">{service.description}</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
