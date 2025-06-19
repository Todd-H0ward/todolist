import { clsx } from 'clsx';
import { string, func } from 'prop-types';
import {forwardRef} from "react";

import styles from './Input.module.scss';

const Input = forwardRef(({ value, onChange, className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={clsx(styles.root, className)}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
});

Input.displayName = 'Input';

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  className: string,
};

export default Input;
