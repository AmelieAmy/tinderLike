import React from 'react'

// components
import ChatRow from './chatRow'

// style
import '../../style/CHATS/chats.css'


const chats = () => {
    return (
        <div className="chatsContainer" >
            <div className="chats" >
                < ChatRow />
            </div>
        </div>
    )
}

export default chats;
