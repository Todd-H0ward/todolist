import { clsx } from 'clsx';
import { func, node, string } from 'prop-types';

import styles from './Button.module.scss';

const Button = ({ onClick, children, className, ...props }) => {
  return (
    <button
      className={clsx(styles.root, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: func,
  children: node.isRequired,
  className: string,
};

export default Button;
