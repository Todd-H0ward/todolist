import { clsx } from 'clsx';
import { shape, string, bool } from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/commons/Button';
import Checkbox from 'components/commons/Checkbox';
import Input from 'components/commons/Input';
import { Trash } from 'components/icons';

import {
  changeTaskTitle,
  removeTask,
  toggleComplete,
} from 'store/slices/taskSlice.js';

import useClickOutside from 'hooks/useClickOutside.js';

import styles from './TaskItem.module.scss';

const TaskItem = ({ task, className }) => {
  const dispatch = useDispatch();
  const checkboxRef = useRef(null);

  const [isSelected, setIsSelected] = useState(false);
  const [isEditable, setIsEditable] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  const changeTitle = () => {
    const newTitle = taskTitle.trim();

    if (newTitle) {
      dispatch(changeTaskTitle({ id: task.id, title: newTitle }));
    } else {
      setTaskTitle(task.title);
    }

    setIsEditable(false);
  };

  const removeSelection = () => {
    if (isSelected) {
      setIsSelected(false);
      setIsEditable(false);
    }
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleTaskClick = () => {
    dispatch(toggleComplete(task.id));
    setIsSelected(true);
  };

  const handleTaskDoubleClick = () => {
    setIsEditable(true);
  };

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setIsEditable(false);
    } else if (e.key === 'Enter') {
      changeTitle();
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
      {isEditable ? (
        <Input
          className={styles.input}
          value={taskTitle}
          onChange={handleTitleChange}
          onBlur={changeTitle}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          className={clsx(styles.title, task.isCompleted && styles.completed)}
          contentEditable={isEditable}
          onDoubleClick={handleTaskDoubleClick}
          onTouchStart={handleTaskDoubleClick}
          onBlur={changeTitle}
        >
          {task.title}
        </span>
      )}
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
