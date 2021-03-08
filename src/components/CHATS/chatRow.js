import React from 'react';
import { Link } from "react-router-dom";

// assets
import Avatar from "@material-ui/core/Avatar";

// style
import '../../style/chatRow.css'


const chatRow = ({ name, message, profilePic, timeStamp }) =>
{
    return (
        <Link to={`/chat/${name}`} >
            <div className="chatRow" >
                < Avatar className="chat__image" alt={name} src={profilePic} / >
                <div className="chat__details" >
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className="chat__timestamp" >{timeStamp}</p>
            </div>
        </Link>
    )
}

export default chatRow;
