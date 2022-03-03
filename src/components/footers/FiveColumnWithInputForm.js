import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";

import LogoImage from "images/logo.svg";
import { AiOutlineInstagram, AiFillLinkedin, AiOutlineTwitter, AiOutlineWhatsApp, AiFillYoutube, AiOutlineLinkedin } from 'react-icons/ai'
import { SiUdemy } from 'react-icons/si'

const Container = tw.div`relative bg-gray-900 text-gray-100 -mb-8 -mx-8 px-8 py-10`;
const Content = tw.div`max-w-screen-xl mx-auto relative`;
const SixColumns = tw.div`flex flex-wrap text-center sm:text-left justify-center sm:justify-start md:justify-between -mt-12`;

const Column = tw.div`px-10 sm:px-0 sm:w-1/4 md:w-auto mt-12`;

const ColumnHeading = tw.h5`uppercase font-bold mx-5`;

const LinkList = tw.ul`mt-6 mx-5 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`border-b-2 border-transparent hocus:border-gray-700 pb-1 transition duration-300`;

const SubscribeNewsletterColumn = tw(Column)`text-center lg:text-left w-full! lg:w-auto! mt-20 lg:mt-12`;
const SubscribeNewsletterContainer = tw.div`max-w-sm mx-auto lg:mx-0 `;
const SubscribeText = tw.p`mt-2 lg:mt-6 text-sm font-medium text-gray-600 mx-5`;
const SubscribeForm = tw.form`mt-4 lg:mt-6 text-sm sm:flex max-w-xs sm:max-w-none mx-auto sm:mx-0`;
const Input = tw.input`bg-gray-300 px-6 py-3 rounded sm:rounded-r-none border-2 sm:border-r-0 border-gray-400 hover:border-primary-500 focus:outline-none transition duration-300 w-full`;
const SubscribeButton = tw(PrimaryButtonBase)`mt-4 sm:mt-0 w-full sm:w-auto rounded sm:rounded-l-none px-8 py-3`;

const Divider = tw.div`my-5 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-8`;
const LogoText = tw.h5`ml-2 text-xl font-black tracking-wider text-gray-100`;

const CopywrightNotice = tw.p`text-center text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-500`;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex`;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-primary-500 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <Content>
        <SixColumns>

          <Column>
            <ColumnHeading>Administrator</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Classic</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Lightning Experience</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Data Security</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Workflow Rule</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Reports & Dashboards</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Process Builder</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Flow Builder</Link>
              </LinkListItem>

            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Developer</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Apex</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Trigger</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Apex Tests</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Asynchronous Apex</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Lightning Aura Component</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Lightning Web Component</Link>
              </LinkListItem>

            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Scenarios</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Process Builder</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Flow Builder</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Apex</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Asynchronous Apex</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Trigger and Test Class</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Aura</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">LWC</Link>
              </LinkListItem>

            </LinkList>
          </Column>

          {/* <Column>
            <ColumnHeading>Cloud</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Sales</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">CPQ</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">NPSP</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Marketing</Link>
              </LinkListItem>

            </LinkList>
          </Column> */}

          <Column>
            <ColumnHeading>Get Ready for Interview </ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Administrator</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Developer</Link>
              </LinkListItem>

            </LinkList>
          </Column>

          <Column>
            <ColumnHeading>Udemy Courses </ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">Salesforce Administrator Certification Master Class</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Salesforce Platform Developer 1 Master Class</Link>
              </LinkListItem>

            </LinkList>
          </Column>

          {/* <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We deliver high quality blog posts written by professionals weekly. And we promise no spam.
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn> */}
        </SixColumns>
        <Divider />
        <ThreeColRow>
          <LogoContainer>
            {/* <LogoImg src={LogoImage} /> */}
            <LogoText>&#123; StudySalesforce &#125;</LogoText>
          </LogoContainer>
          <CopywrightNotice>&copy; 2020 Study Salesforce All Rights Reserved.</CopywrightNotice>
          <SocialLinksContainer>
            <SocialLink href="https://facebook.com">
              <AiFillLinkedin />
            </SocialLink>
            <SocialLink href="https://twitter.com">
              <AiOutlineTwitter />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <AiFillYoutube />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <SiUdemy />
            </SocialLink>
            <SocialLink href="https://youtube.com">
              <AiOutlineWhatsApp />
            </SocialLink>
          </SocialLinksContainer>
        </ThreeColRow>
      </Content>
    </Container>
  );
};
