import React from "react";
import { Movie } from "../../../domain/entities";
import { LeftArrow } from "../../shared";
import './BodyMovieDetails.css';

type Props = {
    movie: Movie;
}

const BodyMovieDetails: React.FC<Props> = ({ movie }) => {
    const handleOnClick = () => {
        window.location.reload();
    };

    return (
        <div className="body-details-container">
            <div className="body-details-arrow">
                <LeftArrow onClick={() => handleOnClick()} />
            </div>
            <img src={movie.Poster} className="body-details-img" />
            <div>
                <div className="body-details-title">
                    {movie.Title}
                </div>
                <div className="body-details-plot">
                    {movie.Plot}
                </div>
                <div className="body-details-info">
                    <div>Runtime: {movie.Runtime} </div>
                    <div>Director: {movie.Director}</div>
                    <div>Awards: {movie.Awards}</div>
                </div>
            </div>
        </div>
    );
}

export default BodyMovieDetails;