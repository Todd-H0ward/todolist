import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { removeCompleted, setFilter } from 'store/slices/taskSlice.js';

import Button from 'components/commons/Button/index.js';

import styles from './Controls.module.scss';

const FILTERS = [
  {
    name: 'All',
    value: 'all',
  },
  {
    name: 'Active',
    value: 'active',
  },
  {
    name: 'Completed',
    value: 'completed',
  },
];

const Controls = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);
  const filter = useSelector((state) => state.task.filter);

  const activeTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  const handleClearCompleted = () => {
    dispatch(removeCompleted());
  };

  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };

  if (!tasks.length) return null;

  return (
    <div className={styles.root}>
      <span>{activeTasks.length} items left</span>
      <div className={styles.filters}>
        {FILTERS.map(({ name, value }) => (
          <Button
            key={name}
            className={filter === value && styles.active}
            onClick={() => handleFilterChange(value)}
          >
            {name}
          </Button>
        ))}
      </div>
      <Button
        className={clsx(styles.clear, completedTasks.length && styles.visible)}
        clear
        onClick={handleClearCompleted}
      >
        Clear completed
      </Button>
    </div>
  );
};

export default Controls;
