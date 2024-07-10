import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const Button = ({ mods=[], children, ...restProps }) => {
  const classNames = [styles.btn, ...mods.map(mod => styles[`btn--${mod}`])].join(' ');

  if ('href' in restProps) {
    const { href, ...anchorProps } = restProps;
    return (
      <a href={href} className={classNames} {...anchorProps}>
        {children}
      </a>
    );
  }

  if ('to' in restProps) {
    const { to, ...linkProps } = restProps;
    return (
      <Link to={to} className={classNames} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classNames} {...restProps}>
      {children}
    </button>
  );
}

export default Button;
