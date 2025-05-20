import Controls from 'components/pages/HomePage/Controls/index.js';
import TaskInput from 'components/pages/HomePage/TaskInput/index.js';
import TasksList from 'components/pages/HomePage/TasksList/index.js';

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
