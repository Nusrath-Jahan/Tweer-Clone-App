import React, { useState, useContext } from 'react';
import { AppContext } from './App';
import "./TweetInputModule.css";

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');
  const { user } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTweet({ content: tweet, author: user.name, date: new Date() });
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
         className="tweet-input"
        placeholder="What's happening?"
      />
      
      <button className="post-input" type="submit">Tweet</button>
    </form>
  );
};

export default TweetInput;