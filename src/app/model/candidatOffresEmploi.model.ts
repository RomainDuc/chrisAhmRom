import { Candidat } from "./candidat.model";
import { offreEmploi } from "./offreEmlpoi.model";


  export interface CandidatOffreEmploi {
    id: number;
    candidat: Candidat;
    offreEmploi: offreEmploi;
  }
  
