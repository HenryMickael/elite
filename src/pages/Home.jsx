import React from "react";
import Carrousel from "../components/Carrousel";
import Realisation from "../components/Realisation";
import Service from "../components/Service";
import Rdv from "../components/Rdv";
import Contact from "../components/Contact";
import ManualReviews from "../components/ManualReview";
// import GoogleReviews from "../components/GoogleReview";

const Home = () => {
  return (
    <div className="home">
      <Carrousel></Carrousel>
      <Realisation></Realisation>
      <Service></Service>
      <Rdv></Rdv>
      <Contact></Contact>
      <ManualReviews></ManualReviews>
      {/* <GoogleReviews></GoogleReviews> */}
    </div>
  );
};

export default Home;
