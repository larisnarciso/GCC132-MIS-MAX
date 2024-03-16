import React, { useEffect, useState } from 'react';
import { Movie, Movies } from '../../../domain/entities';
import FindMovieService from '../../../domain/services/findMoviesService';
import { Loading, SearchBar, SnackbarErro } from '../../shared';
import BodyMovieDetails from './BodyMovieDetails';
import BodySlider from './BodySlider';
import './BodyPage.css';

type Props = {
  service: FindMovieService;
};

const BodyPage: React.FC<Props> = ({ service }) => {
  const [movie, setMovie] = useState<Movie>();
  const [comedyMovies, setComedyMovies] = useState<Movies[]>();
  const [romanticMovies, setRomanticMovies] = useState<Movies[]>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const moviesCategory = { comedy: 'Comedy', romantic: 'Romantic' };

  //Método utilizado para setar os estados a partir da pesquisa feita no input
  const handleSearch = async (searchTerm: string) => {
    if (searchTerm) {
      try {
        setMovie(await service.getMovie(searchTerm));
        setErrorMessage('');
      } catch (error) {
        if (error instanceof Error) {
          setMovie(undefined);
          setErrorMessage(error.message);
        }
      }
    }
  };

  //Método utilizado para setar conteúdo ao renderizar o componente
  const handleBody = async () => {
    try {
      setIsLoading(true);

      setComedyMovies(await service.getCategories(moviesCategory.comedy));
      setRomanticMovies(await service.getCategories(moviesCategory.romantic));
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
          <div className='body-search-container'>
            <SearchBar onSubmit={handleSearch} />
          </div>

          {movie ? (
            <div className='body-details-container'>
              <BodyMovieDetails movie={movie} />
            </div>
          ) : (
            <div>
              <BodySlider
                categoryMovie={moviesCategory.romantic}
                movies={romanticMovies}
                onClick={handleSearch}
              />
              <BodySlider
                categoryMovie={moviesCategory.comedy}
                movies={comedyMovies}
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
