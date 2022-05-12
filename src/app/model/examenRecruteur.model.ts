
import { Examen } from "./examen.model";
import { Recruteur } from "./recruteur.model";

export interface ExamenRecruteur{
    id: number;
    examen: Examen;
    recruteur:Recruteur;
}



