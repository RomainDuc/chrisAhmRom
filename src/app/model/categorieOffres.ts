
export enum CategorieOffre{
Javascript = "0",
  JavaJEE = "1",
  Angular = "2",
  PHP= "3",
  Python= "4",
  SQL= "5",
  CSharpDotNet = "6",
  ReactJs=" 7",
  Architecture = "8"
}

export enum Villes {
  Toulouse = "0",
  Lyon = "1",
  Paris= "2",
  Montpellier = "3",
  Bordeaux= "4",
  Limoges = "5",
  Marseille = "6",
  Lilles = "7"
}

export function enumSelector(definition: any) {
  return Object.keys(definition)
    .map(key => ({ value: definition[key], title: key }));
}


