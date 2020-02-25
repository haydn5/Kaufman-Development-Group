import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import Helmet from 'react-helmet'

import { Container, Image, Row, Col } from 'react-bootstrap';

import logo from "../images/kaufman-logo.jpg"

export default () => 
    <div>
        <Helmet title="Kaufman Development Group" />
        <Container className="text-center logoheader">
            <Image src={logo} alt="Kaufman Development Group" fluid/>
        </Container>
        <Container className="oneCol">
            <Row>
                <Col lg={4}>
                    <Image src={logo} alt="Kaufman Development Group" fluid/>
                </Col>
                <Col lg={8}>
                    <h2>Title of Product</h2>
                    <p>Bacon ipsum dolor amet short ribs tail pork, leberkas spare ribs sausage chislic buffalo landjaeger pork belly corned beef. Ball tip doner kevin short ribs tongue t-bone. Ground round tenderloin meatball, kevin sirloin shoulder rump short loin. Biltong doner landjaeger beef ribs, alcatra pork chop prosciutto tri-tip fatback brisket. Pork loin jowl beef shoulder meatball, picanha ham hock pork belly short ribs frankfurter kielbasa spare ribs t-bone venison leberkas.</p>
                    <p><a href="https://www.apple.com">Learn more</a></p>
                </Col>
            </Row>
            <hr />
            
        </Container>
        <Container className="oneCol">
            <Row>
                <Col lg={4}>
                    <Image src={logo} alt="Kaufman Development Group" fluid/>
                </Col>
                <Col lg={8}>
                    <h2>Title of Product</h2>
                    <p>Bacon ipsum dolor amet short ribs tail pork, leberkas spare ribs sausage chislic buffalo landjaeger pork belly corned beef. Ball tip doner kevin short ribs tongue t-bone. Ground round tenderloin meatball, kevin sirloin shoulder rump short loin. Biltong doner landjaeger beef ribs, alcatra pork chop prosciutto tri-tip fatback brisket. Pork loin jowl beef shoulder meatball, picanha ham hock pork belly short ribs frankfurter kielbasa spare ribs t-bone venison leberkas.</p>
                    <p><a href="https://www.apple.com">Learn more</a></p>
                </Col>
            </Row>
            <hr />
            
        </Container>
        <Container className="oneCol">
            <Row>
                <Col lg={4}>
                    <Image src={logo} alt="Kaufman Development Group" fluid/>
                </Col>
                <Col lg={8}>
                    <h2>Title of Product</h2>
                    <p>Bacon ipsum dolor amet short ribs tail pork, leberkas spare ribs sausage chislic buffalo landjaeger pork belly corned beef. Ball tip doner kevin short ribs tongue t-bone. Ground round tenderloin meatball, kevin sirloin shoulder rump short loin. Biltong doner landjaeger beef ribs, alcatra pork chop prosciutto tri-tip fatback brisket. Pork loin jowl beef shoulder meatball, picanha ham hock pork belly short ribs frankfurter kielbasa spare ribs t-bone venison leberkas.</p>
                    <p><a href="https://www.apple.com">Learn more</a></p>
                </Col>
            </Row>
            <hr />
            
        </Container>
    </div>
