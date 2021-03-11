import React, { useEffect, useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import HomePageInfoCard from '../HomePageInfoCard/HomePageInfoCard';

const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`)
            .then(res => res.json())
            .then(data => setLeague(data.countrys))
    }, [])
    console.log(league);
    return (
        <Container>

            <Container>
                <CardColumns>
                    {
                        league.map(league => <HomePageInfoCard league={league}></HomePageInfoCard>)
                    }
                </CardColumns>
            </Container>

        </Container>

    );
};

export default Home;