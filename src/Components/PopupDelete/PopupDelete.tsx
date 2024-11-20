import { Button } from '..';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { Delete } from '../TaskList/TaskListSlice';
// import { IPopupDeleteProps } from './PopupDelete.props';
import { closePopupDelete } from './PopupDeleteSlice';

import styles from './popupDelete.module.css';

export const PopupDelete = (): JSX.Element => {
 const { id, isActive } = useAppSelector((state) => state.PopupDeleteSlice);
 const dispatch = useAppDispatch();

 const onClickDelete = () => {
  dispatch(Delete(id));
  dispatch(closePopupDelete());
 };

 const onClickClose = () => {
  dispatch(closePopupDelete());
 };

 return (
  <div className={`${isActive ? styles.popupDelete : styles.popupDeleteClose}`}>
   <div className={styles.wrp}>
    <h2 className={styles.title}>Удалить?</h2>
    <div className={styles.btns}>
     <Button onClick={onClickDelete} className={styles.button}>
      Да
     </Button>
     <Button onClick={onClickClose} className={styles.button}>
      Нет
     </Button>
    </div>
   </div>
  </div>
 );
};
