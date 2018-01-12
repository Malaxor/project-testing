
import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Carousel from "../../components/Carousel";
import { Link } from "react-router-dom";

const Home = props => (
      <Container center>
        <Row>
          <Col size="md-12">
            <Carousel> </Carousel>
          </Col>
        </Row>
        
      </Container>
    );

export default Home;