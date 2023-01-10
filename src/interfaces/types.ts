import { PokemonTypes } from "../utils/colorsByPokemonType";

export type PokemonType = {
  name: PokemonTypes | "All";
  url?: string;
};
