import React from 'react'
import { Carousel } from 'react-bootstrap';
import tw from "twin.macro";

export default function SlideImage() {
    return (
        <Carousel tw=''>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="First slide"
                />
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Second slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt="Third slide"
                />

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
