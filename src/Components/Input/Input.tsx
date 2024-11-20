import { IInputProps } from './Input.props';

import styles from './input.module.css';

export const Input = ({ className, ...props }: IInputProps): JSX.Element => {
 return <input className={`${styles.input} ${className}`} {...props} />;
};
