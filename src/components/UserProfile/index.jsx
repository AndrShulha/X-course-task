import styles from './UserProfile.module.scss';

const UserProfile = ({ userName, avatarUrl }) => {
  const avatarSrc = avatarUrl || 'avatar.svg';
  return (
    <div className={styles.profile}>
      <div className={styles.profile__avatar}>
        <img src={avatarSrc} alt={userName} className={styles.profile__avatar_img} />
      </div>
      <div className={styles.profile__name}>{userName}</div>
    </div>
  );
};

export default UserProfile;
