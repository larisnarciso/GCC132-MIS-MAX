export class VideoNotFoundError extends Error {
  constructor(mensagem: string) {
    super(mensagem);
    this.name = 'VideoNotFoundError';
  }
}
