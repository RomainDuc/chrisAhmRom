import { Questionnaire } from "./questionnaire.model";
import {  ReponseQues } from "./reponseQues.model";

export interface Question{
    id: number;
    index: number;
    texte: string;
    questionnaire: Questionnaire;
    reponses:ReponseQues[];

}
