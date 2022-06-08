import React from 'react'

//import material UI components
import { Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';

function MessageListItem(props) {

    const unreadMsg = props.unreadFlag;

    return (
        <div className='msg-list-item'>
            <Stack direction="row" spacing={2} className='msg-list-item-info-container'>
                <Avatar sx={{ width: 40 , height: 40 }} alt={`${props.msgusername.charAt(0)}`} src="/static/images/avatar/1.jpg" />
                
                <Stack spacing={0} className='msg-list-item-info'>
                    {unreadMsg ? <p className='msg-list-item-name-bold'>{props.msgusername}</p> : <p className='msg-list-item-name'>{props.msgusername}</p>}
                    <div className="msg-list-item-title-container">
                        <p className='msg-list-item-title'>Message Title 4 sdasds sadasda sadasdasd sasd adasd asdasd sadsad</p>
                    </div>
                </Stack>

                
                
            </Stack>              
        </div>
    )
}

export default MessageListItem;