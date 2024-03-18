import React from 'react';
import { Card, CustomSlider } from '../../shared';
import { Videos } from '../../../domain/entities';
import './BodySlider.css';

type Props = {
  categoryVideo: string;
  Videos: Videos[] | undefined;
  onClick: (searchTerm: string) => void;
};

const BodySlider: React.FC<Props> = ({ categoryVideo, Videos, onClick }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1600, // telas maiores
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1366, // laptops
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024, // tablet horizontal
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768, // tablet vertical
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, // celular
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      {Videos && (
        <div>
          <div className='slider-title'>{categoryVideo}</div>
          <div className='slider-container'>
            <CustomSlider settings={settings}>
              {Videos.map((item) => (
                <Card
                  key={item.Title}
                  data={item}
                  width='204px'
                  height='303px'
                  onClick={onClick}
                />
              ))}
            </CustomSlider>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodySlider;
