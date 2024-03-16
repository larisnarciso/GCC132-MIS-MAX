import { Movie } from '../../domain/entities';
import { OpenMovieRepository } from '../../domain/services/protocols/openMovieRepository';
import moviesFake from './moviesFake.json';

export class FakeOpenMovieRepository extends OpenMovieRepository {
  async getAll(): Promise<Movie[]> {
    return moviesFake;
  }

  async getByTitle(searchTerm: string): Promise<Movie> {
    const foundMovie = moviesFake.find(
      (movie) => movie.Title.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundMovie) {
      return foundMovie;
    } else {
      throw new Error('Filme não encontrado');
    }
  }
}
