import { Video, Videos } from '../../entities';

export abstract class OpenVideoRepository {
  abstract getAll(searchTerm?: string): Promise<Videos[]>;
  abstract getByTitle(title: string): Promise<Video>;
}
