import React, { useState } from 'react'
import { Accordion, Card, useAccordionButton } from 'react-bootstrap'
import tw from "twin.macro";
import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';


const Container = tw.div`relative mx-0 lg:mx-32 py-10  `;

function CustomToggle({ children, eventKey }) {
    const [arrow, setArrow] = useState(true)
    const decoratedOnClick = useAccordionButton(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <div
            tw='flex flex-row justify-between text-xl text-primary-500 mx-10'
            onClick={() => {
                decoratedOnClick()
                setArrow(!arrow)
            }}>
            <button
                type="button"
                tw='font-medium'

            >
                {children}
            </button>
            <button>
                {
                    arrow
                        ?
                        <TiArrowSortedDown tw='text-3xl' />
                        :
                        <TiArrowSortedUp tw='text-3xl' />
                }
            </button>
        </div>
    );
}

export default function VideoAccordian() {
    return (
        <Container>
            <Accordion>
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="0">1. Video Intro</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0" style={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <div tw='flex flex-col justify-center items-center'>
                            <iframe
                                width={window.innerWidth / 1.3} height={window.innerHeight / 1.5}
                                src="https://www.youtube-nocookie.com/embed/eNZX3tyxK7k"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                tw='mx-auto'
                            />
                        </div>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <CustomToggle eventKey="1">2. Video Title</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1" style={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        <div tw='flex flex-col justify-center items-center'>
                            <iframe width={window.innerWidth / 2} height={window.innerHeight / 2}
                                src="https://www.youtube-nocookie.com/embed/eNZX3tyxK7k"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                tw='mx-auto'
                            />
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    );
}
