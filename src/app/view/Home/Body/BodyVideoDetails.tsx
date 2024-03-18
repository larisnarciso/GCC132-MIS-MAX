import React from 'react';
import { Video } from '../../../domain/entities';
import { LeftArrow } from '../../shared';
import './BodyVideoDetails.css';

type Props = {
  Video: Video;
};

const BodyVideoDetails: React.FC<Props> = ({ Video }) => {
  const handleOnClick = () => {
    window.location.reload();
  };

  return (
    <div className='body-details-container'>
      <div className='body-details-arrow'>
        <LeftArrow onClick={() => handleOnClick()} />
      </div>
      <img src={Video.Poster} className='body-details-img' alt={Video.Title} />
      <div>
        <div className='body-details-title'>{Video.Title}</div>
        <div className='body-details-plot'>{Video.Plot}</div>
        <div className='body-details-info'>
          <div>Genre: {Video.Genre}</div>
          <div>Runtime: {Video.Runtime} </div>
          <div>Director: {Video.Director}</div>
          <div>Awards: {Video.Awards}</div>
        </div>
      </div>
    </div>
  );
};

export default BodyVideoDetails;
