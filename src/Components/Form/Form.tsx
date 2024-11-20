import { FormEvent, useState } from 'react';
import { Button, Input } from '..';
import { useAppDispatch } from '../../hooks/storeHooks';
import styles from './form.module.css';
import { Create } from '../TaskList/TaskListSlice';

export const Form = (): JSX.Element => {
 const [value, setValue] = useState<string>('');
 const dispatch = useAppDispatch();

 const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  dispatch(Create(value));
  setValue('');
 };

 return (
  <form onSubmit={onSubmit}>
   <div className={styles.inputWrp}>
    <Input
     value={value}
     onChange={(e) => setValue(e.target.value)}
     type='text'
     name='text'
     className={styles.input}
    />
    <Button className={styles.button}>Создать</Button>
   </div>
  </form>
 );
};
