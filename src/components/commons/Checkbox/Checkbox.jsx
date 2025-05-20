import { clsx } from 'clsx';
import { bool, func, string } from 'prop-types';
import { forwardRef } from 'react';

import { Arrow } from 'components/icons/index.js';

import styles from './Checkbox.module.scss';

const Checkbox = forwardRef(
  ({ checked, onChange, className, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={clsx(styles.root, className)}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <Arrow className={clsx(styles.icon, checked && styles.visible)} />
      </div>
    );
  },
);

Checkbox.displayName = 'Checkbox';

Checkbox.propTypes = {
  checked: bool.isRequired,
  onChange: func.isRequired,
  className: string,
};

export default Checkbox;
