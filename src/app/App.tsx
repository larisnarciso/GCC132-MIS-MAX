import FindMovieService from './domain/services/findMoviesService';
import RemoteOpenMovieRepository from './data/remote/remoteOpenMovieRepository';
import HomePage from './view/home/HomePage';

const App: React.FC = () => {
  const createFindMovieService = () => {
    return new FindMovieService(new RemoteOpenMovieRepository())
  };

  return (
    <HomePage service={createFindMovieService()} />
  );
}

export default App;
