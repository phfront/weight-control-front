import { WeightGraph } from "../components/WeightGraph";
import { InsertWeight } from "../components/InsertWeight";
import { WeightList } from "../components/WeightList";
import { api } from "../services/api";
import styles from './styles.module.scss';
import { useContext, useEffect } from "react";
import { WeightControlContext } from "../contexts/WeightControlContext";
import { InsertWeightContextProvider } from "../contexts/InsertWeightContext";

export default function Index() {

  const context = useContext(WeightControlContext);

  useEffect(() => {
    context.getWeights();
  }, [])


  return (
    <div className={styles.container}>
      <div className={styles.side}>
        <InsertWeightContextProvider>
          <InsertWeight />
        </InsertWeightContextProvider>
        <WeightList list={context.weights} />
      </div>
      <WeightGraph dates={context.graphDates} weights={context.graphWeights} />
    </div>
  )
}