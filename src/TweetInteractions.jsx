import React, { useState } from 'react';

const TweetInteractions = ({ likes, onLike, onReply }) => {
  const [isReplying, setIsReplying] = useState(false); 
  const [replyText, setReplyText] = useState('');

  
  const handleReplyClick = () => {
    setIsReplying(!isReplying); 
  };

 
  const handleReplySubmit = () => {
    onReply(replyText); 
    setReplyText(''); 
    setIsReplying(false);
  };

  return (
    <div>
      <button onClick={onLike}>Like {likes}</button>
      <button>Retweet</button>
      <button onClick={handleReplyClick}>Reply</button>
      
      {isReplying && (
        <div>
          <input
            type="text"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your reply"
          />
          <button onClick={handleReplySubmit}>Submit Reply</button>
        </div>
      )}
    </div>
  );
};

export default TweetInteractions;
