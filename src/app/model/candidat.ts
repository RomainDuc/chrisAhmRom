
import { Cv } from "./Cv";
import { offreEmploi } from "./offreEmlpoi.model";


export interface Candidat {
  id : number,
  login : string,
  nom : string,
  prenom : string,
  email : string,
  dateNaissance : Date,
  disponibilite : boolean,
  cvs : Cv[],
  candidatOffreEmploi : offreEmploi[]

}
