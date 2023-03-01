import { Movie, Movies } from "../entities";
import { OpenMovieRepository } from "./protocols/openMovieRepository";

class FindMovieService {
    constructor(private readonly repo: OpenMovieRepository) { }

    async getCategories(searchTerm: string): Promise<Movies[]> {
        const categories = await this.repo.getAll(searchTerm);
        return categories;
    }

    async getMovie(title: string): Promise<Movie> {
        const movie = await this.repo.getByTitle(title);
        return movie;
    }
}

export default FindMovieService;