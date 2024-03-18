import { openVideoConfig } from '../../../api-config';
import { Video, Videos } from '../../domain/entities';
import { VideoNotFoundError } from '../../domain/errors/video-not-found-error';
import { OpenVideoRepository } from '../../domain/services/protocols/openVideoRepository';
import { FakeOpenVideoRepository } from '../fake/fakeOpenVideoRepository';

class RemoteOpenVideoRepository extends OpenVideoRepository {
  async getAll(searchTerm: string): Promise<Videos[]> {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${openVideoConfig.key}&s=${searchTerm}`
      );
      const data = await response.json();

      if (data.Error) throw new VideoNotFoundError('Filme não encontrado');

      return this.toCollection(Object.values(data).at(0) as any);
    } catch (error) {
      console.error('Erro ao acessar a API externa:', error);
      // Se ocorrer um erro ao acessar a API externa, use o repositório falso como fallback
      return new FakeOpenVideoRepository().getAll();
    }
  }

  async getByTitle(title: string): Promise<Video> {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${openVideoConfig.key}&t=${title}`
      );
      const data = await response.json();

      if (data.Error) throw new VideoNotFoundError('Filme não encontrado');

      return this.toVideoEntity(data);
    } catch (error) {
      console.error('Erro ao acessar a API externa:', error);
      // Se ocorrer um erro ao acessar a API externa, use o repositório falso como fallback
      return new FakeOpenVideoRepository().getByTitle(title);
    }
  }

  private toVideosEntity(data: any): Videos {
    return {
      Banner: data.Banner,
      Poster: data.Poster,
      Title: data.Title,
      Type: data.Type,
      Year: data.Year,
      Plot: data.Plot,
    };
  }

  private toVideoEntity(data: any): Video {
    return {
      Awards: data.Awards,
      Director: data.Director,
      Poster: data.Poster,
      Plot: data.Plot,
      Runtime: data.Runtime,
      Title: data.Title,
      Type: data.Type,
      Year: data.Year,
      Genre: data.Genre,
      Banner: data.Banner,
    };
  }

  private toCollection(data: any[]): Videos[] {
    return data.map((dataItem) => this.toVideosEntity(dataItem));
  }
}

export default RemoteOpenVideoRepository;
