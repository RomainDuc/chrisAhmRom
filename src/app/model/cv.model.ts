import { Candidat } from "./candidat.model";
import { Competence } from "./competence.model";
import { Diplome } from "./Diplome.model";
import { ExperienceProfessionelle } from "./experienceProfessionnelle.model";
import { Formation } from "./formation.model";

  export interface Cv {
    id: number;
    candidat: Candidat;
    formations: Formation[];
    experiencesProfessionelles: ExperienceProfessionelle[];
    diplomes: Diplome[];
    competences: Competence[];
  }


