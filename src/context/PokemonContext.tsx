import { createContext } from "react";

export const PokemonContext = createContext({});

const PokemonProvider = ({ /* children */ }) => {
  return (
    <PokemonContext.Provider value={{}}>{/* children */}</PokemonContext.Provider>
  );
};

export {
    PokemonProvider,
}