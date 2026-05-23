import React, { useState } from 'react';
import './ChatBubble.css';

const ChatBubble = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="chat-bubble" onClick={() => setShow(!show)}>
      💬
      {show && <div className="chat-tooltip">Chat feature coming soon!</div>}
    </div>
  );
};

export default ChatBubble;
