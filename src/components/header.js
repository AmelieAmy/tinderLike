import React from 'react';
import { Link } from "react-router-dom";


// style
import "../style/header.css"

// assets
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton';
import Logo from '../assets/tinderLikeLogo.svg'


const header = () =>
{
    return (
        <header>
            <Link to="/">
                <IconButton>
                    <PersonIcon fontSize="large" className="header__icons" />
                </IconButton>
            </Link>
            <img src={Logo} alt="blabla" />
            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon fontSize="large" className="header__icons" />
                </IconButton>
            </Link>
        </header>
    );
}

export default header;
