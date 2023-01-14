import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { PokemonType } from "../../interfaces/types";
import { background } from "../../utils/colorsByPokemonType";

import styles from "./styles.module.scss";

export const FilterByType = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { types, filterSelected, changeSelectedType } =
    useContext(PokemonContext);

  return (
    <div className={styles.ordersContainer}>
      <div className={styles.container}>
        <div className={open ? styles.orderClose : styles.orderOpen}>
          <span>{filterSelected?.name}</span>
          <span>arrow</span>
        </div>
        {open && types && (
          <div className={styles.orders}>
            {types.map((type: PokemonType) => (
              <div
                key={type.name}
                className={styles.order}
                onClick={() => changeSelectedType(type)}
                style={{
                  fontWeight: filterSelected.name === type.name ? "bold" : "",
                }}
              >
                <div
                  className={styles.color}
                  /* @ts-ignore */
                  style={{ background: background[type.name] }}
                />
                {type.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
