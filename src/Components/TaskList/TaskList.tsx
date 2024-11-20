import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { addId } from '../PopupDelete/PopupDeleteSlice';
import { TaskListItem } from './TaskListItem/TaskListItem';
import { Update } from './TaskListSlice';

import styles from './taskList.module.css';

export const TaskList = (): JSX.Element => {
 const dispatch = useAppDispatch();
 const { tasks } = useAppSelector((state) => state.TaskListSlice);

 const changeStatus = (id: string, isSuccess: boolean) => {
  dispatch(Update({ id, isSuccess: !isSuccess }));
 };

 const activatedPopupDelete = (id: string) => {
  dispatch(addId(id));
 };

 const taskRender = tasks.map(({ id, text, isSuccess }) => (
  <TaskListItem
   key={id}
   id={id}
   text={text}
   isSuccess={isSuccess}
   changeStatus={changeStatus}
   activatedPopupDelete={activatedPopupDelete}
  />
 ));

 return (
  <>
   <div className={styles.taskList}>
    <div className={styles.count}>Количество: {tasks.length}</div>
    <ul>{taskRender}</ul>
   </div>
  </>
 );
};
