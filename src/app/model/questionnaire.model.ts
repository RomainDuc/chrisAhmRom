import { Question } from "./question.model"

export interface Questionnaire{

    id: number;
    note: number;
    secteurActivite: string;
    questions: Question[];
}
