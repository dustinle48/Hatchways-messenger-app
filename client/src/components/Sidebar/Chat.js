import React from "react";
import { Box } from "@material-ui/core";
import { BadgeAvatar, ChatContent, UnreadBadge } from "../Sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 8,
    height: 80,
    boxShadow: "0 2px 10px 0 rgba(88,133,196,0.05)",
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "grab",
    },
  },
}));

const Chat = ({ conversation, setActiveChat }) => {
  const classes = useStyles();
  const { otherUser, id } = conversation;

  const handleClick = async (conversation) => {
    await setActiveChat(otherUser.username, id, otherUser.id);
  };

  const props = {
    color: "#9CADC8",
    fontWeight: "normal",
    fontSize: "1rem",
  };

  if (conversation.unreadMessageCount > 0) {
    props.color = "#000000";
    props.fontWeight = "bold";
    props.fontSize = "1.1rem";
  }

  return (
    <Box onClick={() => handleClick(conversation)} className={classes.root}>
      <BadgeAvatar
        photoUrl={otherUser.photoUrl}
        username={otherUser.username}
        online={otherUser.online}
        sidebar={true}
      />
      <ChatContent conversation={conversation} props={props} />
      <UnreadBadge unreadMessageCount={conversation.unreadMessageCount} />
    </Box>
  );
};

export default Chat;
