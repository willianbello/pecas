import { IPeca } from "./peca";

export interface IAno {
    ano: number;
    pecas: Array<IPeca>;
}

export class Ano {
    ano: number;
    pecas: Array<IPeca> = [];
}