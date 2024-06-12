import { WeightGraph } from "../components/WeightGraph";
import { InsertWeight } from "../components/InsertWeight";
import { WeightList } from "../components/WeightList";
import styles from "./styles.module.scss";
import { useContext, useEffect, useState } from "react";
import { WeightControlContext } from "../contexts/WeightControlContext";
import { InsertWeightContextProvider } from "../contexts/InsertWeightContext";

export default function Index() {
  const context = useContext(WeightControlContext);

  useEffect(() => {
    context.getWeights();
  }, []);

  const [c, setC] = useState("aguardando");

  const test = () => {
    setC("processando");
    setTimeout(() => {
      let j;
      for (let i = 0; i < 100000000000; i++) {
        j = i;
      }
      setC("finalizou" + j);
    }, 1000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.insert}>
        <p>
          <button onClick={test}>Test</button>
        </p>
        <p>{c}</p>
        <InsertWeightContextProvider>
          <InsertWeight />
        </InsertWeightContextProvider>
      </div>
      <div className={styles.weights}>
        <WeightList list={context.weights} />
      </div>
      <div className={styles.graph}>
        <WeightGraph
          dates={context.graphDates}
          weights={context.graphWeights}
        />
      </div>
    </div>
  );
}
