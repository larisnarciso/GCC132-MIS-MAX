import React from 'react';
import { Card, CustomSlider, SearchBar, SnackbarErro } from '../../shared';
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
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow: <></>,
    prevArrow: <></>,
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
