import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";
import serverIllustrationImageSrc from "images/server-illustration-2.svg";
import { SiUdemy } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative bg-center bg-cover mt-0 lg:mt-5`}
  background-image: url("https://images.unsplash.com/photo-1522071901873-411886a10004?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div` absolute inset-0 bg-gray-900 opacity-25`;

const HeroContainer = tw.div` relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 text-sm sm:text-base px-6 py-5 sm:px-10 sm:py-5 inline-block bg-red-600 text-gray-100 hover:bg-red-800`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-xl`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

const Actions = styled.div`
  ${tw`my-8 lg:mb-0 flex flex-col lg:flex-row items-center justify-center`}
  .action {
    ${tw`text-center inline-block w-full sm:w-full py-4 font-semibold rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-red-600 text-gray-100 hover:bg-red-800 mx-4 px-10 lg:mx-10`}
  }
  .secondaryAction {
    ${tw`sm:mt-0 sm:ml-4 bg-purple-700 text-gray-100 hover:bg-purple-800 hover:text-gray-100 px-10 mt-5 lg:mt-0`}
  }
  .subscribeAction {
    ${tw`sm:mt-0 sm:ml-4 bg-purple-700 text-gray-100 hover:bg-purple-800 hover:text-gray-100`}
  }
`;

export default (
  {
    playlist = "Playlist Name",
    category = "Category name",
    primaryActionText = <p tw="flex flex-row justify-center items-center px-10"><FaYoutube /> &nbsp;&nbsp;Playlist</p>,
    primaryActionUrl = "#",
    secondaryActionText = <p tw="flex flex-row justify-center items-center "><SiUdemy /> &nbsp;&nbsp;Udemy Course</p>,
    
    imageSrc = serverIllustrationImageSrc,
    playlistLink = ""
  }
) => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Locations
      </NavLink>
      <NavLink href="#">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  const secondaryActionUrl = category==="Administrator"?"https://kadge.io/admin201":"https://kadge.io/pd1"

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer>
        <TwoColumn>
          <Notification>{category}</Notification>
          <Heading>
            {playlist.replace('-'," ")}
          </Heading>
          {/* <PrimaryButton as="a" href={primaryButtonUrl}>{primaryButtonText}</PrimaryButton> */}
          <Actions>
            <a href={playlistLink} target="_0"
              className="action primaryAction">
              {primaryActionText}
            </a>
            <a href={secondaryActionUrl} target="_0"
              className="action secondaryAction">
              {secondaryActionText}
            </a>
          </Actions>
          <Actions>

          <div class="g-ytsubscribe" data-channelid="UCI4ifRomfs0DMT5PB8iVclw" data-layout="full" data-theme="dark" data-count="default"></div>

          </Actions>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
