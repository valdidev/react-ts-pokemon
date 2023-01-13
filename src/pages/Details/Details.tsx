import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";

export const Details = () => {
  const { pokemonId } = useParams();
  const { pokemon } = usePokemon("", pokemonId);

  console.log(pokemon);

  return <div>Details</div>;
};
