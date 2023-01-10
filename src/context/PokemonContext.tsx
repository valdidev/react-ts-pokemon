import { createContext } from "react";
import { PokemonType } from "../interfaces/types";

interface ContextProps {
  types: PokemonType[];
  filterSelected: PokemonType;
  filteredPokemon: string[] | null;
  changeTypeSelected: (type: PokemonType) => void;
}

export const PokemonContext = createContext({} as ContextProps);

const PokemonProvider = (
  {
    /* children */
  }
) => {
  return (
    <PokemonContext.Provider value={{}}>
      {/* children */}
    </PokemonContext.Provider>
  );
};

export { PokemonProvider };
