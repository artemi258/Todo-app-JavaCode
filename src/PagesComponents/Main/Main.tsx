import { Form, TaskList } from '../../Components';

import styles from './main.module.css';

export const Main = (): JSX.Element => {
 return (
  <main className={styles.main}>
   <Form />
   <TaskList />
  </main>
 );
};
