import { IPokemon } from "../../../../interfaces/interfaces";
import { IconXlPokeball } from "../../../../assets/pokemonIcons";
import { useNavigate } from "react-router-dom";

interface Props {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  return (
    <header>
      <IconXlPokeball />
      <div>
        <span>arrow</span>
        <span onClick={() => navigate(-1)}>{pokemon?.name}</span>
      </div>
      <p>{pokemon?.id}</p>
    </header>
  );
};
