import { clsx } from 'clsx';
import { bool, func, string } from 'prop-types';
import { forwardRef } from 'react';

import { Arrow } from 'components/icons';

import s from './Checkbox.module.scss';

const Checkbox = forwardRef(
  ({ checked, onChange, className, ...props }, ref) => {
    return (
      <div className={s.root}>
        <input
          ref={ref}
          className={clsx(s.input, className)}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          {...props}
        />
        <Arrow className={clsx(s.icon, checked && s.visible)} />
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
