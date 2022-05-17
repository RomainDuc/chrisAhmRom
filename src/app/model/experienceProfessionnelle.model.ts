import { Cv } from "./cv.model";

export interface ExperienceProfessionelle{

    id:number;
    numero:number;
    description:string;
    anneeExperience: number;
    entreprise: String;
    cv: Cv|undefined;

}

