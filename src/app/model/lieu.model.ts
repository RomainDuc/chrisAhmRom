import { offreEmploi } from "./offreEmlpoi.model";


export interface Lieu{
    id: number;
    adresse: string;
    codePostal: string;
    ville: string;
    region: string;
    pays: string;
    offreEmplois: offreEmploi[];
}


