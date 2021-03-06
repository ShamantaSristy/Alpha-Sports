import React, { useEffect, useState } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router';
import AboutText from '../AboutText/AboutText';
import Banner from '../Banner/Banner';
import InfoCard from '../InfoCard/InfoCard';
import MediaIcons from '../MediaIcons/MediaIcons';
import "./LeagueDetails.css";

const LeagueDetails = () => {
    const { idLeague } = useParams();
    const [details, setDetails] = useState({});

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
            .then((response) => response.json())
            .then(data => setDetails(data.leagues[0]))

    }, [idLeague]);
    console.log(details);
     
    const { strBadge} = details;
    const badgeStyle = {

        width:"20%",
        margin:"10px 42%"  
    }
    return (
        <Container>

            <Container>
                <Banner details={details}></Banner>
                <Image style={badgeStyle} src={strBadge}/>
            </Container>
                 

            <Container>
                <Container>
                    <InfoCard className="info-card" details={details}></InfoCard>
                </Container>
                <Container className="text">
                    <AboutText details={details}></AboutText>
                </Container>
                <Container>
                    <MediaIcons details={details}></MediaIcons>
                </Container>
            </Container>

        </Container>
    );
};

export default LeagueDetails;