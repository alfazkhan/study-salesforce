import React, { useState, Component } from 'react'
import { Accordion, Card, useAccordionButton } from 'react-bootstrap'
import tw from "twin.macro";
import { TiArrowSortedDown } from 'react-icons/ti';
import { TiArrowSortedUp } from 'react-icons/ti';
import sassguru from 'images/sassguru.jpg'
import ComingSoon from 'images/ComingSoon.svg'


const Container = tw.div`relative mx-0 lg:mx-32 py-10  `;

function CustomToggle({ children, eventKey, videoChange, arrowBool }) {
    const [arrow, setArrow] = useState(true)
    const decoratedOnClick = useAccordionButton(eventKey,
    );

    return (
        <div
            tw='flex flex-row justify-between text-xl text-primary-500 mx-0 lg:mx-10'
            onClick={() => {
                decoratedOnClick()
                setArrow(!arrow)
                videoChange(eventKey)
            }}>
            <button
                type="button"
                tw='font-medium text-left text-gray-900  '

            >
                {children}
            </button>
            <button>
                {
                    arrowBool
                        ?
                        <TiArrowSortedUp tw='text-3xl' />
                        :
                        <TiArrowSortedDown tw='text-3xl' />
                }
            </button>
        </div>
    );
}


export default class VideoAccordian extends Component {

    state = {
        videos: this.props.videos,
        mobile: window.innerWidth < 768,
        activeVideo: null,
        laptop: window.innerWidth > 768 && window.innerWidth <= 1440
    }

    componentDidMount = () => {
        console.log(this.props.videos)

    }

    urlParser = (url) => {
        const temp = url.split('/')
        var key

        if (temp[2] === "youtu.be") {
            key = temp[3]
        }
        else if (temp[2] === "www.youtube.com") {
            const arr = temp[3].split('=')
            key = arr[1]
        }

        return `https://www.youtube.com/embed/${key}`

    }

    videoChangeHandler = (index) => {

        this.setState({
            activeVideo: this.state.activeVideo === index ? null : index
        })
    }

    render() {
        return (
            <Container>
                <div className="container col-lg-6 col-sm-12" tw='my-5'>
                    <a href="https://my.saasguru.co/salesforce-cert-prep?utm_source=studysalesforce&utm_medium=banner&utm_campaign=sfdc" target="_0">
                        <img src={sassguru} style={{ height: 130, width: 600, aspectRatio: 'auto 600/130' }} tw="mx-auto" />
                    </a>
                </div>
                <Accordion>
                    {this.props.videos.length  === 0
                        ? <img src={ComingSoon} style={{ height: 300, width: 600, aspectRatio: 'auto 600/300' }} tw="mx-auto"/>
                : null}
                    {Object.keys(this.state.videos).map((key, index) => {
                        const video = this.state.videos[key]
                        const link = this.urlParser(video.link)
                        return (
                            <Card key={key}>
                                <Card.Header>
                                    <CustomToggle videoChange={this.videoChangeHandler}
                                        arrowBool={this.state.activeVideo === index}
                                        eventKey={index}>{video.name}</CustomToggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={index} style={{
                                    marginLeft: 'auto',
                                    marginRight: 'auto'
                                }}>
                                    <div tw='flex flex-col justify-center items-center'>
                                        <iframe
                                            style={{
                                                width: this.state.mobile ? window.innerWidth : window.innerWidth / 1.5,
                                                height: this.state.mobile ? 300 : this.state.laptop ? 500 : 730,
                                            }}
                                            src={this.state.activeVideo === index ? link : null}
                                            title="YouTube video player"
                                            frameborder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowfullscreen
                                            tw='mx-auto'
                                        />

                                    </div>
                                </Accordion.Collapse>
                            </Card>
                        )
                    })}


                </Accordion>
            </Container>
        )
    }
}
