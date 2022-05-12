
import { Cv } from "./Cv";
import { OffreEmploi } from "./offreEmploi";

export interface Candidat {
  id : number,
  login : string,
  nom : string,
  prenom : string,
  email : string,
  dateNaissance : Date,
  disponibilite : boolean,
  cvs : Cv[],
  candidatOffreEmploi : OffreEmploi[]

}
