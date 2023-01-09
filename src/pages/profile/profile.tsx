import React, {FC} from 'react';
import styles from './profile.module.scss';
import ProfileNav from '../../components/profile-nav/profile-nav';
import UserForm from '../../components/user-form/user-form';

const ProfilePage: FC = () => {
  return (
    <div className={styles.container}>
      <ProfileNav />
      <UserForm />
    </div>
  );
};

export default ProfilePage;
