import { Movie, Movies } from "../../entities";

export abstract class OpenMovieRepository {
    abstract getAll(searchTerm: string): Promise<Movies[]>;
    abstract getByTitle(title: string): Promise<Movie>;
}