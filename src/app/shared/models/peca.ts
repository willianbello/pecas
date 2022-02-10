import { PecaAlternativa } from "./peca-alternativa";

export interface IPeca {
    nome: string;
    alternativas: Array<PecaAlternativa>;
}

export class Peca {
    nome: string;
    alternativas: Array<PecaAlternativa> = new Array<PecaAlternativa>();
}