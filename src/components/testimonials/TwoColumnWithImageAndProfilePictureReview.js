import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "../misc/Headings.js";
import { PrimaryButton } from "../misc/Buttons.js";
import { ReactComponent as QuotesLeftIcon } from "../../images/quotes-l.svg";
import { ReactComponent as QuotesRightIcon } from "../../images/quotes-r.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-4.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "../../images/svg-decorator-blob-5.svg";

import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp, AiFillYoutube, AiFillMail } from 'react-icons/ai'
import { SiUdemy } from 'react-icons/si'

import badge1 from '../../images/badges/image1.png'
import badge2 from '../../images/badges/image2.png'
import badge3 from '../../images/badges/image3.png'
import badge4 from '../../images/badges/image4.png'
import badge5 from '../../images/badges/image5.png'
import badge6 from '../../images/badges/image6.jpg'
import Sanjay from '../../images/Sanjay.jpg'


import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


import "slick-carousel/slick/slick.css";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-0 lg:py-10`;
const TestimonialsContainer = tw.div`mt-0 bg-gray-lightest p-2 lg:p-10 rounded-3xl shadow-lg`;
const Testimonials = styled.div``;
const Testimonial = tw.div`max-w-md lg:max-w-none mx-auto lg:mx-0 flex flex-col items-start lg:flex-row`;

const TestimonialImageSlider = tw(Slider)`w-full lg:w-5/12 flex-shrink-0 `;
const TestimonialTextSlider = tw(Slider)``;
const TestimonialText = tw.div`outline-none`;

const ImageAndControlContainer = tw.div`relative outline-none mt-1 lg:mt-10`;
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-80 w-80 lg:h-96 lg:w-96 mx-auto`
]);
const Badge = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-96`
]);

const ControlContainer = tw.div`absolute bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-tl-3xl border`;
const ControlButton = styled(PrimaryButton)`
  ${tw`mx-3 rounded-full text-gray-100 p-2`}
  svg {
    ${tw`w-5 h-5`}
  }
`;

const TextContainer = styled.div(props => [
  tw`flex flex-col w-full lg:w-7/12 order-last lg:pl-12`,
  // props.textOnLeft ? tw`lg:pr-12 lg:order-first` : tw`lg:pl-12 lg:order-last`
]);

const Subheading = tw(SubheadingBase)`mb-4`;
const HeadingTitle = tw(SectionHeading)`lg:text-left mb-4 text-center`;

const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-10`;

