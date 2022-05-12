import { Cv } from "./cv.model";

export interface Formation{

    id:number;
    numero:number;
    anneeFormation: Date;
    dureeFormation: number;
    organismeFormateur:String;
    cv:Cv;


}


