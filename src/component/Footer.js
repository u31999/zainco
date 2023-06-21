import React from 'react';
import '../styles/footer.css'
import { Col, Row } from 'reactstrap';
import { FaPhone, FaEnvelope, FaMapMarked, FaYoutube, FaLinkedin, FaTwitter, FaFacebook, FaArrowAltCircleUp } from 'react-icons/fa'
import logo from '../res/icons/zainco.jpg'
const Footer = () => {
    return (
        <div className='footer'>
            <Row className='top-footer'>
                <Col>
                <div className='footer-tittle'>
                    <h4>ABOUT US</h4>
                </div>
                <p className='white-green-color w-75'>
                Is that lawn is an open space between woods or
                 lawn can be uncountable a type of thin linen or 
                 cotton while garden is an outdoor area containing 
                 one or more types of plants
                </p>
                <div className='d-s-none'>
                    <div className='d-flex align-items-center gap-20 pt-4 d-s-none'>
                    <div className='em-phone-icon d-s-none'><FaPhone className='fa-thin'/></div>
                    <div>
                        <div className='white-green-color-two'>Emergency Call</div>
                        <div className='footer-tittle-two'>
                            <h4>0123456789</h4>
                        </div>
                        
                        </div>
                    </div>
                    
                </div>
                </Col>
                <Col>
                <div className='footer-tittle'>
                    <h4>MAIN PAGES</h4>
                    <ul className='w-75 footer-list footer-text-two'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Team</li>
                    </ul>
                </div>
                </Col>
                <Col>
                <div className='footer-tittle'>
                    <h4>
                    OUR SERVICES
                </h4> 
                    </div>
                <ul className='w-75 footer-list footer-text-two'>Lawn movies</ul>
                </Col>
                <Col>
                <div className='footer-tittle'>
                    <h4>
                    GET IN TOUCH
                    </h4>
                    <ul className='w-75 footer-list footer-text-two d-flex align-item gap-20 flex-column'>
                        <li className='d-flex align-item gap-10'>
                        <FaPhone className='font-size-20 low-green-color'/>
                        <span>0-123-456-789</span>
                        </li>
                        <li className='d-flex align-item gap-10'>
                        <FaEnvelope className='font-size-20 low-green-color'/>
                        <span>example@zainco.com</span>
                        </li>
                        <li className='d-flex align-item gap-10'>
                        <FaMapMarked className='font-size-20 low-green-color'/>
                        <span>example@zainco.com</span>
                        </li>
                        <li className='d-flex align-item gap-10 add-gap'>
                           <div>Connect: </div> 
                           <FaYoutube className='font-size-20 low-green-color'/>
                           <FaLinkedin className='font-size-20 low-green-color'/>
                           <FaTwitter className='font-size-20 low-green-color'/>
                           <FaFacebook className='font-size-20 low-green-color'/>
                        </li>
                    </ul>
                    </div>
                </Col>
            </Row>
            <Row className='copyright-row'>
            <div className='copyright-inner-row'>
                <Col>
                    <div>
                        <img src={logo} alt='logo' className='footer-logo' />
                    </div>
                </Col>
                <Col className='copyright-row'>COPYRIGHT & DESIGN BY @AhmedHassan - 2023</Col>
                <Col className='arrow-container'>
                    <FaArrowAltCircleUp className='up-arrow'/>
                </Col>
                </div>
            </Row>
        </div>
    )
}

export default Footer;