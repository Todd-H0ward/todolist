import { clsx } from 'clsx';
import { bool, func, node, string } from 'prop-types';

import s from './Button.module.scss';

const Button = ({ onClick, clear, children, className, ...props }) => {
  return (
    <button
      className={clsx(s.root, clear && s.clear, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: func,
  clear: bool,
  children: node.isRequired,
  className: string,
};

export default Button;
