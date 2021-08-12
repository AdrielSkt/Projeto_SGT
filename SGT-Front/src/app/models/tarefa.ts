import { Responsavel } from "./responsavel";

export interface Tarefa{
id?: any;
dataInicio: string;
terminoPrevisto: string;
horasEfetivas: number;
status: string;
comentario: string;
responsavel: Responsavel;




}