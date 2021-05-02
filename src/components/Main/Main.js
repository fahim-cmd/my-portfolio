import React from 'react';
import SetNavbar from '../Home/SetNavbar/SetNavbar';
import SocialIcon from '../SocialIcon/SocialIcon';
import './Main.css';

const Main = () => {
    return (
        <div id="mainBg">
            <SetNavbar></SetNavbar>
            <SocialIcon></SocialIcon>
        </div>
    );
};

export default Main;