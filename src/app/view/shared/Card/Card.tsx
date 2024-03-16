import React, { useState } from 'react';
import { Videos } from '../../../domain/entities';
import './Card.css';

type Props = {
  data: Videos;
  width: string;
  height: string;
  onClick?: (searchTerm: string) => void;
};

const Card: React.FC<Props> = ({ data, width, height, onClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleClick = () => {
    if (onClick) {
      setSearchTerm(data.Title);
      onClick(searchTerm);
    }
  };

  return (
    <div className='card' onClick={handleClick}>
      <img src={data.Poster} style={{ width, height }}></img>
      <div className='title'>{data.Title}</div>
    </div>
  );
};

export default Card;
