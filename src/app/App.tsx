import FindVideoservice from './domain/services/findVideosService';
import RemoteOpenVideoRepository from './data/remote/remoteOpenVideoRepository';
import { FakeOpenVideoRepository } from './data/fake/fakeOpenVideoRepository';
import HomePage from '../app/view/Home/HomePage';
import Login from './view/Login/Login';
import './App.css';

const App: React.FC = () => {
  const createFindVideoservice = () => {
    try {
      // Tenta criar o serviço com o repositório remoto
      return new FindVideoservice(new RemoteOpenVideoRepository());
    } catch (error) {
      console.error(
        'Erro ao acessar a API externa. Usando o repositório falso como fallback.',
        error
      );
      // Se ocorrer um erro ao acessar a API externa, cria o serviço com o repositório falso
      return new FindVideoservice(new FakeOpenVideoRepository());
    }
  };

  return <HomePage service={createFindVideoservice()} />;
};

export default App;
