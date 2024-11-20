import { ITaskListItemProps } from './TaskListItem.props';
import { Button, Img } from '../..';

import done from '../../../images/done.png';
import notDone from '../../../images/notDone.png';
import trash from '../../../images/trash.png';

import styles from './taskListItem.module.css';

export const TaskListItem = ({
 id,
 text,
 isSuccess,
 changeStatus,
 activatedPopupDelete,
}: ITaskListItemProps): JSX.Element => {
 return (
  <li className={styles.li}>
   <div className={styles.image}>{isSuccess ? <Img src={done} /> : <Img src={notDone} />}</div>
   <p
    onClick={() => changeStatus(id, isSuccess)}
    className={`${styles.text} ${isSuccess ? styles.textDone : ''}`}>
    {text}
   </p>
   <Button className={styles.button}>
    <div onClick={() => activatedPopupDelete(id)} className={styles.image}>
     <Img src={trash} />
    </div>
   </Button>
  </li>
 );
};
