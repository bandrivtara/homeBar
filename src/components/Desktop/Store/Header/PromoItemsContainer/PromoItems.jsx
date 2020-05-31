import React from 'react';
import st from './PromoItems.module.scss';
import { Carousel } from 'react-bootstrap';


const PromoItems = (props) => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src="" alt="Picture"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default PromoItems
