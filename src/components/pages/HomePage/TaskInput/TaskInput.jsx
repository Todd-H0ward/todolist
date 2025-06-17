import { clsx } from 'clsx';
import { func, string } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'components/commons/Button';
import Input from 'components/commons/Input';
import { ChevronDown } from 'components/icons';

import { selectTasks } from 'store/selectors/taskSelectors.js';
import { toggleAll } from 'store/slices/taskSlice';

import styles from './TaskInput.module.scss';

const TaskInput = ({ value, onChange, addTask }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const toggleAllTasks = () => {
    dispatch(toggleAll());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  return (
    <div className={styles.wrapper}>
      <Button
        className={clsx(styles.btn, tasks.length && styles.visible)}
        onClick={toggleAllTasks}
        clear
      >
        <ChevronDown />
      </Button>
      <Input
        className={styles.root}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        autoFocus
      />
    </div>
  );
};

TaskInput.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  addTask: func.isRequired,
};

export default TaskInput;
