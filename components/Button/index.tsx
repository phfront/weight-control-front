import styles from  './styles.module.scss';

export interface ButtonProps {
  label: string;
  click: () => any;
}

export function Button(props: ButtonProps) {
  return <button className={styles.button} onClick={props.click} >{ props.label }</button>;
}
