import React from 'react';
import { Carousel } from 'react-bootstrap';
import carosul1 from '../../../image/carosule/carosul1.jpg'
import carosul2 from '../../../image/carosule/carosul2.jpg'
import carosul3 from '../../../image/carosule/carosul3.jpg'

const Header = () => {
    

    return (
        <div className='w-75 p-2 mx-auto'>
            <Carousel>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={carosul1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>We Here For Help</h3>
                        <p>Don't Haseted Just contact Us</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={carosul2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Don't be afraid</h3>
                        <p>Now tension on my head.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src={carosul3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Is Time to Yours</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;