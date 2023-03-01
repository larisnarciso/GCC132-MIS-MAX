import React from "react";
import FindMovieService from "../../domain/services/findMoviesService";
import BodyPage from "../Home/Body/BodyPage";
import FooterPage from "../Home/Footer/FooterPage";
import HeaderPage from "../Home/Header/HeaderPage";
import "./HomePage.css";

type Props = {
  service: FindMovieService;
};

const HomePage: React.FC<Props> = ({ service }) => {
  return (
    <div className="backgrond-home">
      <HeaderPage />
      <div className="body-container">
        <BodyPage service={service} />
      </div>
      <FooterPage />
    </div>
  );
};

export default HomePage;
