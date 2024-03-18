import React, { useState, useEffect } from 'react';
import { Banner, CustomSlider } from '../../shared';
import { Videos } from '../../../domain/entities';
import './BodyBanner.css';
import bannerData from '../../../data/fake/videosFake.json';

type Props = {
  onClick: (searchTerm: string) => void;
};

const BodyBanner: React.FC<Props> = ({ onClick }) => {
  const [banners, setBanners] = useState<Videos[]>([]);

  useEffect(() => {
    const firstFiveBanners = bannerData.slice(0, 5);
    setBanners(firstFiveBanners);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <></>,
    prevArrow: <></>,
  };

  return (
    <div>
      {banners.length > 0 && (
        <div>
          <div className='banner-container'>
            <CustomSlider settings={settings}>
              {banners.map((video) => (
                <Banner key={video.Title} data={video} onClick={onClick} />
              ))}
            </CustomSlider>
          </div>
        </div>
      )}
    </div>
  );
};

export default BodyBanner;
