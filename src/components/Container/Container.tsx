import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface ContainerProps {
  children: ReactNode,
}

const Container = ({ children }: ContainerProps) => (
  <div className={styles.container}>
    Container Component
  </div>
);

export default Container;
