import React from 'react';
import { Container } from 'react-bootstrap';
import "./AboutText.css";

const AboutText = (props) => {
    const { strDescriptionEN } = props.details;
    return (
        <Container className="about-text">
            <h4>At a Glance:</h4>
            <article>{strDescriptionEN}</article>
        </Container>
    );
};

export default AboutText;