
import { Candidat } from "./candidat.model";
import { offreEmploi } from "./offreEmlpoi.model";


export interface Candidature {
    id: number;
    nom:string;
    candidat:Candidat;
    offreEmploi:offreEmploi;
  }
