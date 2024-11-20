import { IButtonProps } from './Button.props';

import styles from './button.module.css';

export const Button = ({ children, className, ...props }: IButtonProps): JSX.Element => {
 return (
  <button className={`${className} ${styles.button}`} {...props}>
   {children}
  </button>
 );
};
