import { IPokemon } from "../../../../interfaces/interfaces";
import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div className={styles.stats}>
      <div>
        <span>{pokemon?.weight}</span>
        <p>Weight</p>
      </div>
      <div>
        <span>{pokemon?.height}</span>
        <p>Height</p>
      </div>
    </div>
  );
};
