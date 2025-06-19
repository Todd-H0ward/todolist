import { clsx } from 'clsx';
import { shape, string, bool } from 'prop-types';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/commons/Button';
import Checkbox from 'components/commons/Checkbox';
import Input from 'components/commons/Input';
import { Trash } from 'components/icons';

import {
  selectEditingTaskId,
} from 'store/selectors/taskSelectors.js';
import {
  changeTaskTitle,
  removeTask,
  setEditingTaskId,
  toggleComplete,
} from 'store/slices/taskSlice.js';

import { useClickOutside } from 'hooks/useClickOutside.js';

import styles from './TaskItem.module.scss';

const TaskItem = ({ task, className }) => {
  const dispatch = useDispatch();
  const editingTaskId = useSelector(selectEditingTaskId);

  const checkboxRef = useRef(null);
  const inputRef = useRef(null);

  const [isSelected, setIsSelected] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.title);

  const isEditable = editingTaskId === task.id;

  const changeTitle = () => {
    const newTitle = taskTitle.trim();

    if (newTitle) {
      dispatch(changeTaskTitle(newTitle));
    } else {
      setTaskTitle(task.title);
    }

    dispatch(setEditingTaskId(null));
  };

  const clearIsEditable = () => {
    setTaskTitle(task.title);
    dispatch(setEditingTaskId(null));
  };

  const removeSelection = () => {
    if (isSelected) {
      setIsSelected(false);
      dispatch(setEditingTaskId(null));
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
    dispatch(setEditingTaskId(task.id));
  };

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      clearIsEditable();
    }

    if (e.key === 'Enter') {
      changeTitle();
    }
  };

  useClickOutside(checkboxRef, removeSelection);
  useClickOutside(inputRef, clearIsEditable, true);

  return (
    <li className={clsx(styles.root, isSelected && styles.selected, className)}>
      <Checkbox
        checked={task.isCompleted}
        onChange={handleTaskClick}
        ref={checkboxRef}
      />
      {isEditable ? (
        <Input
          ref={inputRef}
          className={styles.input}
          value={taskTitle}
          onChange={handleTitleChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span
          className={clsx(styles.title, task.isCompleted && styles.completed)}
          onDoubleClick={handleTaskDoubleClick}
          onTouchStart={handleTaskDoubleClick}
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
