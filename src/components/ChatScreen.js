import React, { useState } from 'react'

// components
import Header from './header'

// assets
import Avatar from "@material-ui/core/Avatar";

// styles
import '../style/chatScreen.css'


const ChatScreen = () => {

    const [messages, setMessages] = useState([
        {
            name:"Bibi",
            profile: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            message: "Hey"
        },
        {
            name:"Babar",
            profile: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            message: "Pouet"
        },
        {
            message: "Plouf"
        }
    ])

    return (
        <div className="chatScreen" >
            <Header backButton="/chat" />
            <p className="chatScreen__machingInfos" >You matched with Ellen on 10/08/2020</p>
            { messages.map((message) => (
                message.name ?
                ( <div className="chatScreen__messageBox" >
                    < Avatar className="chatScreen__image" alt={message.name} src={message.profile} / >
                    <p className="chatScreen__text" >{message.message}</p>
                </div>
                ) : (
                <div className="chatScreen__messageBox" >
                    <p className="chatScreen__textUser" >{message.message}</p>
                </div>
                )
            )) }
        </div>
    )
}

export default ChatScreen
