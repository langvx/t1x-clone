import React from "react";

import styled from "styled-components";

import HamburgerIco from "assets/menu-options.png";

const Root = styled.div`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 25px;
  z-index: 1;
  display: none;
  cursor: pointer;
  @media (max-width: ${(p) => p.theme.screen.md}) {
    display: initial;
  }
`;

const Hamburger = () => {
  return (
    <Root>
      <img src={HamburgerIco} alt="" />
    </Root>
  );
};

export default Hamburger;
