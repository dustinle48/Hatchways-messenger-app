import React from 'react'
import { Badge, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#3F92FF",
        color: "#ffffff",
        marginRight: 20,
        fontSize: 15,
        padding: 10,
        cornerRadius: "50%",
    },
}));

const UnreadBadge = ({ unreadMessageCount }) => {
    const classes = useStyles();
    
    return (
        <Badge badgeContent={unreadMessageCount} classes={{ badge: `${classes.root}`}} />
    )
}

export default UnreadBadge
