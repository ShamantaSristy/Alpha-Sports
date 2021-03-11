
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../images/Facebook.png';
import twitter from '../../images/Twitter.png';
import youtube from '../../images/YouTube.png';
import "./MediaIcons.css";

const MediaIcons = (props) => {
    const {strTwitter, strYouTube, strWebsite} = props.details;
    
    return (
        <Container>
            <Link to={strWebsite}> <Image className="icons" src={facebook} fluid /> </Link>
            <Link to={strTwitter}> <Image className="icons" src={twitter} fluid /> </Link>
            <Link to={strYouTube}> <Image className="icons" src={youtube} fluid /> </Link>
        </Container>
    );
};

export default MediaIcons;