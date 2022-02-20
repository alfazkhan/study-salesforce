import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light.js";
import SlideImage from "components/carasoual/slideImage.js";

import { SiUdemy } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';

import Avatar from '@mui/material/Avatar';

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0 py-5`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`mr-8 ml-8 xl:pr-10 py-3 my-auto`;
const RightColumn = styled.div`
  // background-image: url("https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75");
  ${tw` bg-cover bg-center xl:mr-24 h-auto lg:w-1/2 lg:flex-1`}
`;

const CourseButtons = tw.div`mb-16 flex flex-row items-center justify-around`;

const Content = tw.div`mt-5 lg:mb-24 flex flex-col items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0 flex flex-row items-center justify-between`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-red-600 text-gray-100 hover:bg-red-800 mr-4`}
  }
  .secondaryAction {
    ${tw`sm:mt-0 sm:ml-4 bg-purple-700 text-gray-100 hover:bg-purple-800 hover:text-gray-100`}
  }
`;

export default ({
  heading = (
    <>
      Find Perfect Hotels
      <wbr />
      <br />
      <span tw="text-primary-500">anywhere you go.</span>
    </>
  ),
  description = "We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.",
  primaryActionUrl = "#",
  primaryActionText = <p tw="flex flex-row justify-center items-center"><FaYoutube /> &nbsp;&nbsp;Subscribe</p>,
  secondaryActionUrl = "#",
  secondaryActionText = <p tw="flex flex-row justify-center items-baseline"><SiUdemy />&nbsp;&nbsp; Udemy</p>
}) => {
  return (
    <Container>
      <StyledHeader collapseBreakpointClass="sm" />
      <TwoColumn>
        <RightColumn>
          <SlideImage />
        </RightColumn>
        <LeftColumn>
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <CourseButtons>
              <Avatar sx={{border:'1px solid #0092DA', height:70,width:70}} alt="Remy Sharp" src="https://www.salesforce.com/etc/designs/blogsRedesign/images/default.jpg" />
              <Avatar sx={{border:'1px solid #0092DA', height:70,width:70}} alt="Travis Howard" src="https://www.salesforce.com/etc/designs/blogsRedesign/images/default.jpg" />
              <Avatar sx={{border:'1px solid #0092DA', height:70,width:70}} alt="Cindy Baker" src="https://www.salesforce.com/etc/designs/blogsRedesign/images/default.jpg" />
              <Avatar sx={{border:'1px solid #0092DA', height:70,width:70}} alt="Cindy Baker" src="https://www.salesforce.com/etc/designs/blogsRedesign/images/default.jpg" />
              <Avatar sx={{border:'1px solid #0092DA', height:70,width:70}} alt="Cindy Baker" src="https://www.salesforce.com/etc/designs/blogsRedesign/images/default.jpg" />
            </CourseButtons>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
              <a href={secondaryActionUrl} className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
      </TwoColumn>
    </Container>
  );
};
