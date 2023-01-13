import { PokemonCard } from "../PokemonCard/PokemonCard.js";
import styles from "./styles.module.scss";

interface Props {
  pokemonURLS?: string[] | null;
  page?: number;
  perPage?: number;
}

export const PokemonList = ({ page, pokemonURLS, perPage }: Props) => {
  return (
    <div>
      {pokemonURLS?.map((pokemonURL) => (
        <PokemonCard key={pokemonURL} url={pokemonURL} />
      ))}
    </div>
  );
};
