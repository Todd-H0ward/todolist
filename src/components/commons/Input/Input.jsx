import { clsx } from 'clsx';
import { string, func } from 'prop-types';

import styles from './Input.module.scss';

const Input = ({ value, onChange, className, ...props }) => {
  return (
    <input
      className={clsx(styles.root, className)}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
};

Input.propTypes = {
  value: string.isRequired,
  onChange: func.isRequired,
  className: string,
};

export default Input;
