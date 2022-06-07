import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: {
    fontSize: 12,
    color: "#9CADC8",
    letterSpacing: -0.17,
  },
  unread: {
    color: "#000000!important",
    fontWeight: "bolder"
  }
}));

const ChatContent = ({ conversation }) => {
  const classes = useStyles();

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  const unread = conversation.messages.some((message) =>
    message.readStatus === false && message.senderId === otherUser.id
  )

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={ `${classes.username} ${unread && classes.unread}` }>
          {otherUser.username}
        </Typography>
        <Typography className={ `${classes.previewText} ${unread && classes.unread}` }>
          {latestMessageText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
