import React from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type SliderProps = {
  settings: Settings;
  children: React.ReactNode;
};

const CustomSlider: React.FC<SliderProps> = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default CustomSlider;
