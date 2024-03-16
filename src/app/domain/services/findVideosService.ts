import { Video, Videos } from '../entities';
import { OpenVideoRepository } from './protocols/openVideoRepository';

class FindVideoservice {
  constructor(private readonly repo: OpenVideoRepository) {}

  async getCategories(searchTerm?: string): Promise<Videos[]> {
    const categories = await this.repo.getAll(searchTerm);
    return categories;
  }

  async getVideo(title: string): Promise<Video> {
    const Video = await this.repo.getByTitle(title);
    return Video;
  }
}

export default FindVideoservice;
