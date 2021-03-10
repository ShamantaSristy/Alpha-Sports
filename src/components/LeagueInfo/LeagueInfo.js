import { faArrowRight, faFlag, faFutbol } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const LeagueInfo = (props) => {
    const { strBadge, strCountry, strLeague, strSport, idLeague } = props.league;
    // console.log(props.league);

    const history = useHistory();
    const showDetails = idLeague => {
        const url = `/league/${idLeague}`;
        history.push(url);
        console.log(url);
    }
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={strBadge} />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        <p> <FontAwesomeIcon icon={faFutbol} /> Type: {strSport}</p>
                        <small><FontAwesomeIcon icon={faFlag} /> {strCountry}</small>
                    </Card.Text>
                    <br />
                    <Button onClick={() => showDetails(idLeague)}>Explore <FontAwesomeIcon icon={faArrowRight} /> </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default LeagueInfo;