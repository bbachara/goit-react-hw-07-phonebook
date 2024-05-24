import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(css.btn, {
        [css.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  selected: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  children: PropTypes.node.isRequired,
};
