import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// import {Carousel} from 'react-bootstrap'

const Container = tw.div`relative mt-5 lg:mt-10`;
const Content = tw.div`max-w-screen-xl lg:mx-auto mx-5 py-3 lg:py-3`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled.button`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;


const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-normal mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded sm:rounded-none sm:rounded-br-4xl w-full py-3`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://imageio.forbes.com/specials-images/imageserve/6023f8c09fb9ec5fb4422702/0x0.jpg?format=jpg&width=1200&fit=bounds",
      title: "Administrator",
      description: "Watch Salesforce Administrator Videos to get familiar with configurations. Learn about Object, Fields, Apps, Tabs, Formula, Validation, Data Security, Report, Dashboard and Workflow Rules.",
    },
    {
      imageSrc: "https://support.cognigy.com/hc/article_attachments/360024910820/salesforce-crm-header.jpg",
      title: "Developer",
      description: "Watch Salesforce Developer videos to learn Apex Programming, Triggers, Apex Test Class, Asynchronous Apex, Apex Integration Services.",
    },
    {
      imageSrc: "https://www.salesforce.com/blog/wp-content/uploads/sites/2/2020/12/what-does-salesforce-do-header-v2.jpg",
      title: "Scenarios",
      description: "Watch Salesforce scenarios based videos to learn how to use configurations and development tools available in salesforce to fulfil client’s business requirements in projects.",
    },
    {
      imageSrc: "https://assets-eu-01.kc-usercontent.com/27bd3334-62dd-01a3-d049-720ae980f906/4db01ddf-17db-4de5-ba83-c697426ed3a2/dentsu-salesforce-isometric.png?q=75&fm=jpg&w=960",
      title: "Udemy courses",
      description: "Prepare yourself for Salesforce Administrator and Salesforce Platform Developer 1 Certification.",
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const mobile = window.innerWidth<768



  return (
    <Container>
      <Content>
        {/* <HeadingWithControl>
          <Heading>Popular Hotels</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl> */}

        {/* <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <PrimaryButton>Book Now</PrimaryButton>
            </Card>
          ))}
        </CardSlider> */}

        <Carousel responsive={responsive}
        swipeable={true}
        draggable={true}z
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        transitionDuration={3000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        tw="flex flex-row self-stretch items-stretch "
        
        >
          {cards.map((card, index) => (
            <div>
              <Card key={index} style={{minHeight:mobile?450:550}}>
                <CardImage imageSrc={card.imageSrc} />
                <TextInfo>
                  <TitleReviewContainer>
                    <Title>{card.title}</Title>
                  </TitleReviewContainer>
                  <Description>{card.description}</Description>
                </TextInfo>
                <PrimaryButton

                >Learn More
                </PrimaryButton>
              </Card>
            </div>
          ))}
        </Carousel>
      </Content>
    </Container>
  );
};
