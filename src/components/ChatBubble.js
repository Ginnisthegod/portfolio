import React from 'react';
import './ChatBubble.css';

const ChatBubble = () => {
  const handleClick = () => {
    alert('Chat feature coming soon!');
  };

  return (
    <div className="chat-bubble" onClick={handleClick}>
      💬
    </div>
  );
};

export default ChatBubble;
