import React, { Fragment } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  Navlogo,
  MobilIcon,
  Navmenu,
  NavLinks,
  NavItem,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <Fragment>
      <Nav>
        <NavbarContainer>
          <Navlogo to="/">Cbay</Navlogo>
          <MobilIcon>
            <FaBars />
          </MobilIcon>
          <Navmenu>
            <NavItem>
              <NavLinks to="home">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Shop">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signin">SignIn</NavLinks>
            </NavItem>
          </Navmenu>
        </NavbarContainer>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
