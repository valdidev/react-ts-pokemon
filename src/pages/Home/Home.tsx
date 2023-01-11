import { IconSmPokeball } from "../../assets/pokemonIcons";
import { PokemonList } from "../../components/PokemonList/PokemonList";

import styles from "./styles.module.scss";

export const Home = () => {
  return (
    <div className={styles.home}>
      <header>
        <div>
          <IconSmPokeball />
          <span>Pokémon</span>
        </div>
      </header>
      <PokemonList />
    </div>
  );
};
