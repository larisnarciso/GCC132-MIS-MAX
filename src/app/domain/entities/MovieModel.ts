import { Movies } from './MoviesModel';

export type Movie = Movies & {
  Awards: string;
  Director: string;
  Genre: string;
  Plot: string;
  Runtime: string;
};
