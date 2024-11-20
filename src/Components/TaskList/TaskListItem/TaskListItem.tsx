import { ITaskListItemProps } from './TaskListItem.props';
import styles from './taskListItem.module.css';

import done from '../../../images/done.png';
import notDone from '../../../images/notDone.png';
import trash from '../../../images/trash.png';
import { Button, Img } from '../..';

export const TaskListItem = ({ text, isSuccess }: ITaskListItemProps): JSX.Element => {
 return (
  <li className={styles.li}>
   <div className={styles.image}>{isSuccess ? <Img src={done} /> : <Img src={notDone} />}</div>
   <p className={`${styles.text} ${isSuccess ? styles.textDone : ''}`}>{text}</p>
   <Button className={styles.button}>
    <div className={styles.image}>
     <Img src={trash} />
    </div>
   </Button>
  </li>
 );
};
