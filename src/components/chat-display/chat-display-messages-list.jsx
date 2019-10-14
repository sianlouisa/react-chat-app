import React from "react";
import ChatDisplayMessagesBubble from "./chat-display-messages-bubble";

const ChatDisplayMessagesList = ({ previousMessages }) => {
  return (
    <div className="chat-display-messages-list">
      {previousMessages.map(previousMessage => 
        <ChatDisplayMessagesBubble
          key={previousMessage._id}
          previousMessage={previousMessage} />
      )}
    </div>
  );
}

export default ChatDisplayMessagesList;