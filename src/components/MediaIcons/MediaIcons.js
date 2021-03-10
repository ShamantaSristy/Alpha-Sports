
import React from 'react';
import { Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import facebook from '../../images/Facebook.png';
import twitter from '../../images/Twitter.png';
import youtube from '../../images/YouTube.png';
import "./MediaIcons.css";

const MediaIcons = () => {
    
    return (
        <Container>
            <Link> <Image className="icons" src={facebook} fluid /> </Link>
            <Link> <Image className="icons" src={twitter} fluid /> </Link>
            <Link> <Image className="icons" src={youtube} fluid /> </Link>
        </Container>
    );
};

export default MediaIcons;