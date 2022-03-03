import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import StatsIllustrationSrc from "images/Teacher.svg";
import { ReactComponent as SvgDotPattern } from "images/dot-pattern.svg";
import { SiUdemy } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';
import sassguru from 'images/sassguru.jpg'

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl lg:mx-auto mx-5 mt-5 py-0 lg:py-5`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto relative`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(
  SectionHeading
)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-justify text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Statistics = tw.div`flex flex-col items-center sm:block text-center md:text-left mt-4`;
const Statistic = tw.div`text-left sm:inline-block sm:mr-12 last:mr-0 mt-4`;
const Value = tw.div`font-bold text-lg sm:text-xl lg:text-2xl text-secondary-500 tracking-wide`;
const Key = tw.div`font-medium text-primary-700`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-8 md:mt-10 text-sm inline-block ml-0 lg:ml-5`;
const SecondaryButton = tw.button`mt-8  md:mt-10 text-sm inline-block bg-gray-300 py-3 px-10 text-gray-900 rounded-md font-bold`;

const DecoratorBlob = styled(SvgDotPattern)(props => [
  tw`w-20 h-20 absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 fill-current text-primary-500 -z-10`
]);

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0 flex flex-row items-center justify-between`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 px-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-red-600 text-gray-100 hover:bg-red-800 mr-4`}
  }
  .secondaryAction {
    ${tw`sm:mt-0 bg-purple-700 hover:bg-purple-800 sm:ml-4 text-gray-100 hover:text-gray-100`},
  }
`;

export default ({
  subheading = "Our Track Record",
  heading = (
    <>
     Begin Your  <wbr /> <span tw="text-primary-500">Salesforce Journey</span>
    </>
  ),
  description = "Are you confused and wondering how to ramp yourself up in the Salesforce Ecosystem? Don’t worry at all! Here you can find categorised videos to learn Salesforce. So, Begin your Administrator and Developer Journey with Sanjay Gupta.",
  primaryActionText = <p tw="flex flex-row justify-center items-center"><FaYoutube /> &nbsp;&nbsp;Subscribe</p>,
  primaryActionUrl = "https://timerse.com",
  secondaryActionText = <p tw="flex flex-row justify-center items-baseline"><SiUdemy />&nbsp;&nbsp; Udemy</p>,
  secondaryActionUrl = "asas",
  imageSrc = StatsIllustrationSrc,
  imageCss = null,
  imageContainerCss = null,
  imageDecoratorBlob = false,
  imageDecoratorBlobCss = null,
  imageInsideDiv = true,
  statistics = [],
  textOnLeft = false
}) => {
  // The textOnLeft boolean prop can be used to display either the text on left or right side of the image.
  //Change the statistics variable as you like, add or delete objects
  const defaultStatistics = [
    {
      key: "Clients",
      value: "2282+"
    },
    {
      key: "Projects",
      value: "3891+"
    },
    {
      key: "Awards",
      value: "1000+"
    }
  ];



  return (
    <Container>
      <a href="https://my.saasguru.co/salesforce-cert-prep?utm_source=studysalesforce&utm_medium=banner&utm_campaign=sfdc" target="_0"> 
            <img src={sassguru} style={{ height: 130, width: 600,aspectRatio: 'auto 600/130' }} tw="mx-auto mt-10" />
          </a>
      <TwoColumn css={!imageInsideDiv && tw`md:items-center`}>
        <ImageColumn css={imageContainerCss}>
          {imageInsideDiv ? <Image imageSrc={imageSrc} css={imageCss} /> : <img src={imageSrc} css={imageCss} alt="" />}
          {imageDecoratorBlob && <DecoratorBlob css={imageDecoratorBlobCss} />}
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            {subheading && <Subheading>{subheading}</Subheading>}
            <Heading>{heading}</Heading>
            <Description>{description}</Description>
            <Statistics>
              {statistics.map((statistic, index) => (
                <Statistic key={index}>
                  <Value>{statistic.value}</Value>
                  <Key>{statistic.key}</Key>
                </Statistic>
              ))}
            </Statistics>
            <div tw="flex flex-row justify-evenly lg:justify-start">
              <Actions>
                <a href={primaryActionUrl}
                className="action primaryAction">
                  {primaryActionText}
                </a>
                <a href={secondaryActionUrl}
                className="action secondaryAction">
                  {secondaryActionText}
                </a>
              </Actions>
            </div>
          </TextContent>
        </TextColumn>
      </TwoColumn>
    </Container>
  );
};
