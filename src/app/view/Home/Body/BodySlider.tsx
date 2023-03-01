import React from "react";
import { Card, CustomSlider, SearchBar, SnackbarErro } from "../../shared";
import { Movies } from "../../../domain/entities";
import './BodySlider.css';

type Props = {
    categoryMovie: string;
    movies: Movies[] | undefined;
    onClick: (searchTerm: string) => void;
}

const BodySlider: React.FC<Props> = ({ categoryMovie, movies, onClick }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3,
        nextArrow: <></>,
        prevArrow: <></>,
    };

    return (
        <div>
            {movies &&
                <div>
                    <div className="slider-title">{categoryMovie} movies</div>
                    <div className="slider-container">
                        <CustomSlider settings={settings}>
                            {movies.map((item) =>
                                <Card key={item.Title} data={item} width="204px" height="303px" onClick={onClick} />
                            )}
                        </CustomSlider>
                    </div>
                </div>
            }
        </div>
    );

}

export default BodySlider;