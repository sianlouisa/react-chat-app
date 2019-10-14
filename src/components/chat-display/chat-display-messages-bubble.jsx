import React from "react";

const ChatDisplayMessagesBubble = ({ previousMessage }) => {
  return (
    <div className={`${previousMessage.author === 'You' ? 'sent-bubble' : 'received-bubble'} chat-display-messages-bubble`}>
      {previousMessage.author === "You" ? null : <div className="author">{previousMessage.author}</div>}
      <div className="message">{previousMessage.message}</div>
      <div className="timestamp">{previousMessage.timestamp}</div>
    </div>
  );
}

export default ChatDisplayMessagesBubble; 