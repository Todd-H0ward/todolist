import { clsx } from 'clsx';
import { shape, string, bool } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeTask, toggleComplete } from 'store/slices/taskSlice.js';

import Button from 'components/commons/Button';
import Checkbox from 'components/commons/Checkbox';
import { Trash } from 'components/icons';

import styles from './TaskItem.module.scss';

const TaskItem = ({ task, className }) => {
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(removeTask(task.id));
  };

  const onComplete = () => {
    dispatch(toggleComplete(task.id));
  };

  return (
    <li className={clsx(styles.root, className)}>
      <Checkbox checked={task.isCompleted} onChange={onComplete} />
      <span className={task.isCompleted && styles.completed}>{task.title}</span>
      <Button className={styles.deleteBtn} clear onClick={onDelete}>
        <Trash />
      </Button>
    </li>
  );
};

TaskItem.propTypes = {
  task: shape({
    id: string.isRequired,
    title: string.isRequired,
    isCompleted: bool.isRequired,
  }),
  className: string,
};

export default TaskItem;
