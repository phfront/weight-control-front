import { IWeight } from "../../shared/models/weight";
import styles from "./styles.module.scss";
import { formatDate } from "../../shared/utils/formatDate";
import { IconButton } from "../IconButton";
import { useContext } from "react";
import { WeightControlContext } from "../../contexts/WeightControlContext";

export interface WeightListProps {
  list: IWeight[];
}

export function WeightList(props: WeightListProps) {
  const { list } = props;

  const weightControlContext = useContext(WeightControlContext);

  return (
    <div className={styles.container}>
      <table>
        <tr>
          <th></th>
          <th>Peso</th>
          <th>Data</th>
        </tr>
        {props.list.map((weight) => (
          <tr key={weight._id}>
            <td>
              <IconButton
                path="svg/trash.svg"
                click={() => weightControlContext.removeWeight(weight)}
              />
            </td>
            <td>
              <div className={styles.weight}>{weight.weight}</div>
            </td>
            <td>
              <div className={styles.date}>{formatDate(weight.datetime)}</div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
