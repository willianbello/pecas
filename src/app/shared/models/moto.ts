import { Peca } from "./peca";

export class Moto {
    fabricante: string;
    modelo: string;
    ano: number;
    pecas: Array<Peca> = new Array<Peca>();
}