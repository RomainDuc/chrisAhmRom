import { Cv } from "./cv.model";

export interface Diplome{

    id:number;
    nom:string;
    anneeObtention: Date;
    niveauQualification: NiveauQualification;
    cv:Cv|undefined;

}


export enum NiveauQualification{
    BAC = "0",
    BAC_PLUS_2 = "1",
    BAC_PLUS_3 = "2",
    BAC_PLUS_5 = "3"
}
