import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { Container as ContainerBase, ContentWithPaddingXl } from "components/misc/Layouts";
import { SectionDescription } from "components/misc/Typography";
import { AiFillStar, AiFillYoutube } from 'react-icons/ai'
import { SiUdemy } from 'react-icons/si'
import Divider from '@mui/material/Divider';


const Container = tw(ContainerBase)`my-1 lg:my-2  text-gray-100 -mx-8 px-8 bg-gray-900`;
const Content = tw.div`my-5 py-10`;

const HeadingContainer = tw.div``;
const Heading = tw(SectionHeading)`sm:text-3xl md:text-4xl lg:text-5xl`;
const Subheading = tw(SubheadingBase)`text-gray-100 text-center`;
const Description = tw(SectionDescription)`text-gray-400 text-center mx-auto max-w-screen-md`;

const StatsContainer = tw.div`mt-8 flex flex-col sm:flex-row items-center justify-start flex-wrap max-w-screen-md mx-auto`
const Stat = tw.div`flex flex-col text-center p-4 tracking-wide flex-grow justify-start items-center`
const StatKey = tw.div`text-xl font-medium`
const StatValue = tw.div`text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-500`

export default ({
  subheading = "",
  heading = "",
  description = "",
  youtubeStats = [
    {
      key: "Subscribers",
      value: "31K+",
    },
    {
      key: "Views",
      value: "4.3 M+",
    },
    {
      key: "Watch Time(hours)",
      value: "183K+",
    },
  ],
  udemyStats = [
    {
      key: "Total Students",
      value: "4200+",
    },
    {
      key: "Reviews",
      value: "150+",
    },
    {
      key: "Rating",
      value: <div tw="flex flex-row items-center">4.5 <AiFillStar /></div>,
    },
  ]
}) => {
  return (
    <Container>
      <Content>
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          <Heading>{heading}</Heading>
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <StatsContainer>
          <div tw="flex flex-row items-center">
            <AiFillYoutube tw="text-5xl" />
            <span tw="text-5xl hidden lg:block ml-10">|</span>
          </div>
          {youtubeStats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}
        </StatsContainer>
        <StatsContainer>
          <div tw="flex flex-row">
            <SiUdemy tw="text-5xl" />
            <span tw="text-5xl hidden lg:block ml-10">|</span>
          </div>
          {udemyStats.map((stat, index) => (
            <Stat key={index}>
              <StatValue>{stat.value}</StatValue>
              <StatKey>{stat.key}</StatKey>
            </Stat>
          ))}

        </StatsContainer>
      </Content>
    </Container>
  );
};
