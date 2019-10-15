import React from "react";
import { formatDate } from "../../utils/utils";

const ChatDisplayMessagesBubble = ({ previousMessage, className }) => {
  return (
    <li className={`${className} chat-display-messages-bubble`}>
      {previousMessage.author === "You" ? null : <div className="author">{previousMessage.author}</div>}
      <div className="message">{previousMessage.message}</div>
      <div className="timestamp">{formatDate(previousMessage.timestamp)}</div>
    </li>
  );
}

export default ChatDisplayMessagesBubble; 