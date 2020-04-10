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
            <h1>Contact the Kaufman Development Group</h1>
            <p>For  more information on Kaufman Development Group or any of its businesses or properties, please contact:</p>  
            <p>Michael Kaufman<br />
               <a href="mailto:Michael@KaufmanDevelopmentGroup.com">Michael@KaufmanDevelopmentGroup.com</a><br />
               1612 Newcastle Street, Suite 223, Brunswick, GA 31520</p>          
        </Container>
        <Footer />
    </div>
