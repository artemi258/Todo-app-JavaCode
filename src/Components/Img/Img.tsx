import { IImgProps } from './Img.props';
import styles from './img.module.css';

export const Img = ({ className, src, alt, ...props }: IImgProps): JSX.Element => {
 return <img src={src} alt={alt} className={`${styles.img} ${className}`} {...props} />;
};
