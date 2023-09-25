import { openMovieConfig } from '../../../api-config';
import { Movie, Movies } from '../../domain/entities';
import { MovieNotFoundError } from '../../domain/errors/movie-not-found-error';
import { OpenMovieRepository } from '../../domain/services/protocols/openMovieRepository';

class RemoteOpenMovieRepository extends OpenMovieRepository {
  //Método utilizado para retornar uma lista de filmes a partir de um termo de pesquisa
  async getAll(searchTerm: string): Promise<Movies[]> {
    // const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${openMovieConfig.key}&s=${searchTerm}`);
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=ac7d535e&s=${searchTerm}`
    );
    const data = await response.json();

    if (data.Error) {
      throw new MovieNotFoundError('Filme não encontrado');
    }

    return this.toCollection(Object.values(data).at(0) as any);
  }

  //Método utilizado para retornar um filme a partir de seu título
  async getByTitle(title: string): Promise<Movie> {
    // const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${openMovieConfig.key}&t=${title}`);
    const response = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=ac7d535e&t=${title}`
    );
    const data = await response.json();

    if (data.Error) {
      throw new MovieNotFoundError('Filme não encontrado');
    }

    return this.toMovieEntity(data);
  }

  private toMoviesEntity(data: any): Movies {
    return {
      Poster: data.Poster,
      Title: data.Title,
      Type: data.Type,
      Year: data.Year,
    };
  }

  //Método utilizado para conversão de um filme
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
    };
  }

  //Método utilizado para conversão de uma lista de filmes
  private toCollection(data: any[]): Movies[] {
    return data.map((dataItem) => this.toMoviesEntity(dataItem));
  }
}

export default RemoteOpenMovieRepository;
