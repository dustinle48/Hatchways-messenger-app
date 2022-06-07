import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  let lastReadMessage = messages.slice().reverse().find((message) => message.senderId === userId && message.readStatus === true)

  return (
    <Box>
      {messages.map((message,index) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble key={message.id} id={message.id} text={message.text} index={index} time={time} lastReadMessageId={lastReadMessage?.id} photoUrl={otherUser.photoUrl} />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
