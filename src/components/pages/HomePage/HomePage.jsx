import Controls from 'components/pages/HomePage/Controls';
import TaskInput from 'components/pages/HomePage/TaskInput';
import TasksList from 'components/pages/HomePage/TasksList';

import styles from './HomePage.module.scss';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Todos</h1>
      <TaskInput />
      <Controls />
      <TasksList />
    </div>
  );
};

export default HomePage;
