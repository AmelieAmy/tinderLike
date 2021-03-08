import React from 'react';
import Avatar from "@material-ui/core/Avatar";

// style
import '../style/chatRow.css'


const chatRow = ({ name, message, profilePic, timestamp }) =>
{
    return (
        <div className="chatRow" >
            < Avatar className="chat__image" alt={name} src={profilePic} / >
            <div className="chat__details" >
                <h2>{name}</h2>
                <p>{message}</p>
            </div>
            <p className="chat__timestamp" >{timestamp}</p>
        </div>
    )
}

export default chatRow;
