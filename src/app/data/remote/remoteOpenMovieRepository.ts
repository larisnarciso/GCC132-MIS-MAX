import { openMovieConfig } from '../../../api-config';
import { Movie, Movies } from '../../domain/entities';
import { MovieNotFoundError } from '../../domain/errors/movie-not-found-error';
import { OpenMovieRepository } from '../../domain/services/protocols/openMovieRepository';
import { FakeOpenMovieRepository } from '../fake/fakeOpenMovieRepository';

class RemoteOpenMovieRepository extends OpenMovieRepository {
  async getAll(searchTerm: string): Promise<Movies[]> {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${openMovieConfig.key}&s=${searchTerm}`
      );
      const data = await response.json();

      if (data.Error) throw new MovieNotFoundError('Filme não encontrado');

      return this.toCollection(Object.values(data).at(0) as any);
    } catch (error) {
      console.error('Erro ao acessar a API externa:', error);
      // Se ocorrer um erro ao acessar a API externa, use o repositório falso como fallback
      return new FakeOpenMovieRepository().getAll();
    }
  }

  async getByTitle(title: string): Promise<Movie> {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${openMovieConfig.key}&t=${title}`
      );
      const data = await response.json();

      if (data.Error) throw new MovieNotFoundError('Filme não encontrado');

      return this.toMovieEntity(data);
    } catch (error) {
      console.error('Erro ao acessar a API externa:', error);
      // Se ocorrer um erro ao acessar a API externa, use o repositório falso como fallback
      return new FakeOpenMovieRepository().getByTitle(title);
    }
  }

  private toMoviesEntity(data: any): Movies {
    return {
      Poster: data.Poster,
      Title: data.Title,
      Type: data.Type,
      Year: data.Year,
    };
  }

  private toMovieEntity(data: any): Movie {
    return {
      Awards: data.Awards,
      Director: data.Director,
      Poster: data.Poster,
      Plot: data.Plot,
      Runtime: data.Runtime,
      Title: data.Title,
      Type: data.Type,
      Year: data.Year,
      Genre: data.Genre,
    };
  }

  private toCollection(data: any[]): Movies[] {
    return data.map((dataItem) => this.toMoviesEntity(dataItem));
  }
}

export default RemoteOpenMovieRepository;
