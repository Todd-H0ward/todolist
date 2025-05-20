import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Button from 'components/commons/Button/index.js';
import Input from 'components/commons/Input';
import { ChevronDown } from 'components/icons';

import { addTask, toggleAll } from 'store/slices/taskSlice';

import styles from './TaskInput.module.scss';

const TaskInput = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const dispatch = useDispatch();

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
      <Button className={styles.btn} clear onClick={toggleAllTasks}>
        <ChevronDown />
      </Button>
      <Input
        className={styles.root}
        value={taskTitle}
        onChange={handleTaskTitleChange}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        autoFocus
      />
    </div>
  );
};

export default TaskInput;
