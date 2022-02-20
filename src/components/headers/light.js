import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/logo.svg";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import MenuItem from '@mui/material/MenuItem';
import './light.css'
import {
  Link,
} from "react-router-dom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500
`;

export const NavText = tw.p`
  text-lg my-2 lg:text-sm lg:my-0
  text-gray-900 flex flex-row text-center flex-wrap
  hover:text-primary-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-3!`};

  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300 text-gray-900
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "lg" }) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState([false, false, false, false, false])
  const [action, SetAction] = useState(false)
  const Mobile = window.innerWidth < 768

  const handleClick = (event) => {

    const link = event.target.name
    setAnchorEl(event.currentTarget)
    const temp = [false, false, false, false, false]
    temp[link] = true
    setOpen(temp)
    console.log(temp)

  };

  const handleRequestClose = () => {
    setOpen([false, false, false, false, false])
  };

  const handleAction = () => {
    SetAction(true)
  }

  const handleClickAway = () => {
    if (!Mobile) {
      handleRequestClose()
    }
  }


  const defaultLinks = [
    <>
      <NavLinks key={1} style={{ marginLeft: 'auto' }} >
        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Administrator <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Classic</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Lightning Experience</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Data Security</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Workflow Rule</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Reports & Dashboards</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Process Builder</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Flow Builder</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Developer <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Trigger</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Apex Tests</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Asynchronous Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Lightning Aura Component</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Lightning Web Component</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Scenarios <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Process Builder</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Flow Builder</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Asynchronous Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Trigger and Test Class</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Aura</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>LWC</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Cloud <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Sales</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Service</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>CPQ</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>NPSP</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Marketing</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Udemy Courses <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Salesforce Administrator Certification Master Class</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Salesforce Platform Developer 1 Master Class</NavText></MenuItem>
          </div>
        </div>


      </NavLinks>
      <NavLinks key={2} >
        <PrimaryLink href="/contact-us/connect" >
          Contact Us
        </PrimaryLink>
      </NavLinks>
    </>
  ];

  const dropdownStyle={
    backgroundColor: '#Fff',
    border: '1px solid #243E63',
    width:'100%',
    justifyContent:'center',
    textAlign:'center'
  }


  const mobileLinks = [
    <>
      <NavLinks key={1} style={{zIndex:99999}}>
        <NavLink
          aria-owns={open[0] ? 'Administrator-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={0}
          tw="text-black"
        >
          Administrator <ArrowDropDownIcon />
        </NavLink>
        {
          open[0]
            ?
            <div
              id="Administrator-menu"
              style={dropdownStyle}

            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Classic</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Lightning Experience</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Data Security</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Workflow Rule</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Reports & Dashboards</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Process Builder</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Flow Builder</NavText></MenuItem>
            </div>
            : null
        }
        <NavLink
          aria-owns={open[1] ? 'Developer-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={1}
          tw="text-black"
        >
          Developer <ArrowDropDownIcon />
        </NavLink>
        {
          open[1]
            ?
            <div
              id="Developer-menu"
              style={dropdownStyle}
            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Trigger</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Apex Tests</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Asynchronous Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Lightning Aura Component</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Lightning Web Component</NavText></MenuItem>

            </div>
            : null
        }

        <NavLink
          aria-owns={open[2] ? 'Scenarios-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={2}
          tw="text-black"
        >
          Scenarios <ArrowDropDownIcon />
        </NavLink>
        {
          open[2]
            ?
            <div
              id="Scenarios-menu"
              style={dropdownStyle}
            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Process Builder</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Flow Builder</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Asynchronous Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Trigger and Test Class</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Aura</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>LWC</NavText></MenuItem>
            </div>
            : null
        }


        <NavLink
          aria-owns={open[3] ? 'Cloud-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={3}
          tw="text-black"
        >
          Cloud <ArrowDropDownIcon />
        </NavLink>
        {
          open[3]
            ?
            <div
              id="Cloud-menu"
              style={dropdownStyle}
            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Sales</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Service</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>CPQ</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>NPSP</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Marketing</NavText></MenuItem>
            </div>
            : null
        }


        <NavLink
          aria-owns={open[4] ? 'udemy-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={4}
          tw="text-black"
        >
          Udemy Courses <ArrowDropDownIcon />
        </NavLink>
        {
          open[4]
            ?
            <div
              id="udemy-menu"
              style={dropdownStyle}
            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Salesforce Administrator<br/> Certification Master Class</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/playlist/name"><NavText>Salesforce Platform Developer<br/> 1 Master Class</NavText></MenuItem>
            </div>
            : null
        }

      </NavLinks>



      <NavLinks key={2} >
        <PrimaryLink href="/contact-us/connect" >
          Contact Us
        </PrimaryLink>
      </NavLinks>
    </>
  ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      Study Salesforce
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {links}
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer} style={{

      }}>
        {logoLink}
        <MobileNavLinks initial={{ x: "150%", display: "none" }} animate={animation} css={collapseBreakpointCss.mobileNavLinks} >
          {mobileLinks}
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? "open" : "closed"} >
          {showNavLinks ? <CloseIcon tw="w-6 h-6 mr-10 mt-5 text-red-500" /> : <MenuIcon tw="w-6 h-6 mr-5 text-gray-900" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`
  }
};
