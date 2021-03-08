import React  from 'react';

// assets
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from '@material-ui/core/IconButton';

// styles
import "../style/bottomNav.css"


const bottomNav = () =>
{
    return(
        <div className="BottomNav">
            <IconButton className="bottomNav__repeat" >
                <ReplayIcon fontSize="large" />
            </IconButton>
            <IconButton className="bottomNav__left" >
                <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="bottomNav__star" >
                <StarRateIcon fontSize="large" />
            </IconButton>
            <IconButton className="bottomNav__right" >
                <FavoriteIcon fontSize="large" />
            </IconButton>
            <IconButton className="bottomNav__lightning" >
                <FlashOnIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default bottomNav;