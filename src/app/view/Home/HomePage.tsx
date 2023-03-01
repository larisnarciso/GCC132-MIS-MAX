import React from "react";
import FindMovieService from "../../domain/services/findMoviesService";
import BodyPage from "./body/BodyPage";
import FooterPage from "./footer/FooterPage";
import HeaderPage from "./header/HeaderPage";
import './HomePage.css';

type Props = {
    service: FindMovieService;
}

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
}

export default HomePage;