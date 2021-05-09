import { useContext, useState } from 'react';
import { InsertWeightContext, InsertWeightContextProvider } from '../../contexts/InsertWeightContext';
import { WeightControlContext } from '../../contexts/WeightControlContext';
import { Button } from '../Button';
import { WeightDate } from '../WeightDate';
import { WeightInput } from '../WeightInput';
import styles from  './styles.module.scss';

export function InsertWeight() {

  const weightControlContext = useContext(WeightControlContext);
  const insertWeightContext = useContext(InsertWeightContext);

  function addWeight() {
    weightControlContext.postWeight(insertWeightContext.weight, insertWeightContext.date)
  }

  return (
    <div className={styles.container}>
      <h2>Informe o peso e a data</h2>
      <WeightInput />
      <WeightDate />
      <div className={styles.actions}>
        <Button label="Voltar" click={() => {}} />
        <Button label="Inserir" click={addWeight} />
      </div>
    </div>
  )
}
