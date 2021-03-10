import React from 'react';
import { Container, Image } from 'react-bootstrap';

const Banner = (props) => {
    const { strBanner } = props.details;
    const bannerStyle = {
        marginBottom: '50px',
        textAlign: 'center'
    }
    return (
        <Container>
            <Image style={bannerStyle} src={strBanner} fluid />
        </Container>
    );
};

export default Banner;