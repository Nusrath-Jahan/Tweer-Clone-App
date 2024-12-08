import React, { useState } from 'react';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <li>
      <p>{tweet.content}</p>
      <p>Author: {tweet.author}</p>
      <p>Date: {new Date(tweet.date).toLocaleString()}</p>
      <TweetInteractions likes={likes} onLike={handleLike} />
    </li>
  );
};

export default Tweet;