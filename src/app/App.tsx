import FindMovieService from './domain/services/findMoviesService';
import RemoteOpenMovieRepository from './data/remote/remoteOpenMovieRepository';
import { FakeOpenMovieRepository } from './data/fake/fakeOpenMovieRepository';
import HomePage from '../app/view/Home/HomePage';

const App: React.FC = () => {
  const createFindMovieService = () => {
    try {
      // Tenta criar o serviço com o repositório remoto
      return new FindMovieService(new RemoteOpenMovieRepository());
    } catch (error) {
      console.error(
        'Erro ao acessar a API externa. Usando o repositório falso como fallback.',
        error
      );
      // Se ocorrer um erro ao acessar a API externa, cria o serviço com o repositório falso
      return new FindMovieService(new FakeOpenMovieRepository());
    }
  };

  return <HomePage service={createFindMovieService()} />;
};

export default App;
