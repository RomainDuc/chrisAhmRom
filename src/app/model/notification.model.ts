import { Candidature } from "./candidature.model";
import { Recruteur } from "./recruteur.model";

export interface Notification{

    id: number;
    nom: string;
    espaceTexte: string;
    statue: string;
    candidature: Candidature;
    recruteur: Recruteur;
}

