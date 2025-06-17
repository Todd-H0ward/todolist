import { useSelector } from 'react-redux';

import TaskItem from 'components/commons/TaskItem';

import { selectFilteredTasks } from 'store/selectors/taskSelectors.js';

import styles from './TasksList.module.scss';

const TasksList = () => {
  const filteredTasks = useSelector(selectFilteredTasks);

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
