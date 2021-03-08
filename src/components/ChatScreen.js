import React, { useState } from 'react'

// components
import Header from './header'

// assets
import Avatar from "@material-ui/core/Avatar";

// styles
import '../style/chatScreen.css'


const ChatScreen = () => {

    const [ input, setInput] = useState('');
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
    
    const handleSend = (e) =>
    {
        e.preventDefault();

        setMessages([...messages, { message: input}]);
        setInput('');
    }

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
            <form className="chatScreen__input" >
                <input className="chatScreen__inputField" value={input} onChange={(e) => setInput(e.target.value) } type="text" placeholder="Type a message..." />
                <button onClick={handleSend} className="chatScreen__inputButton" >Send</button>
            </form>
        </div>
    )
}

export default ChatScreen
