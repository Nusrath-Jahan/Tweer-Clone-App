import React, { useState } from 'react';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ tweet }) => {
  const [likes, setLikes] = useState(0);
  const [replies, setReplies] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };
  const handleReply = (replyText) => {
    setReplies([...replies, replyText]); 
  };

  return (
    <li>
      <p>{tweet.content}</p>
      <p>Author: {tweet.slug}</p>
      <p>Date: {new Date(tweet.publishedAt).toLocaleString()}</p>
      
      <TweetInteractions likes={likes} onLike={handleLike} onReply={handleReply} />
      <div className="replies">
        <h4>Replies:</h4>
        {replies.map((reply, index) => (
          <p key={index}>{reply}</p>
        ))}
      </div>
    </li>
  );
};

export default Tweet;