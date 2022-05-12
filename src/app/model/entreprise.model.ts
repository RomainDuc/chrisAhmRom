import { Recruteur } from "./recruteur.model";

export interface Entreprise {
    id: number;
    description: string;
    urlEntreprise: string;
    nbreSalaries: number;
    recruteurs: Recruteur[];
  }
  