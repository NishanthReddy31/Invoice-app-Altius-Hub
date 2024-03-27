// import logo from './logo.svg';
import { Row, Col } from 'react-bootstrap';
import './style.css';
import {
  Link
} from "react-router-dom"


function Home() {

  return (
    <Row className="g-0">
      <Col className="g-0 navbar d-flex flex-column" lg={3} md={3}>
        <Row className='g-0 nav-header'>
          Navbar
        </Row>
        <Row className='g-0 navlist' >
        <Link to={{ pathname: "invoiceList" }}>Invoices</Link>
          
        </Row>

      </Col>
      <Col className='g-0 maincontent d-flex justify-content-center align-items-center' lg={9} md={9}>
        React Invoice App..
      </Col>
    </Row>
  );
}

export default Home;
