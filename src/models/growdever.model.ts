export type Growdever = {
    id: string;
    nome: string;
    cidade: string;
    cpf: string;
    skills?: string[];
    password: string;
    idade: number;
};

export interface CreateGrowdever {
    nome: string;
    cidade: string;
    cpf: string;
    skills?: string[];
}
