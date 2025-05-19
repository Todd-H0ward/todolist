import { useSelector } from 'react-redux';

import TaskItem from 'components/commons/TaskItem';

import styles from './TasksList.module.scss';

const TasksList = () => {
  const tasks = useSelector((state) => state.task.tasks);

  if (!tasks.length) {
    return null;
  }

  return (
    <ul className={styles.root}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
