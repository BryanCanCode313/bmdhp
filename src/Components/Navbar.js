import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../Components/hamburgerMenu.js";
import "../CSS/Navbar.scss"
import  Nav  from 'react-bootstrap';




const NavbarContainer = styled.div`
  width: 100vw;
  height: 55px;
  display: flex;
  flex-direction: row;
  margin: auto 0;
  top: 0;
  position: fixed;
  //border: 3px dotted yellow;
`;


export default function Navbar(props) {
  return (
      
        <NavbarContainer>
          <div className="navcon">
            <HamburgerMenu />
          </div>
        </NavbarContainer>
        
  );
}