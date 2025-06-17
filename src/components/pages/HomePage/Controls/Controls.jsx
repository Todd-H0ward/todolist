import { FILTERS } from 'constants/filters.js';

import { clsx } from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/commons/Button';

import { selectFilters, selectTasks } from 'store/selectors/taskSelectors.js';
import { removeCompleted, setFilter } from 'store/slices/taskSlice.js';

import styles from './Controls.module.scss';

const Controls = () => {
  const tasks = useSelector(selectTasks);
  const filter = useSelector(selectFilters);
  const dispatch = useDispatch();

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
