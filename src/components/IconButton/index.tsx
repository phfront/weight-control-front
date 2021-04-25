import { ReactNode } from 'react';
import styles from  './styles.module.scss';

export interface ButtonProps {
  click: () => any;
  path: string;
  alt?: string;
}

export function IconButton({ click, path, alt }: ButtonProps) {
  return (
    <button className={styles.button} onClick={click}>
      <img src={path} alt={alt} />
    </button>
  );
}
