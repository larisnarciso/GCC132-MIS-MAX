import React from 'react';
import { Videos } from '../../../domain/entities';
import './Banner.css';

type Props = {
  width?: string;
  height?: string;
  data: Videos;
  onClick?: (searchTerm: string) => void;
};

const Banner: React.FC<Props> = ({
  width = '100%',
  height = '0px',
  data,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick && data) {
      onClick(data.Title);
    }
  };

  return (
    <div className='banner' onClick={handleClick}>
      <img src={data.Banner} style={{ width, height }} alt={data.Title} />
      <div className='title'>{data.Title}</div>
      {/* <div className='plot'>{data.Plot}</div> */}
    </div>
  );
};

export default Banner;