const Description = tw.p`max-w-md text-justify mx-auto lg:mx-0  lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const QuoteContainer = tw.div`relative mt-10 lg:mt-20`;
const Quote = tw.blockquote`text-center lg:text-left text-sm sm:text-lg lg:text-xl xl:text-2xl`;
const CustomerInfo = tw.div`mt-6 flex flex-col sm:flex-row items-center justify-start`;
const CustomerProfilePicture = tw.img`rounded-full w-20 h-20`;
const CustomerTextInfo = tw.div`text-left lg:text-left mt-2 sm:mt-0`;
const CustomerName = tw.h5`font-semibold text-xl lg:text-2xl xl:text-3xl text-primary-500 text-center lg:text-left`;
const CustomerTitle = tw.p`font-medium text-secondary-100 text-center`;


const SocialMediaIcons = tw.p`flex flex-row mt-10 text-primary-500 text-3xl justify-center`;
const BadgeIcons = tw.p`flex flex-row mt-10 text-primary-500 text-3xl justify-center lg:justify-center h-16 lg:h-24`;

const QuotesLeft = tw(QuotesLeftIcon)`w-6 h-6 opacity-75 text-primary-500 inline-block mr-1 -mt-3`;
const QuotesRight = tw(QuotesRightIcon)`w-6 h-6 opacity-75 text-primary-500 inline-block ml-1 -mt-3`;

const Link = tw.a`border-transparent hover:text-primary-800 hocus:border-gray-700 pb-1 transition duration-300`;

const DecoratorBlob1 = tw(
  SvgDecoratorBlob1
)`absolute w-32 top-0 left-0 -z-10 text-primary-500 opacity-25 transform -translate-x-full`;
const DecoratorBlob2 = tw(
  SvgDecoratorBlob2
)`absolute w-32 bottom-0 right-0 -z-10 text-pink-500 opacity-15 transform translate-x-2/3 translate-y-8`;

export default ({
  subheading = "",
  heading = "Testimonials",
  description = <span tw="text-center">
    I started my professional journey as an educator. I helped 5000+ engineering students to learn programming languages like C, C++, Java, Web Development using HTML, CSS, JS, PHP and Data Structure & Algorithm.<br /><br />

    After being a University Professor teaching tech courses, I decided to jump into Salesforce Industry. To my surprise, it was all the adventure I was missing in my life.<br /><br />

    Today I have around 15 years of experience which is a mix of College Teaching, Salesforce Training, Salesforce Development and Consultant. <br /><br />

    I am always eager to learn new technologies. I love to enrich the lives of freshers and experienced professionals through my teaching methodology and mentoring.<br /><br />

    Join over thousands of students who have studied from my courses and have successfully built their careers.
  </span>,
  testimonials = null,
  textOnLeft = false
}) => {
  /*
   * You can modify the testimonials shown by modifying the array below or passing in the testimonials prop above
   * You can add or remove objects from the array as you need.
   */
  const defaultTestimonials = [
    {
      imageSrc:
        Sanjay,
      profileImageSrc:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
      quote:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      customerName: "Sanjay Gupta",
      customerTitle: "Salesforce Consultant and Instructor"
    }
  ];

  if (!testimonials || testimonials.length === 0) testimonials = defaultTestimonials;

  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [imageSliderRef, setImageSliderRef] = useState(null);
  const [textSliderRef, setTextSliderRef] = useState(null);

  const mobile = window.innerWidth < 768

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Container>
      <Content>
        {/* <HeadingInfo tw="text-center lg:hidden" subheading={subheading} description={description} /> */}
        <Heading>About <span tw="text-primary-500">Instructor</span></Heading>
        <TestimonialsContainer>
          <Testimonials>

            <Testimonial>

              <TestimonialImageSlider arrows={false} ref={setImageSliderRef} asNavFor={textSliderRef} fade={true}>
                {testimonials.map((testimonial, index) => (
                  <ImageAndControlContainer key={index}>
                    <Image imageSrc={testimonial.imageSrc} style={{ borderRadius: '50%' }} />
                    <BadgeIcons>
                      <img tw="mx-3" src={badge4} />
                      <img tw="mx-3" src={badge1} />
                      <img tw="mx-3" src={badge3} />
                    </BadgeIcons>
                    <BadgeIcons>
                      <img tw="mx-3" src={badge5} />
                      <img tw="mx-3" src={badge2} />
                      <img tw="mx-3" src={badge6} />
                    </BadgeIcons>
                  </ImageAndControlContainer>
                ))}
              </TestimonialImageSlider>

              <TextContainer textOnLeft={textOnLeft}>
                <TestimonialTextSlider arrows={false} ref={setTextSliderRef} asNavFor={imageSliderRef} fade={true}>
                  {testimonials.map((testimonial, index) => (
                    <TestimonialText key={index}>
                      <CustomerInfo>
                        <CustomerTextInfo>
                          <CustomerName>{testimonial.customerName}</CustomerName>
                          <CustomerTitle>{testimonial.customerTitle}</CustomerTitle>
                        </CustomerTextInfo>
                      </CustomerInfo>
                      <HeadingInfo subheading={subheading} description={description} />

                      <SocialMediaIcons>
                        <Link href="https://in.linkedin.com/in/sanjay-gupta-bb2a79bb" target="_0">
                          <AiFillLinkedin tw="mx-3 rounded" />
                        </Link>
                        <Link href="https://api.whatsapp.com/send?phone=919829011904&text=Hi,%20I%20would%20like%20to%20ask%20about" target="_0">
                          <AiOutlineWhatsApp tw="mx-3" />
                        </Link>
                        <Link
                          href={mobile ? "mailto:tech.sanjaygupta@gmail.com" : null}
                          onClick={() => { mobile ? console.log("") : navigator.clipboard.writeText("tech.sanjaygupta@gmail.com");handleClick(); }}

                        >
                          <AiFillMail tw="mx-3" />
                        </Link>

                        <Link href="https://twitter.com/techsanjaygupta" target="_0">
                          <AiOutlineTwitter tw="mx-3" />
                        </Link>
                        <Link href="https://www.youtube.com/sanjaygupta_techschool" target="_0">
                          <AiFillYoutube tw="mx-3" />
                        </Link>
                        <Link href="https://www.udemy.com/user/sanjay-gupta-354/" target="_0">
                          <SiUdemy tw="mx-3" />
                        </Link>
                      </SocialMediaIcons>

                      <Stack spacing={2} sx={{ width: '100%' }}>
                        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
                          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                            Email Copied to clipboard!
                          </Alert>
                        </Snackbar>
                        </Stack>
                        
                    </TestimonialText>
                  ))}
                </TestimonialTextSlider>
              </TextContainer>
            </Testimonial>
          </Testimonials>
        </TestimonialsContainer>
      </Content>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

const HeadingInfo = ({ subheading, heading, description, ...props }) => (
  <div {...props}>
    {subheading ? <Subheading>{subheading}</Subheading> : null}
    <HeadingTitle>{heading}</HeadingTitle>
    <Description>{description}</Description>
  </div>
);
