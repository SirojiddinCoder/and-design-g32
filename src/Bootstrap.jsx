import React from "react";
import  './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import LOGO from './LOGO.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Academy from './astrum.jpg'
import { YMaps,Map } from '@pbe/react-yandex-maps';



const Boot = () =>{
    return(
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbarBg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="nav_color">
          <img width={100} src={LOGO} alt="nimadir" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbar-link">
            <Nav.Link href="#features" className="nav_color">Bosh sahifa</Nav.Link>
            <Nav.Link href="#pricing" className="nav_color">Biz xaqimizda</Nav.Link>
           
            <Nav.Link href="#pricing" className="nav_color">Kurslar</Nav.Link>
            <Nav.Link href="#pricing" className="nav_color">Manzil</Nav.Link>
           
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className="carousel">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imgSize"
          src="http://astrum.uz/images/layout/Glavniy.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Astrum IT Akademy</h1>
          <p>O'ZBEKISTONDA INNOVATSION TA'LIM TIZIMIGA EGA BIRINCHI IT AKADEMIYA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 imgSize"
          src="http://astrum.uz/images/layout/3.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1>ASTRUM IT ACADEMY SIZLAR UCHUN AJOYIB IMKONIYATNI TAQDIM ETADI. KUTIB OLING BIZDA PRESEASON 7 UCHUN QABUL JARAYONLARI DAVOM ETMOQDA.</h1>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
          className="d-block w-100 imgSize"
          src="http://astrum.uz/images/layout/Glavniy_2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1>O'ZBEKISTONDA INNOVATSION TA'LIM TIZIMIGA EGA BIRINCHI IT AKADEMIYA</h1>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>

    <Container>
      <Row className="row">
        <Col className="grid-1">
          <h1 className="about">Biz haqimizda</h1>
          <p className="description">
          Sun'iy intellekt yordamida boshqariladigan ta'lim tizimi va zamonaviy atmosfera sizning muvaffaqiyatingiz garovidir.
          </p>
        </Col>
        <Col className="grid-2">
        
      
 <div className="img1">
 <Card.Img  src={Academy}  className="academy-img"/>
 </div>

    
 
        </Col>
      </Row>
      
    </Container>

    <div className="container">
      <div className="map">
         <h1>Manzilimiz</h1>
      <YMaps>
    
      <Map defaultState={{ center: [41.0012189,71.6027338], zoom: 9 }} />


  </YMaps>
      </div>
    </div>
     
        </div>

        
    )
}


export default Boot;