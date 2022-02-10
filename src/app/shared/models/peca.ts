import { PecaAlternativa } from "./peca-alternativa";

export class Peca {
    nome: string;
    alternativas: Array<PecaAlternativa> = new Array<PecaAlternativa>();
}