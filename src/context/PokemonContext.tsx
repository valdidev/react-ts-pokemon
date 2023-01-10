import axios from "axios";
import { createContext, useState } from "react";
import { AllPokemonResultType, PokemonType } from "../interfaces/types";

interface ContextProps {
  types: PokemonType[];
  filterSelected: PokemonType;
  filteredPokemon: string[] | null;
  changeTypeSelected: (type: PokemonType) => void;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  const endpointAllPokemon =
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset-0";

  const [pokemon, setPokemon] = useState(null);
  const [filterdPokemon, setFilteredPokemon] = useState(null);

  const defaultState: PokemonType = {
    name: "All",
    url: endpointAllPokemon,
  };

  const [types, setTypes] = useState([defaultState]);
  const [filterSelected, setFilterSelected] = useState(defaultState);

  const getAllPokemon = async () => {
    const { data } = await axios.get(endpointAllPokemon);

    console.log(data);

    let allPokemon = data?.results?.map(
      (pokemon: AllPokemonResultType) => pokemon?.url
    );
  };

  /* return (
    <PokemonContext.Provider value={{}}>{children}</PokemonContext.Provider>
  ); */
};

export { PokemonProvider };
