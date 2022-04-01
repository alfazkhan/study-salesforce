import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "../headers/light.js";
import SlideImage from "components/carasoual/slideImage.js";

import { SiUdemy } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';

import Avatar from '@mui/material/Avatar';
import { useHistory } from "react-router";



const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw``}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100 pt-20`;
const LeftColumn = tw.div`w-full lg:w-1/2 px-10 lg:px-16 my-auto`;
const RightColumn = styled.div`
  // background-image: url("https://images.unsplash.com/photo-1551918120-9739cb430c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&width=1440&height=1024&q=75");
  ${tw` bg-cover bg-center lg:w-1/2`}
`;

const CourseButtons = tw.div`my-2 flex flex-row items-center justify-center flex-wrap`;

const Content = tw.div`mt-5 lg:mb-10 flex flex-col items-stretch justify-start`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black mb-5 mx-auto px-5 lg:px-10 text-center`;
const Paragraph = tw.p`max-w-md my-8 lg:my-5 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`my-8 lg:mb-0 flex flex-row items-center justify-center`}
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

const mobile = window.innerWidth < 768

export default ({
  heading = (
    <>
      Learn Salesforce
      <wbr />
      <br />
      <span tw="text-primary-500">Administrator and

        Development</span>
    </>
  ),
  description = "Learn Salesforce Administrator and Development. ",
  primaryActionUrl = "https://www.youtube.com/c/SanjayGupta_TechSchool/",
  primaryActionText = <p tw="flex flex-row justify-center items-center"><FaYoutube /> &nbsp;&nbsp;Subscribe</p>,
  secondaryActionUrl = "https://www.udemy.com/user/sanjay-gupta-354/",
  secondaryActionText = <p tw="flex flex-row justify-center items-baseline"><SiUdemy />&nbsp;&nbsp; Udemy Courses</p>,
  avatarStyle = {
    border: '1px solid #F69603',
    height: 80,
    width: 80,
    bgcolor: '#1A202C',
    fontSize: 16,
    textAlign: 'center',
    marginRight: mobile ? 0.5 : 3,
    marginLeft: mobile ? 0.5 : 3,
    marginTop: mobile ? 1 : 2,
    cursor:'pointer'
  }
},props) => {

  const history = useHistory();
  console.log(history)

  const handleAvatarClick=(e)=>{
    console.log(e.target.textContent)
  }

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
            {/* <Paragraph>{description}</Paragraph> */}
            <CourseButtons>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('/Administrator/Lightning-Experience')}} alt="Remy Sharp">Admin</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('/Administrator/Flow-Builder')}} alt="Remy Sharp">Flows</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('Administrator/Reports-&-Dashboards')}} alt="Remy Sharp">Reports</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('Administrator/Data-Security')}} alt="Remy Sharp">Data <br />Security</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('Developer/Apex')}} alt="Remy Sharp">Apex</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('Developer/Apex-Tests')}} alt="Remy Sharp">Apex <br />Tests</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('Developer/Trigger')}} alt="Remy Sharp">Trigger</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('Developer/Asynchronous-Apex')}} alt="Remy Sharp">Async <br />Apex</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('/Developer/Aura')}} alt="Remy Sharp">Aura</Avatar>
              <Avatar sx={avatarStyle} onClick={()=>{history.push('/Scenarios/LWC')}} alt="Remy Sharp">LWC</Avatar>
            </CourseButtons>
            <Actions>
              <a href={primaryActionUrl} target="_0"
                className="action primaryAction">
                {primaryActionText}
              </a>
              
              <a href={secondaryActionUrl} target="_0"
                className="action secondaryAction">
                {secondaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
      </TwoColumn>
    </Container>
  );
};
