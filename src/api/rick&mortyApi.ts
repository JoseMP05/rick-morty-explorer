import { fetchData } from "@/services/fetchData";

const RICK_AND_MORTY_API_URL = 'https://rickandmortyapi.com/api/'

// ----
export interface Info {
  count: number;
  pages: number;
  next:  string;
  prev:  null;
}

export interface Result {
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
// ----

export interface CharacterResponse {
  info: Info;         // Información de paginación
  results: Result[];  // Lista de personajes
}

export async function fetchCharacter(nameCharacter:string) {
  return fetchData<CharacterResponse>(
    `${RICK_AND_MORTY_API_URL}character/?name=${nameCharacter}`, 
    undefined, 
    validateStatusResponse)
}

export function validateStatusResponse(response: Response){
  if(response.status === 404){

    console.log(response.status)
    throw new Error("Character not found")
  }
  else if(response.status >= 500 )
    throw new Error("Unexpected error, try again")
}