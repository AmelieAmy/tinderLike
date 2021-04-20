import React, { useState, useEffect } from 'react'

// components
import Header from '../header'

// assets
import Avatar from "@material-ui/core/Avatar";
import database from '../../assets/firebase'

// styles
import '../../style/CHATS/chatScreen.css'


const ChatScreen = () => {

    const [people, setPeople] = useState([]);
    const [conv, setConv] = useState([]);
    const [input, setInput] = useState('');

    const currentPath = window.location.pathname;
    const lastword = (words) => {
        let w = words.split("/");
        return w[w.length - 1];
    }    
    const subPageLink = lastword(currentPath)

    useEffect(() => {
        const unsubscribe =
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map((doc) => doc.data())
        )))

        return () => {
            unsubscribe();
        }

    }, [])


    useEffect(() => {
        
        const currentPath = window.location.pathname;
        const lastword = (words) => {
            let w = words.split("/");
            return w[w.length - 1];
        }    
        const subPageLink = lastword(currentPath)

        let collect = subPageLink + "Conv"
        const unsubscribe =
        database.collection(collect).onSnapshot(snapshot => (
            setConv(snapshot.docs.map((doc) => doc.data())
        )))

        return () => {
            unsubscribe();
        }

    }, [])
    
    const handleSend = (e) =>
    {
        e.preventDefault();
        setConv([...conv, { message: input, name: "user", url: "https://avatars.githubusercontent.com/u/48482689?v=4"}]);
        setInput('');
    }

    return (
        <div className="chatScreen" >
        { people.map((person) => (
            person.candidat === false && person.name === subPageLink &&
            <div>
                <Header backButton="/chat" />
                <p className="chatScreen__machingInfos" >You matched with {person.name} on {person.timeMatch}</p>
                { conv.map((sms) => (
                    <div className={sms.name === "user" ? "chatScreen__messageBox user" : "chatScreen__messageBox"}>
                        <Avatar className="chatScreen__image" alt={sms.name} src={sms.name === "user" ? sms.url : person.url} />
                        <p className="chatScreen__text">{sms.message}</p>
                    </div>
                )) }
                <form className="chatScreen__input" >
                    <input className="chatScreen__inputField" value={input} onChange={(e) => setInput(e.target.value) } type="text" placeholder="Type a message..." />
                    <button onClick={handleSend} className="chatScreen__inputButton">Send</button>
                </form>
            </div>
        ))}
        </div>
    )
}

export default ChatScreen
