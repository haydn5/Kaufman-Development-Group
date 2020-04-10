import React from "react"
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/Footer'
import { graphql } from 'gatsby'

import Img from 'gatsby-image';

import { Container, Image, Row, Col } from 'react-bootstrap';

import frederica from "../images/frederica-golf-club.png"
import workTheWickLogo from "../images/work-the-wick-logo.svg"
import hillbrookLogo from "../images/hillbrook-logo.png"

export default ({data}) => (

    <div>
        <Helmet title="Kaufman Development Group" />
        <Header />
        <Container className="text-center">
            <h1>Welcome to Kaufman Development Group</h1>
        </Container>
        <Container className="oneCol">
            
            <p>Kaufman Development Group is a family company with a diverse portfolio of affiliated businesses and properties across the Southeast and Midwest United States. Kaufman Development Group and its principals have in depth experience across many industries including Real Estate, Manufacturing, Hospitality, Food Service, Marketing, Private Equity Financing, and more. Below is a sample of a few Kaufman Development Group businesses and properties.</p>
            <hr />
        </Container>

        <Container className="oneCol">
            <Row>
                <Col lg={4}>
                    <a href="https://www.fredericagolfclub.com/">
                        <p><Image src={frederica} alt="Frederica Golf Club" fluid/></p>
                        <p><Img fluid={data.fredericaClubhouse.childImageSharp.fluid} alt="Frederica Clubhouse, photographed from above" className="d-block img-fluid" /></p>
                    </a>
                </Col>
                <Col lg={8}>
                    <h2>Frederica Golf Club</h2>
                    <p>Frederica Golf Club is a private golf club in St. Simons Island, Georgia dedicated to creating an unmatched golf and club experience.  Through our world class facilities and staff, we are able to provide outstanding service for our members and their guests.  From the moment that you enter the tabby front gates, you will be immersed in the captivating grandeur that is Frederica Golf Club. While golf is our core, Frederica Golf Club offers our members a multitude of amenities to provide a complete membership experience. </p>
                    <p><a href="https://www.fredericagolfclub.com/">Learn more</a></p>
                </Col>
            </Row>
            <hr />
            
        </Container>
        <Container className="oneCol">
            <Row>
                <Col lg={4}>
                    <a href="https://workthewick.com">
                        <p><Image src={workTheWickLogo} alt="Work the Wick Logo" fluid/></p>
                        <p><Img fluid={data.workTheWick3.childImageSharp.fluid} alt="The Wick 3 inside of the building" className="d-block img-fluid" /></p>
                    </a>
                </Col>
                <Col lg={8}>
                    <h2>Work The Wick</h2>
                    <p>The Wick is a shared work space that offers tenants the privacy of individual office spaces with the amenities of larger office buildings. With 3 convenient locations in Historic Downtown Brunswick, Georgia offering over 100 unique offices, The Wick is a community of entrepreneurs, small businesses, professionals, non-profits, creatives, and more.</p>
                    <p><a href="https://workthewick.com">Learn more</a></p>
                </Col>
            </Row>
            <hr />
            
        </Container>
        <Container className="oneCol">
            <Row>
                <Col lg={4}>
                    <a href="https://www.clubhillbrook.com">
                        <p><Image src={hillbrookLogo} alt="Logo of Hillbrook" fluid/></p>
                        <p><Img fluid={data.hillBrook.childImageSharp.fluid} alt="Hillbrook Clubhouse" className="d-block img-fluid" /></p>
                    </a>
                </Col>
                <Col lg={8}>
                    <h2>The Club at Hillbrook</h2>
                    <p>The Club at Hillbrook, a private 50-acre estate, is located minutes from downtown Chagrin Falls, Ohio at the end of a picturesque country road. Hillbrook offers a wide range of services including fine-dining, accommodations, tennis, pool, fitness, weddings and corporate events. Hillbrook was named “One of the top 50 best wedding venues in America” by <a href="https://www.brides.com">Brides.com</a>, and has also been featured on The Knot.</p>
                    <p><a href="https://www.clubhillbrook.com">Learn more</a></p>
                </Col>
            </Row>            
        </Container>
        <Footer />
    </div>
);

export const query = graphql`
  query {
    workTheWick3: file(relativePath: { eq: "work-the-wick-3-close-up.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fredericaClubhouse: file(relativePath: { eq: "frederica-clubhouse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
    }
    hillBrook: file(relativePath: { eq: "hillbrook-clubhouse.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
    }
  }
`;