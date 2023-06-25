import React, {useState} from 'react';
import '../styles/menuStyles.css' 
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, NavItem, NavbarToggler, Collapse, NavLink, Nav, NavbarBrand, Container, Row, Col } from 'reactstrap';
import {FaPhone, FaEnvelopeOpen, FaClock, FaYoutube, FaLinkedin, FaTwitter, FaFacebook} from 'react-icons/fa'
import brand from '../res/icons/zainco.jpg'

const TopMenu = () => {
    return (
        <Row className='py-2 m-0 top-menu'>
            <Col className='p-0 d-flex justify-content-start'>
                <Row>
                    <Col className='d-flex align-items-center gap-10 contact' style={{paddingLeft: '2rem'}}>
                        <FaPhone color='grean-color'/> 
                        <span className='grean-color'>0123456789</span>
                    </Col>
                    <Col className='grean-color d-flex justify-content-start  align-items-center gap-10'>
                        <FaEnvelopeOpen className='grean-color'/>
                        <span className='grean-color'>example@example.com</span>
                    </Col>
                </Row>
            </Col>
            <Col className='d-flex s-col'>
                <Row style={{width: '100%'}} className='font-size-13'>
                    <Col className='grean-color flex-1-5 d-flex gap-10 align-items-center time-m s-row'>
                        <FaClock className='font-size-35'/>
                        <span className='open-time'>
                        Mon - Fri: 9:00 - 19:00/ Closed on Weekends
                        </span>
                    </Col>
                    <Col className='social-icons-container flex-0-5'>
                        <Row>
                            <Col className='grean-color contact opacity-75'>
                                <FaYoutube />
                            </Col>
                            <Col className='grean-color contact opacity-75'>
                                <FaLinkedin />
                            </Col>
                            <Col className='grean-color contact opacity-75'>
                                <FaTwitter />
                            </Col>
                            <Col className='grean-color opacity-75'>
                                <FaFacebook />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const DownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Navbar expand="md" className='menu-nav-down'>
                <NavbarBrand href="/">
                
                <img src={brand} className='logo-image' alt='brand' />
                </NavbarBrand>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#" className='menu-list-items'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='menu-list-items'>About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='menu-list-items'>Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" className='menu-list-items'>Contact</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
    )
}

const Menu = () => {

    return (
        <Container className='menuContainer'>
            <TopMenu />
            <DownMenu />
        </Container>
    );
};

export default Menu;