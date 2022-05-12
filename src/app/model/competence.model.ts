import { CompetenceOffreEmploi } from "./competenceOffreEmploi.model";
import { Cv } from "./cv.model";


export interface Competence {
    id: number;
    nom: string;
    description: string;
    niveauAptitudes: string;
    cv: Cv;
    competenceOffres: CompetenceOffreEmploi[]

  }

