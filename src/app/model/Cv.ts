import { Candidat } from "./candidat";
import { Competence } from "./competence.model";
import { Diplome } from "./Diplome.model";
import { ExperienceProfessionelle } from "./experienceProfessionnelle.model";
import { Formation } from "./formation.model";

export interface Cv {

    id: number,
    candidat : Candidat,
    diplomes: Diplome[],

    formations: Formation[]
    /*
    experiencesProfessionelles : ExperienceProfessionelle[],
    competences : Competence[]
   */
}

``
