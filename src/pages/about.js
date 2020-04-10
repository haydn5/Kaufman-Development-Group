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
        <Helmet title="About | Kaufman Development Group" />
        <Container className="oneCol">
            <h1>About Kaufman Development Group</h1>
            <p>Kaufman Development Group and its principals have in depth experience across many industries including Real Estate, Manufacturing, Hospitality, Food Service, Marketing, Private Equity Financing, and more. We are focused on creating and growing businesses that address untapped needs in communities, reinvesting in commercial and residential real estate to meet current market needs, and helping businesses in our communities thrive. We are always interested in exploring new investment opportunities ranging from real estate to operating businesses and more. Please feel free to inquire for more information.</p>            
        </Container>
        <Footer />
    </div>
