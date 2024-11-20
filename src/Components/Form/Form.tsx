import { Button, Input } from '..';
import styles from './form.module.css';

export const Form = (): JSX.Element => {
 return (
  <form>
   <div className={styles.inputWrp}>
    <Input className={styles.input} />
    <Button className={styles.button}>Создать</Button>
   </div>
  </form>
 );
};
