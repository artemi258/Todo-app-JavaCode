import { Img } from '../../Components';

import logo from '../../images/Logo.png';

import styles from './header.module.css';

export const Header = (): JSX.Element => {
 return (
  <header className={styles.header}>
   <div className={styles.logo}>
    <Img src={logo} alt='logo' />
   </div>
  </header>
 );
};
