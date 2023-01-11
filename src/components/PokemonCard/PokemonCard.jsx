import { usePokemon } from "../../hooks/usePokemon";
import styles from "./style.module.scss";

interface Props {
  url: String;
}

export const PokemonCard = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);

  return <div>PokemonCard</div>;
};
