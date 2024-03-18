import React, { useEffect, useState } from 'react';
import { Video, Videos } from '../../../domain/entities';
import FindVideoservice from '../../../domain/services/findVideosService';
import { Loading, SearchBar, SnackbarErro } from '../../shared';
import BodyVideoDetails from './BodyVideoDetails';
import BodySlider from './BodySlider';
import './BodyPage.css';
import Banner from '../../shared/Banner/Banner';
import BodyBanner from './BodyBanner';

type Props = {
  service: FindVideoservice;
};

const BodyPage: React.FC<Props> = ({ service }) => {
  const [Video, setVideo] = useState<Video>();
  const [seriesVideos, setseriesVideos] = useState<Videos[]>();
  const [filmVideos, setfilmVideos] = useState<Videos[]>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const VideosCategory = { series: 'Serie', movie: 'Movie' };

  //Método utilizado para setar os estados a partir da pesquisa feita no input
  const handleSearch = async (searchTerm: string) => {
    if (searchTerm) {
      try {
        setVideo(await service.getVideo(searchTerm));
        setErrorMessage('');
      } catch (error) {
        if (error instanceof Error) {
          setVideo(undefined);
          setErrorMessage(error.message);
        }
      }
    }
  };

  // Método utilizado para setar conteúdo ao renderizar o componente
  const handleBody = async () => {
    try {
      setIsLoading(true);

      const seriesVideosResponse = await service.getCategories(
        VideosCategory.series
      );
      const filmVideosResponse = await service.getCategories(
        VideosCategory.movie
      );

      const seriesVideosFiltered = seriesVideosResponse.filter(
        (video) => video.Type === 'series'
      );
      const filmVideosFiltered = filmVideosResponse.filter(
        (video) => video.Type === 'movie'
      );

      setseriesVideos(seriesVideosFiltered);
      setfilmVideos(filmVideosFiltered);
      setErrorMessage('');

      setIsLoading(false);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    handleBody();
  }, []);

  return (
    <div className='body-container'>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='body-banner-container'>
            <BodyBanner onClick={handleSearch} />
          </div>
          <div className='body-search-container'>
            <SearchBar onSubmit={handleSearch} />
          </div>

          {Video ? (
            <div className='body-details-container'>
              <BodyVideoDetails Video={Video} />
            </div>
          ) : (
            <div>
              <BodySlider
                categoryVideo={VideosCategory.movie}
                Videos={filmVideos}
                onClick={handleSearch}
              />
              <BodySlider
                categoryVideo={VideosCategory.series}
                Videos={seriesVideos}
                onClick={handleSearch}
              />
            </div>
          )}
        </>
      )}

      {errorMessage && <SnackbarErro message={errorMessage} />}
    </div>
  );
};

export default BodyPage;
