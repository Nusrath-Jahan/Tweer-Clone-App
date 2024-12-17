import React, { useContext } from 'react';
import { AppContext } from './App';

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="profile">
     
      <h2>{user.name}</h2>
    </div>
  );
};

export default Profile;