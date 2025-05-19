import styles from './HomePage.module.scss';
import TaskInput from './TaskInput';
import TasksList from './TasksList';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Todos</h1>
      <TaskInput />
      <TasksList />
    </div>
  );
};

export default HomePage;
