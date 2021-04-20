import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

// assets
import Avatar from "@material-ui/core/Avatar";
import database from '../../assets/firebase'

// style
import '../../style/CHATS/chatRow.css'


const ChatRow = () =>
{
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const unsubscribe =
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map((doc) => doc.data())
        )))

        return () => {
            unsubscribe();
        }

    }, [])
    
    return (
        <div>
            { people.map((person) => (
                person.candidat === false && 
                <Link to={`/chat/${person.name}`} >
                    <div className="chatRow" >
                        <Avatar className="chat__image" alt={person.name} src={person.url} />
                        <div className="chat__details" >
                            <h2>{person.name}</h2>
                            <p>{person.message}</p>
                        </div>
                        <div className="chat__timestamp">
                            <p>Reçu il y a</p>
                            <p>{person.timeStamp}</p>
                        </div>
                    </div>
                </Link>
            ) )}
        </div>
    )
}

export default ChatRow;
