import { useContext, useEffect, useState } from 'react';
import { InsertWeightContext } from '../../contexts/InsertWeightContext';
import styles from  './styles.module.scss';

export function WeightInput() {

  const insertWeightContext = useContext(InsertWeightContext);

  const [weightInteger, setWeightInteger] = useState(90);
  const [weightDecimal, setWeightDecimal] = useState(0);

  const handleWeight = () => {
    const newWeight = weightDecimal > 0 ? Number(`${weightInteger}.${weightDecimal}`) : weightInteger;
    insertWeightContext.handleWeight(newWeight);
  }

  useEffect(handleWeight, [weightInteger, weightDecimal])

  const handleInteger = event => {
    const n = Number(event.target.value);
    if (n && !isNaN(n)) {
      setWeightInteger(n < 0 ? 0 : n > 999 ? 999 : n);
    } else {
      setWeightInteger(0);
    }
  }

  const handleDecimal = event => {
    const n = Number(event.target.value);
    if (n && !isNaN(n)) {
      setWeightDecimal(n < 0 ? 0 : n > 999 ? 999 : n);
    } else {
      setWeightDecimal(0);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input type="text" value={weightInteger} onChange={handleInteger} />
        <div>Quilos</div>
      </div>
      <div className={styles.inputContainer}>
        <input type="text" value={weightDecimal} onChange={handleDecimal} />
        <div>Gramas</div>
      </div>
    </div>
  )
}
