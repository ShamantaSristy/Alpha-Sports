import { faFemale, faFlag, faFutbol, faHome, faMale, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import female from '../../images/female.png';
import male from '../../images/male.png';
import mixed from '../../images/mixed4.jpg';
import "./InfoCard.css";

const InfoCard = (props) => {
    const { strSport, strLeague, strCountry, intFormedYear, strGender } = props.details;

    let team;
    if (strGender === "Male") {
        team = <Image src={male} fluid />;
    }
    else if (strGender === "Female") {
        team = <Image src={female} fluid />;
    }
    else {
        team = <Image src={mixed} fluid />;
    }

    let genderIcon;
    if (strGender === "Female") {
        genderIcon = <FontAwesomeIcon icon={faFemale} />;
    }
    else if (strGender === "Male") {
        genderIcon = <FontAwesomeIcon icon={faMale} />;
    }
    else {
        genderIcon = <FontAwesomeIcon icon={faVenusMars} />;
    }


    return (
        <Container>

            <Card>
                <Row>
                    <Col sm={8}>
                        <h2>{strLeague}</h2>
                        <p> <FontAwesomeIcon icon={faHome} /> Founded: {intFormedYear}</p>
                        <p> <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                        <p> <FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport}</p>
                        <p> {genderIcon} Gender: {strGender}</p>
                    </Col>
                    <Col sm={4}>{team}</Col>
                </Row>
            </Card>
        </Container>
    );
};

export default InfoCard;