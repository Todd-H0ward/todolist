import { clsx } from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/commons/Button';
import Input from 'components/commons/Input';
import { ChevronDown } from 'components/icons';

import { addTask, toggleAll } from 'store/slices/taskSlice';

import styles from './TaskInput.module.scss';

const TaskInput = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const handleTaskTitleChange = (e) => setTaskTitle(e.target.value);

  const addNewTask = () => {
    const newTaskTitle = taskTitle.trim();

    if (!newTaskTitle) return;

    const newTask = {
      id: Date.now(),
      title: newTaskTitle,
      isCompleted: false,
    };

    dispatch(addTask(newTask));
    setTaskTitle('');
  };

  const toggleAllTasks = () => {
    dispatch(toggleAll());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addNewTask();
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={clsx(styles.btn, tasks.length && styles.visible)}
        onClick={toggleAllTasks}
        clear
      >
        <ChevronDown />
      </Button>
      <Input
        className={styles.root}
        value={taskTitle}
        onChange={handleTaskTitleChange}
        onKeyDown={handleKeyDown}
        onBlur={addNewTask}
        placeholder="What needs to be done?"
        autoFocus
      />
    </div>
  );
};

export default TaskInput;
