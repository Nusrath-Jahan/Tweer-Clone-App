import React, { useContext } from 'react';
import { AppContext } from './App';

const Profile = () => {
  const { user } = useContext(AppContext);

  return (
    <div className="profile">
     
     <h1>Twitter Clone</h1>
    </div>
  );
};

export default Profile;