import { Video } from '../../domain/entities';
import { OpenVideoRepository } from '../../domain/services/protocols/openVideoRepository';
import VideosFake from './videosFake.json';

export class FakeOpenVideoRepository extends OpenVideoRepository {
  async getAll(): Promise<Video[]> {
    return VideosFake;
  }

  async getByTitle(searchTerm: string): Promise<Video> {
    const foundVideo = VideosFake.find(
      (Video) => Video.Title.toLowerCase() === searchTerm.toLowerCase()
    );

    if (foundVideo) {
      return foundVideo;
    } else {
      throw new Error('Filme não encontrado');
    }
  }
}
