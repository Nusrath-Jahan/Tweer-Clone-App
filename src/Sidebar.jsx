import React, { useContext } from 'react';
import { AppContext } from './App';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import Messages from '@mui/icons-material/MailOutline';
import Notifications from '@mui/icons-material/Notifications';
import Profile from '@mui/icons-material/PermIdentity';
import More from '@mui/icons-material/AutoAwesomeMotion';

const Sidebar = () => {
  const { theme, setTheme } = useContext(AppContext);
  
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };
  
  return (
    <div className="sidebar">
        <h1>Twitter Clone</h1>
        <button  className="toggle-btn" onClick={toggleTheme}>
        {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div className="sidebar-item">
      <HomeIcon style={{ marginRight: '10px' }} />
      Home
      </div>
      <div className="sidebar-item">
      <SearchIcon style={{ marginRight: '10px' }} />
      Explore
      </div>
      <div className="sidebar-item">
        <Notifications style={{marginRight: '10px'}}/>
        Notifications</div>
      <div className="sidebar-item">
      <Messages style={{ marginRight: '10px' }} />
        Messages</div>
      <div className="sidebar-item">
        <Profile style={{ marginRight: '10px' }}/>
        Profile</div>
      <div className="sidebar-item">
        <More style={{ marginRight: '10px' }}/> More</div>
      <button className="post-button">Post</button>
    </div>
  );
};

export default Sidebar;
