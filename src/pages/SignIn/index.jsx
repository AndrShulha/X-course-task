import { useState } from 'react';

import Button from '../../components/ui/Button';
import InputFiled from '../../components/ui/InputFiled';
import { useAuth } from '../../context/AuthContext';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const [userName, setUserName] = useState('');
  const { login, setDataUser } = useAuth();
  const checkName = () => {
    setDataUser(prev => ({
      ...prev,
      userName,
    }));
    login();
  }
  return (
    <section className={styles.sign_in}>
      <div className={styles.sign_in__avatar}>
        <img src="./avatar.svg" alt="" className={styles.sign_in__avatar_img} />
      </div>
      <form onSubmit={checkName}>
        <div className={styles.sign_in__form}>
          <InputFiled
            label="User name"
            placeholder="type Username"
            value={userName}
            onChange={(event) => {setUserName(event.target.value)}}
          />
          <Button
            type="submit"
            mods={['modeSize1', 'modColorPrime', 'full_width']}
            disabled={Boolean(userName.length < 4 || userName.length > 16)}
          >
            Sign-In
          </Button>
        </div>
      </form>
    </section>
  );
};

export default SignIn;
