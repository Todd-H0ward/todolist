import { useSelector } from 'react-redux';

import TaskItem from 'components/commons/TaskItem';

import styles from './TasksList.module.scss';

const TasksList = () => {
  const tasks = useSelector((state) => state.task.tasks);
  const filter = useSelector((state) => state.task.filter);

  const filteredTasks = tasks.filter((task) => {
    switch (filter) {
      case 'all':
        return true;
      case 'active':
        return !task.isCompleted;
      case 'completed':
        return task.isCompleted;
      default:
        return true;
    }
  });

  if (!filteredTasks.length) {
    return null;
  }

  return (
    <ul className={styles.root}>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TasksList;
