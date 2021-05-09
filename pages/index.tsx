import { WeightGraph } from "../components/WeightGraph";
import { InsertWeight } from "../components/InsertWeight";
import { WeightList } from "../components/WeightList";
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
      <div className={styles.insert}>
        <InsertWeightContextProvider>
          <InsertWeight />
        </InsertWeightContextProvider>
      </div>
      <div className={styles.weights}>
        <WeightList list={context.weights} />
      </div>
      <div className={styles.graph}>
        <WeightGraph dates={context.graphDates} weights={context.graphWeights} />
      </div>
    </div>
  )
}
