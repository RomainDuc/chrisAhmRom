import { ExamenRecruteur } from "./examenRecruteur.model";
import { offreEmploi } from "./offreEmlpoi.model";
import { Questionnaire } from "./questionnaire.model";

export interface Examen{

    id: number;
    note: number;
    valide: boolean;
    seuilDeValidation:number;
    offreEmploi: offreEmploi;
    examenRecruteurs: ExamenRecruteur[];
    questionnaire : Questionnaire;
}

