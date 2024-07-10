import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import styles from './LayoutMain.module.scss';

const LayoutMain = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.main}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default LayoutMain;
