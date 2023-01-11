import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { AllPokemonResultType, PokemonType } from "../interfaces/types";

interface ContextProps {
  types: PokemonType[];
  filterSelected: PokemonType;
  filteredPokemon: string[] | null;
  changeSelectedType: (type: PokemonType) => void;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  const endpointAllPokemon =
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset-0";

  const defaultState: PokemonType = {
    name: "All",
    url: endpointAllPokemon,
  };

  const [pokemon, setPokemon] = useState(null);
  const [filteredPokemon, setFilteredPokemon] = useState(null);
  const [types, setTypes] = useState([defaultState]);
  const [filterSelected, setFilterSelected] = useState(defaultState);

  const changeSelectedType = () => {};

  const getAllPokemon = async () => {
    const { data } = await axios.get(endpointAllPokemon);

    console.log(data);

    // array of each pokemon url
    let allPokemon = data?.results?.map(
      (pokemon: AllPokemonResultType) => pokemon?.url
    );

    console.log(allPokemon);

    setPokemon(allPokemon);
    setFilteredPokemon(allPokemon);
  };

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        types,
        filterSelected,
        changeSelectedType,
        filteredPokemon,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
