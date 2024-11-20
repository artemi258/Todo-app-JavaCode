import { FormEvent, useState } from 'react';
import { Button, Input } from '..';
import { useAppDispatch } from '../../hooks/storeHooks';
import { Create } from '../TaskList/TaskListSlice';

import styles from './form.module.css';

export const Form = (): JSX.Element => {
 const [value, setValue] = useState<string>('');
 const [error, setError] = useState<boolean>(false);
 const dispatch = useAppDispatch();

 const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!value) return setError(true);
  dispatch(Create(value));
  setValue('');
  setError(false);
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
   {error && <span className={styles.error}>Не должно быть пустым!</span>}
  </form>
 );
};
