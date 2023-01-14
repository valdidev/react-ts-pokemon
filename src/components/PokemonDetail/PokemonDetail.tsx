import { IPokemon } from "../../interfaces/interfaces";
import { Header } from "./components/Header/Header";
import { PokemonTypes } from "./components/PokemonTypes/PokemonTypes";
import { Title } from "./components/Title/Title";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  /* @ts-ignore */
  const colorSelected = background[pokemon?.types[0]?.type.name];

  if (!pokemon) {
    return (
      <div style={{ background: colorSelected }} className={styles.loading}>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div style={{ background: colorSelected }} className={styles.bg}>
      <Header pokemon={pokemon} />
      <div className={styles.info}>
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <PokemonTypes pokemon={pokemon} />
        <Title content="About" colorSelected={colorSelected}/>
      </div>
    </div>
  );
};
