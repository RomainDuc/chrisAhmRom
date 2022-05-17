import { NiveauQualification } from "./Diplome.model";

export interface offreEmploi{
    id : number,
    categorieOffre :string,
    description : string,
    datePublication : Date,
    dateLimite : Date,
    salaire : number,
    experienceSouhaite : number,
    niveauQualification : NiveauQualification;
    typeContrat : TypeContrat,
    statut : Statut,
    active : boolean

}

export enum Statut{
    DISPONIBLE = "0",
    INDISPONIBLE ="1"

}


export enum TypeContrat{

        CDI= "0",
        CDD= "1",
        SAISONNIER= "2",
        STAGE= "3",
        ETUDIANT= "4",
        INTERIM= "5"

}

