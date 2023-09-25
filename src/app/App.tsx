import FindMovieService from './domain/services/findMoviesService';
import RemoteOpenMovieRepository from './data/remote/remoteOpenMovieRepository';
import { FakeOpenMovieRepository } from './data/fake/fakeOpenMovieRepository';
import HomePage from '../app/view/Home/HomePage';

const App: React.FC = () => {
  const createFindMovieService = () => {
    // Utilizando Api externa para retornar os filmes
    // return new FindMovieService(new RemoteOpenMovieRepository());
    // Utilizando um repositorio fake
    return new FindMovieService(new FakeOpenMovieRepository());
  };

  return <HomePage service={createFindMovieService()} />;
};

export default App;
