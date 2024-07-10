import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__title}>
        {'Виконано в '}
        <a href="https://prometheus.org.ua/">Prometheus</a>
        {' © 2024'}
        </span>
    </footer>
  );
};

export default Footer;
