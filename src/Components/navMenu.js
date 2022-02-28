import React from 'react';
import { motion } from "framer-motion";
import styled from "styled-components";
import '../CSS/Navv.css';
//import  Nav  from 'react-bootstrap';
//import MenuToggle from '../Components/menuToggle.js';
//import whtbmdlogo from '../img/wht-bmd-logo.png';


const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  //border: solid blue 13px;
`;

const NavList = styled.ul`
  padding: 0 0.8em;
  width: 100%;
  display: flex;
  flex-direction: column;
  //border: solid lightblue 3px;
`;

const NavLink = styled(motion.li)`
  font-weight: 600;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer; 
  //border: solid green 3px;
   

  a {
    text-decoration: none;
    color: #444;
    font-size: 20px;
    transition: all 200ms ease-in-out;
    
  }

  &:hover {
    a {
      color: white;
    }
  }
`;

const variants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

export function NavMenu({ isOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <a href="#">Home</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <a href="#">Products</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <a href="#">Key Benefits</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <a href="#">About</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.7, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.25, duration: 0.05 },
            },
          }}
        >
          <a href="#">FAQ</a>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? "show" : "hide"}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.8, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.3, duration: 0.05 },
            },
          }}
        >
          <a href="#">Contact</a>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}

 /*
         <div>
                <Nav
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                    className="d-flex flex-row"
                    >
                    
                        <div className="div" >
                            <Nav.Item>
                                <Nav.Link href="/home">Gold</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Gun</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">God</Nav.Link>
                            </Nav.Item>
                        </div> 

                        <Nav.Item className="mr w-50 pr-5">
                            
                                <MenuToggle />
                            
                        </Nav.Item> 

                        <Nav.Item className="ml w-50 pl-5">
                                <Navbar.Brand href="#home"> 
                                  
                                    <img
                                        src={whtbmdlogo}
                                        width="15"
                                        height="auto"
                                        className="m-auto"
                                        alt="Broken Sigil"
                                    />  
                                   
                                </Navbar.Brand>
                        </Nav.Item>                         
                     
                </Nav>
                
        </div>
 
 */


/**
 * 
* function () {
            return (  

            );
        }
        export default ;
 */

