import { Videos } from './VideosModel';

export type Video = Videos & {
  Awards: string;
  Director: string;
  Genre: string;
  Plot: string;
  Runtime: string;
};
