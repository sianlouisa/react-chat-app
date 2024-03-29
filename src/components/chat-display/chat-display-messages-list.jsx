import React from "react";
import ChatDisplayMessagesBubble from "./chat-display-messages-bubble";

const ChatDisplayMessagesList = ({ previousMessages, user }) => {
  return (
    <ul className="chat-display-messages-list">
      {previousMessages.map(previousMessage => 
        <ChatDisplayMessagesBubble
          key={previousMessage._id}
          className={user === previousMessage.author ? "sent-bubble" : "received-bubble"}
          previousMessage={previousMessage} />
      )}
    </ul>
  );
}

export default ChatDisplayMessagesList;