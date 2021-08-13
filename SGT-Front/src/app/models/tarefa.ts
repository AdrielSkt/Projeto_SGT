import { Comentario } from "./comentario";
import { Responsavel } from "./responsavel";

export interface Tarefa{
id?: any;
dataInicio: string;
terminoPrevisto: string;
horasEfetivas: number;
status: any;
comentario:Comentario[];
responsavel: Responsavel;




}