import { useAppSelector } from '../../hooks';
// import { ITaskListProps } from './TaskList.props';
import styles from './taskList.module.css';
import { TaskListItem } from './TaskListItem/TaskListItem';

export const TaskList = (): JSX.Element => {
 const { tasks } = useAppSelector((state) => state.TaskListSlice);

 const taskRender = tasks.map(({ id, text, isSuccess }) => (
  <TaskListItem key={id} text={text} isSuccess={isSuccess} />
 ));

 return (
  <div className={styles.taskList}>
   <div className={styles.count}>Количество: {tasks.length}</div>
   <ul>{taskRender}</ul>
  </div>
 );
};
