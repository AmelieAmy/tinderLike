import React from 'react'

// components
import ChatRow from './chatRow'

// style
import '../style/chats.css'


const chats = () => {
    return (
        <div className="chats" >
            < ChatRow
            name="Sasha"
            message ="Hi what'up ?!"
            timeStamp="35s ago"
            profilePic="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            / >
        </div>
    )
}

export default chats;
