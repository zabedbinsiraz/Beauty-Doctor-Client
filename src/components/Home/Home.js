import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <Container fluid>
            <Row style={{height:'80%'}} className="text-center shadow-lg p-5 m-5 bg-light rounded">
               <h1 className="text-warning">This page on the construction....</h1>
            </Row>
        </Container>
    );
};

export default Home;