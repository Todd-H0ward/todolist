import { clsx } from 'clsx';
import { shape, string, bool } from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/commons/Button';
import Checkbox from 'components/commons/Checkbox';
import { Trash } from 'components/icons';

import { removeTask, toggleComplete } from 'store/slices/taskSlice.js';

import useClickOutside from 'hooks/useClickOutside.js';

import styles from './TaskItem.module.scss';

const TaskItem = ({ task, className }) => {
  const dispatch = useDispatch();
  const [isSelected, setIsSelected] = useState(false);
  const checkboxRef = useRef(null);

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleTaskClick = () => {
    dispatch(toggleComplete(task.id));
    setIsSelected(true);
  };

  const removeSelection = () => {
    if (isSelected) {
      setIsSelected(false);
    }
  };

  useClickOutside(checkboxRef, removeSelection);

  return (
    <li className={clsx(styles.root, isSelected && styles.selected, className)}>
      <Checkbox
        checked={task.isCompleted}
        onChange={handleTaskClick}
        ref={checkboxRef}
      />
      <span className={task.isCompleted && styles.completed}>{task.title}</span>
      <Button className={styles.deleteBtn} clear onClick={handleDelete}>
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
