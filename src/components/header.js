import React from 'react';
import { Link, useHistory } from 'react-router-dom';

// style
import "../style/header.css"

// assets
import Logo from '../assets/tinderLikeLogo.svg'
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const Header = ({ backButton }) =>
{
    const history = useHistory()

    return (
        <header>
            { backButton ? 
                ( <IconButton onClick={ () => history.replace(backButton) } >
                    <ArrowBackIosIcon fontSize="large" className="header__icons back_icon" />
                </IconButton>
                ) : (
                <Link to="/account">
                    <IconButton>
                        <PersonIcon fontSize="large" className="header__icons" />
                    </IconButton>
                </Link> )
            }
            <Link to="/">
                <img src={Logo} alt="blabla" />
            </Link>
            <Link to="/chat">
                <IconButton>
                    <QuestionAnswerIcon fontSize="large" className="header__icons" />
                </IconButton>
            </Link>
        </header>
    );
}

export default Header;
