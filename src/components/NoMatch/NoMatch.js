
import React from 'react';
import { Container } from 'react-bootstrap';
import "./NoMatch.css";

const NoMatch = () => {
    return (
        <Container className="error">
            <h1>ERROR_404 !!</h1>
            <h3>Your Requested URL not found</h3>
        </Container>
    );
};

export default NoMatch;