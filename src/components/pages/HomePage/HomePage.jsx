import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Controls from 'components/pages/HomePage/Controls';
import TaskInput from 'components/pages/HomePage/TaskInput';
import TasksList from 'components/pages/HomePage/TasksList';

import { addTask } from 'store/slices/taskSlice.js';

import { useClickOutside } from 'hooks/useClickOutside.js';

import s from './HomePage.module.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const formRef = useRef(null);
  const [taskTitle, setTaskTitle] = useState('');

  const handleTaskTitleChange = (e) => setTaskTitle(e.target.value);

  const addNewTask = () => {
    const newTaskTitle = taskTitle.trim();

    if (!newTaskTitle) return;

    const newTask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false,
    };

    dispatch(addTask(newTask));
    setTaskTitle('');
  };

  useClickOutside(formRef, addNewTask);

  return (
    <div className={s.root}>
      <h1 className={s.title}>Todos</h1>
      <div className={s.form} ref={formRef}>
        <TaskInput
          value={taskTitle}
          onChange={handleTaskTitleChange}
          addTask={addNewTask}
        />
        <Controls />
        <TasksList />
      </div>
    </div>
  );
};

export default HomePage;
