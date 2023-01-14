import { IPokemon } from "../../interfaces/interfaces";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  /* @ts-ignore */
  const colorSelected = background[pokemon?.types[0]?.type.name];

  console.log(colorSelected);

  return <div>PokemonDetail</div>;
};
