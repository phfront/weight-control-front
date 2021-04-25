import { useContext, useState } from 'react';
import { InsertWeightContext } from '../../contexts/InsertWeightContext';
import styles from  './styles.module.scss';

export function WeightDate() {

  const insertWeightContext = useContext(InsertWeightContext);

  const handleDate = event => {
    const newDate = event.target.value;
    insertWeightContext.handleDate(newDate);
  }

  return (
    <div className={styles.container}>
      <input type="datetime-local" value={insertWeightContext.date} onChange={handleDate} />
    </div>
  )
}
