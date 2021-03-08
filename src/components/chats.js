import React from 'react'

// components
import ChatRow from './chatRow'

// style
import '../style/chats.css'


const chats = () => {
    return (
        <div className="chatsContainer" >
            <div className="chats" >
                < ChatRow
                name="Sasha"
                message ="Hi what'up ?!"
                timeStamp="35 seconds ago"
                profilePic="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                / >
                < ChatRow
                name="John"
                message ="Hi what'up ?!"
                timeStamp="35 seconds ago"
                profilePic="https://images.pexels.com/photos/4783536/pexels-photo-4783536.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                / >
                < ChatRow
                name="Eric"
                message ="Hi what'up ?!"
                timeStamp="35 seconds ago"
                profilePic="https://images.pexels.com/photos/3695799/pexels-photo-3695799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                / >
                < ChatRow
                name="Judith"
                message ="Hi what'up ?!"
                timeStamp="35 seconds ago"
                profilePic="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                / >
            </div>
        </div>
    )
}

export default chats;
