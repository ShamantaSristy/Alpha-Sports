import React, { useEffect, useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import LeagueInfo from '../LeagueInfo/LeagueInfo';

const Home = () => {
    const [league, setLeague] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England`)
            .then(res => res.json())
            .then(data => setLeague(data.countrys))
    }, [])
    return (
        <Container>

            <Container>
                <CardColumns>
                    {
                        league.map(league => <LeagueInfo league={league}></LeagueInfo>)
                    }
                </CardColumns>
            </Container>

        </Container>

    );
};

export default Home;