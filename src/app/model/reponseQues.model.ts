import { Question } from "./question.model";

export interface ReponseQues{
    id: number;
    nom: string;
    juste: boolean;
    choisie: boolean;
    question: Question;
}


	