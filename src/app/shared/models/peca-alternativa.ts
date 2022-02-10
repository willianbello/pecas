export interface IPecaAlternativa {
    modelo: string;
    fabricante: string;
    descricao: string;
    ano: number;
}

export class PecaAlternativa implements IPecaAlternativa {
    modelo: string;
    fabricante: string;
    descricao: string;
    ano: number;
}