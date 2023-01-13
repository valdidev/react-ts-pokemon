import { useContext } from "react";
import { IconSmPokeball } from "../../assets/pokemonIcons";
import { PokemonList } from "../../components/PokemonList/PokemonList";
import { PokemonContext } from "../../context/PokemonContext";

import styles from "./styles.module.scss";

export const Home = () => {
  const { filteredPokemon } = useContext(PokemonContext);

  return (
    <div className={styles.home}>
      <header>
        <div>
          <IconSmPokeball />
          <span>Pokémon</span>
        </div>
      </header>
      <PokemonList pokemonURLS={filteredPokemon} />
    </div>
  );
};
