import { Ano, IAno } from "./ano";

export interface IModelo {
    nome: string;
    anos: IAno[];
}

export class Modelo {
    nome: string;
    anos: Ano[] = [];
}