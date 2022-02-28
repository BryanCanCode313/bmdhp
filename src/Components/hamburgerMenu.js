import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "../Components/menuToggle.js";
import { NavMenu } from "../Components/navMenu.js";
import "../CSS/HamburgerMenu.scss";

const HamburgerMenuContainer = styled.div`
  display: flex;
  margin: auto;
  //border: 3px dotted white;
`;

const HamburgerIcon = styled.div`
  color: ${({ reverseColor }) => (reverseColor ? "#000" : "#fff")};
  cursor: pointer;
  z-index: 99;
  transition: all 250ms ease-in-out;
`;

const MenuContainer = styled(motion.div)`
  margin: auto;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 100;
  position: fixed;
  user-select: none;
  padding: 1em 2.5em;
  background-color: rgba(0, 0, 0, 0.65);
  //border: 11px yellow dotted; 
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center; 
  //border: 3px dotted pink;
`;

const IconContainer = styled.div`
  font-size: 16px;
  color: #555;
  padding-right: 5px;
  //border: 1px red solid;
`;

const LoginButton = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #555;
  font-size: 14px;
  font-weight: 900;
  transition: all 250ms ease-in-out;
  display: flex;
  cursor: pointer;
  padding: 5px 12px;
  &:hover {
    color: #666;
  }
  &:focus {
    outline: none;
  }
  &:not(:last-of-type) {
    border-right: 1px solid #b4b4b4;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  //border: 4px orange dotted;
`;

const menuVariants = {
  open: {
    transform: "translateX(-1%)",
    marginTop: "-15px"
    
  },
  closed: {
    transform: "translateX(110%)",
   
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

const commonVariants = {
  show: {
    transform: "translateX(0em)",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 0.01,
    },
  },
  hide: {
    transform: "translateX(5em)",
    opacity: 0,
  },
};

const commonTransition = { type: "spring", duration: 0.05 };

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
       <div className="menucon">
        <TopContainer>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            <IconContainer>
              <FontAwesomeIcon icon={faUserCircle} />
            </IconContainer>
            LOGIN
          </LoginButton>
          <LoginButton
            initial={false}
            animate={isOpen ? "show" : "hide"}
            variants={commonVariants}
            transition={commonTransition}
          >
            JOIN US
          </LoginButton>
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
        </div>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}