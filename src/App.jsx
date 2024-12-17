import React, { useState, useEffect, createContext } from 'react';
import TweetInput from './TweetInput';
import TweetList from './TweetList';
import Sidebar from './Sidebar';
import Header from './Header';
import Profile from './Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [user, setUser] = useState({ name: 'User', profilePicture: 'user.jpg' });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
    const fetchTweets = async () => {
      try{
        const response = await fetch('https://jsonplaceholder.org/posts');
        const data = await response.json();
        const formattedTweets = data.map((post) => ({
          id: post.userId,
          content: post.thumbnail,
          user: { name: 'API User', profilePicture: 'default.jpg'},
        }));
setTweets(formattedTweets);
      } catch (error) {
        console.error('Error fetching tweets:', error);
      }
    }
    fetchTweets();
  }, []);

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  return (
    <AppContext.Provider value={{ user, theme, setTheme }}>
      <div className={`app ${theme}`}>
        {/* <Header /> */}
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList tweets={tweets} />
        </main>
      </div>
    </AppContext.Provider>
  );
};

export default App;