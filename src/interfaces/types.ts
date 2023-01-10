import { PokemonTypes } from "../utils/colorsByPokemonType";

export type PokemonType = {
  name: PokemonTypes | "All";
  url?: string;
};

export type AllPokemonResultType = {
  name: string;
  url: string;
};
