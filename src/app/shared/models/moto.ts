import { IModelo, Modelo } from "./modelo";

export interface IMoto {
    fabricante: string;
    modelos: IModelo[];
}

export class Moto implements IMoto {
    fabricante: string;
    modelos: Modelo[] = [];
}