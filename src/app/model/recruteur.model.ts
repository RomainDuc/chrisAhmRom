import { Entreprise } from "./entreprise.model";


  export interface Recruteur {
    id: number;
    login: string;
    password: string;
    nom: string;
    pernom: string;
    email: string;
    matriculeRecruteur: number;
    entreprise: Entreprise;
  }
