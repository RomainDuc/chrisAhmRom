export interface OffreEmploi {
  id : number,
  categorieOffre :string,
  description : string,
  datePublication : Date,
  dateLimite : Date,
  salaire : number,
  experienceSouhaite : number,
  niveauQualification : number,
  typeContrat : number,
  statut : number,
  active : boolean

}
