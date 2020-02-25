import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/custom.css';
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/Footer'

import { Container } from 'react-bootstrap';

export default () => 
    <div>
        <Header />
        <Helmet title="Contact | Kaufman Development Group" />
        <Container className="oneCol">
            <h1>Contact Page</h1>
            <p>Bacon ipsum dolor amet short ribs tail pork, leberkas spare ribs sausage chislic buffalo landjaeger pork belly corned beef. Ball tip doner kevin short ribs tongue t-bone. Ground round tenderloin meatball, kevin sirloin shoulder rump short loin. Biltong doner landjaeger beef ribs, alcatra pork chop prosciutto tri-tip fatback brisket. Pork loin jowl beef shoulder meatball, picanha ham hock pork belly short ribs frankfurter kielbasa spare ribs t-bone venison leberkas.</p>            
        </Container>
        <Footer />
    </div>
