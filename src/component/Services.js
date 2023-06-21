import React from 'react';
import '../styles/services.css'
import { Container, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import gardingOne from '../res/icons/gardening-1.png'
import PromoImage from '../res/pattern-1270.png'
import QouteImage from '../res/foundation.jpg'
import Founder from '../res/founder.png'

const ServicesPromo = () => {
    return(
        <div className='services-promo'>
            <img src={PromoImage} alt='promo-img' />
            <div className='promo-text-container'>
                <div className='promo-text'>
                Provides Hassle-Free Backyard Transformations with Artistic Solutions.
                </div>
            </div>
        </div>
    )
}

const ServicesCards = ({servicesAr}) => {
    return(
        <Container className='s-main-container'>
            <Container className='services-card-container'>
                {
                    servicesAr.map((el) => (
                        <Card key={el.id} className='service-card'>
                            <CardImg src={el.imgSrc}></CardImg>
                            <CardBody className='card-body-container'>
                            <div className='card-icon'>
                                    <img src={gardingOne} alt='card-icon'/>
                                </div> 
                                <CardTitle>{el.name}</CardTitle>
                                <CardText>{el.text}</CardText>
                            </CardBody>
                        </Card>
                    ))
                }

            </Container>
            <ServicesPromo />

        </Container>
    )
}

const FounderQoute = () => {
    return(
        <Container className='quote-container'>
            <div className='quote-image-container'>
                <img src={QouteImage} alt='qoute' />
            </div>
            <Card className='qoute-text-container'>
               <CardBody>
                <CardTitle>
                ZAINCO OFFERS A FULL-SERVICE
                </CardTitle>
                <CardText>
                Most gardens consist of a mix of natural and constructed elements, although even very natural gardens are always an inherently artificial creation. Natural elements present in a garden principally.
                </CardText>
                </CardBody> 
                <CardText className='founder'>
                    <img src={Founder} alt='founder' />
                    <div>
                        <h3>Founder</h3>
                        <h4>Eng.MOHAMED HASSAN</h4>
                    </div>
                    <div>
                        <Button className='founder-btn'>GET IN TOUCH  &gt; </Button>
                    </div>
                </CardText> 
            </Card>
        </Container>
    )
}

const Services = () => {
    const servicesAr = [
        {
            id: 1,
            name: 'landscaping',
            text: 'Get expert advice on how to design a garden.',
            imgSrc: 'servicesImg/service-img-st2-1.jpg'
        },
        {
            id: 2,
            name: 'urban',
            text: 'Plants are expensive and need to be looked after.',
            imgSrc: 'servicesImg/service-img-st2-2.jpg'
        },
        {
            id: 3,
            name: 'maintenance',
            text: 'Get expert advice on how to design a garden.',
            imgSrc: 'servicesImg/service-img-st2-3.jpg'
        },
        {
            id: 4,
            name: 'events',
            text: 'Get expert advice on how to design a garden.',
            imgSrc: 'servicesImg/service-img-st2-4.jpg'
        }
    ]
    return (
        <div className='services-container'>
            <ServicesCards servicesAr={servicesAr} />
            <FounderQoute />
            <Container className='sr-promo'>
            <img src={PromoImage} alt='promo-img' />
            </Container>
        </div>
    );
}

export default Services;