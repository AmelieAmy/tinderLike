import React from 'react';

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
            <IconButton>
                <PersonIcon fontSize="large" className="header__icons" />
            </IconButton>
            <img src={Logo} alt="blabla" />
            <IconButton>
                <QuestionAnswerIcon fontSize="large" className="header__icons" />
            </IconButton>
        </header>
    );
}

export default header;
