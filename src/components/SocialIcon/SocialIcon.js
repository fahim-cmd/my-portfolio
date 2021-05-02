import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGit, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import './SocialIcon.css';

const SocialIcon = () => {
    return (
        <div id="socialPosition">
            <a href="https://www.facebook.com/kabirhasan.kabir.77/" className="icon-button facebook"> <FontAwesomeIcon className=" social icon-facebook" icon={faFacebook} /><span></span></a><br />
            <a href="https://www.linkedin.com/in/md-hasan-al-kabir-fahim-a73b691b1/" className="icon-button linkedIn"> <FontAwesomeIcon className="social icon-linkedIn" icon={faLinkedinIn} /><span></span></a><br />
            <a href="https://github.com/fahim-cmd" className="icon-button github"> <FontAwesomeIcon className="social icon-github" icon={faGit} /><span></span></a>
        </div>
    );
};

export default SocialIcon;