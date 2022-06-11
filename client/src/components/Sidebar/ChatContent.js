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
    fontSize: (props) => props.fontSize,
  },
  previewText: {
    fontSize: 12,
    letterSpacing: -0.17,
    color: (props)  => props.color,
    fontWeight: (props) => props.fontWeight,
  },
}));

const ChatContent = ({ conversation, props }) => {
  const classes = useStyles(props);

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;
  
  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography className={classes.previewText}>
          {latestMessageText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
