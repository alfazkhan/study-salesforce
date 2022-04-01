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
   px-0 lg:px-10 z-10
`;

export const NavLinks = tw.div`inline-block`;

/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLink = tw.a`
  text-lg lg:text-sm lg:mx-1 my-2 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-900
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
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-3! mr-8 pb-0 py-3 lg:py-5`};

  img {
    ${tw`w-10`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300 text-gray-900
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center mt-10`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

export default ({ roundedHeaderButton = false, logoLink, links, className, collapseBreakpointClass = "md", userStyle, buttonTW }) => {

  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState([false, false, false, false, false])
  const [action, SetAction] = useState(false)
  const Mobile = window.innerWidth < 768

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();

  const handleClick = (event) => {

    const link = event.target.name
    setAnchorEl(event.currentTarget)
    const temp = [false, false, false, false, false, false]
    temp[link] = true
    setOpen(temp)
    console.log(temp)

  };

  const handleRequestClose = () => {
    setOpen([false, false, false, false, false, false])
    toggleNavbar()

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
            Adminstrator <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Classic"><NavText>Classic</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Lightning-Experience"><NavText>Lightning Experience</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Data-Security"><NavText>Data Security</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Workflow-Rule"><NavText>Workflow Rule</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Reports-&-Dashboards"><NavText>Reports & Dashboards</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Process-Builder"><NavText>Process Builder</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Flow-Builder"><NavText>Flow Builder</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Developer <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Apex"><NavText>Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Trigger"><NavText>Trigger</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Apex-Tests"><NavText>Apex Tests</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Asynchronous-Apex"><NavText>Asynchronous Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Lightning-Aura-Component"><NavText>Lightning Aura Component</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Lightning-Web-Component"><NavText>Lightning Web Component</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Scenarios <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            {/* <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Process-Builder"><NavText>Process Builder</NavText></MenuItem> */}
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Flow-Builder"><NavText>Flow Builder</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Apex"><NavText>Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Asynchronous-Apex"><NavText>Asynchronous Apex</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Trigger-and-Test-Class"><NavText>Trigger and Test Class</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Aura"><NavText>Aura</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/LWC"><NavText>LWC</NavText></MenuItem>
          </div>
        </div>

        {/* <div className="dropdown">
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
        </div> */}

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Get ready for Interview<ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Interview-Preparation/Administrator"><NavText>Administrator</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Interview-Preparation/Developer"><NavText>Developer</NavText></MenuItem>
            <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Interview-Preparation/Q&A"><NavText>Q & A</NavText></MenuItem>
          </div>
        </div>

        <div className="dropdown">
          <NavLink
            className="dropbtn"
          >
            Certification Courses <ArrowDropDownIcon style={{ verticalAlign: 'top' }} />
          </NavLink>
          <div className="dropdown-content">
            <a target="_0" href="https://kadge.io/admin201">
              <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} ><NavText>Administrator Certification</NavText></MenuItem>
            </a>
            <a target="_0" href="https://kadge.io/pd1">
              <MenuItem onMouseOver={handleAction} onClick={handleRequestClose} ><NavText>Platform Developer-1</NavText></MenuItem>
            </a>
          </div>
        </div>


      </NavLinks>
      <NavLinks key={2} >
        <PrimaryLink href="/#connect" tw="text-gray-100 hocus:bg-primary-700 hocus:text-gray-200" style={buttonTW} >
          Let’s Connect
        </PrimaryLink>
      </NavLinks>
    </>
  ];

  const dropdownStyle = {
    backgroundColor: '#Fff',
    border: '1px solid #243E63',
    width: '100%',
    justifyContent: 'center',
    textAlign: 'center'

  }


  const mobileLinks = [
    <>
      <NavLinks key={1} style={{ zIndex: 99999 }}>
        <NavLink
          aria-owns={open[0] ? 'Administrator-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={0}
          tw="text-black"
        >
          Adminstrator <ArrowDropDownIcon />
        </NavLink>
        {
          open[0]
            ?
            <div
              id="Administrator-menu"
              style={dropdownStyle}

            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Classic"><NavText>Classic</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Lightning-Experience"><NavText>Lightning Experience</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Data-Security"><NavText>Data Security</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Workflow-Rule"><NavText>Workflow Rule</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Reports-&-Dashboards"><NavText>Reports & Dashboards</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Process-Builder"><NavText>Process Builder</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Adminstrator/Flow-Builder"><NavText>Flow Builder</NavText></MenuItem>
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
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Apex"><NavText>Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Trigger"><NavText>Trigger</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Apex-Tests"><NavText>Apex Tests</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Asynchronous-Apex"><NavText>Asynchronous Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Lightning-Aura-Component"><NavText>Lightning Aura Component</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Developer/Lightning-Web-Component"><NavText>Lightning Web Component</NavText></MenuItem>

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
              {/* <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Process-Builder" ><NavText>Process Builder</NavText></MenuItem> */}
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Flow-Builder" ><NavText>Flow Builder</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Apex" ><NavText>Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Asynchronous-Apex" ><NavText>Asynchronous Apex</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Trigger-and-Test-Class" ><NavText>Trigger and Test Class</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/Aura"><NavText>Aura</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Scenarios/LWC"><NavText>LWC</NavText></MenuItem>
            </div>
            : null
        }

{/* 
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
        } */}


        <NavLink
          aria-owns={open[4] ? 'udemy-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={4}
          tw="text-black"
        >
          Get Ready for Interview <ArrowDropDownIcon />
        </NavLink>
        {
          open[4]
            ?
            <div
              id="udemy-menu"
              style={dropdownStyle}
            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Interview-Preparation/Administrator"><NavText>Administrator</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Interview-Preparation/Developer"><NavText>Developer</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="/Interview-Preparation/Q&A"><NavText>Q & A</NavText></MenuItem>
            </div>
            : null
        }


        <NavLink
          aria-owns={open[5] ? 'udemy-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
          name={4}
          tw="text-black"
        >
          Certification Courses <ArrowDropDownIcon />
        </NavLink>
        {
          open[5]
            ?
            <div
              id="udemy-menu"
              style={dropdownStyle}
            >
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="https://kadge.io/admin201"><NavText>Administrator</NavText></MenuItem>
              <MenuItem onClick={() => { handleRequestClose(); toggleNavbar(); }} onMouseOver={handleAction} onClick={handleRequestClose} component={Link} to="https://kadge.io/pd1"><NavText>Platform Developer-1</NavText></MenuItem>
            </div>
            : null
        }

      </NavLinks>



      <NavLinks key={2} >
        <PrimaryLink href="/#connect" >
          Contact Us
        </PrimaryLink>
      </NavLinks>
    </>
  ];


  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      &#123; StudySalesforce &#125;
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  const [colorChange, setColorchange] = useState(window.scrollY >= 80);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    }
    else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);

  return (
    <Header className={className || "header-light"} style={userStyle,
    {
      position: 'fixed',
      top: 0,
      zIndex: 9999,
      right: 0,
      left: 0,
      backgroundColor: colorChange ? '#1A202C' : 'white',
      color: colorChange ? 'white' : '#1A202C',
      transition: `0.4s all ease`
    }}>
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
          {showNavLinks ? <CloseIcon tw="w-6 h-6 mr-10 mt-5 text-red-500" /> : <MenuIcon tw="w-6 h-6 mr-5" style={{ color: colorChange ? 'white' : '#1A202C' }} />}
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
