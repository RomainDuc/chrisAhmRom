import { Examen } from "./examen.model";
import { Recruteur } from "./recruteur.model";

export interface RecruteurExamen{
    id: number;
    recruteur: Recruteur;
    examen: Examen;
}

