import { IPokemon } from "../../interfaces/interfaces";
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
      <span>components...</span>
    </div>
  );
};
