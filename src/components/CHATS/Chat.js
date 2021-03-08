import React from "react";

// components
import Header from '../header'
import Chats from './chats'
import BottomNav from '../bottomNav'

// assets

// styles


const Chat = () =>
{
    return(
        <>
            <Header backButton="/" />
            <Chats />
            <BottomNav />
        </>
    )
}

export default Chat;