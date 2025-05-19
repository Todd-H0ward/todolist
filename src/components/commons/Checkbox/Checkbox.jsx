import { clsx } from 'clsx';
import { bool, func, string } from 'prop-types';

import { Arrow } from 'components/icons/index.js';

import styles from './Checkbox.module.scss';

const Checkbox = ({ checked, onChange, className, ...props }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={clsx(styles.root, className)}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        {...props}
      />
      <Arrow className={clsx(styles.icon, checked && styles.visible)} />
    </div>
  );
};

Checkbox.propTypes = {
  checked: bool.isRequired,
  onChange: func.isRequired,
  className: string,
};

export default Checkbox;
