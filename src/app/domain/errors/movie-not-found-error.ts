export class MovieNotFoundError extends Error {
    constructor(mensagem: string) {
        super(mensagem);
        this.name = 'MovieNotFoundError';
    }
}