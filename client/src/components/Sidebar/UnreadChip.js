import React from 'react'
import { Chip } from '@material-ui/core';

const UnreadChip = ({ messages,otherUser }) => {
    const unreadMessages = messages.filter(message => 
        message.readStatus === false && message.senderId === otherUser.id
    )
    
    return unreadMessages.length > 0 && ( 
        <Chip label={unreadMessages.length} color="primary">
        </Chip>
    )
}

export default UnreadChip
