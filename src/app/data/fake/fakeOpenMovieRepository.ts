import { Movie, Movies } from "../../domain/entities";
import { OpenMovieRepository } from "../../domain/services/protocols/openMovieRepository";

const movies: Movies[] = [
    { "Poster": "http://dummyimage.com/243x100.png/cc0000/ffffff", "Title": "Chalte Chalte", "Type": "Drama", "Year": "2006" },
    { "Poster": "http://dummyimage.com/212x100.png/5fa2dd/ffffff", "Title": "Pointe-Courte, La", "Type": "Drama", "Year": "1998" },
    { "Poster": "http://dummyimage.com/143x100.png/dddddd/000000", "Title": "Death Wish 2", "Type": "Action|Drama", "Year": "2008" },
    { "Poster": "http://dummyimage.com/249x100.png/dddddd/000000", "Title": "City of Women, The (Città delle donne, La)", "Type": "Comedy|Drama", "Year": "2007" },
    { "Poster": "http://dummyimage.com/214x100.png/dddddd/000000", "Title": "Battle for Marjah, The", "Type": "Documentary|War", "Year": "1996" },
    { "Poster": "http://dummyimage.com/165x100.png/cc0000/ffffff", "Title": "Experience Preferred... But Not Essential", "Type": "Drama", "Year": "2003" },
    { "Poster": "http://dummyimage.com/250x100.png/cc0000/ffffff", "Title": "The Shoe", "Type": "(no genres listed)", "Year": "2007" },
    { "Poster": "http://dummyimage.com/239x100.png/cc0000/ffffff", "Title": "Quicksilver Highway", "Type": "Horror|Thriller", "Year": "2005" },
    { "Poster": "http://dummyimage.com/207x100.png/dddddd/000000", "Title": "Charge of the Light Brigade, The", "Type": "Drama|War", "Year": "1993" },
    { "Poster": "http://dummyimage.com/147x100.png/5fa2dd/ffffff", "Title": "Assassins", "Type": "Action|Crime|Thriller", "Year": "2005" }

];

const movie: Movie =
    { "Poster": "http://dummyimage.com/170x100.png/5fa2dd/ffffff", "Title": "Shanghai Knights", "Type": "Action|Adventure|Comedy", "Year": "1985", "Awards": "FMNM", "Director": "Clemence", "Plot": "Focused clear-thinking moderator", "Runtime": "AHT" };

export class FakeOpenMovieRepository extends OpenMovieRepository {
    async getAll(): Promise<Movies[]> {
        return movies;
    }

    async getByTitle(searchTerm: string): Promise<Movie> {
        return movie;
    }
}