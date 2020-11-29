import React, { useState, useEffect } from "react";
import styled from "styled-components";

const ParallaxBlock = styled.div`
  background-image: url(${(props) => props.image});
  min-height: 100vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-device-width: 1366px) {
    .parallax {
      background-attachment: scroll;
    }
  }
`;

const Header = styled.h1`
  -webkit-text-stroke: 1px #3f51b5;
`;

const Parallax = ({ text = "", image }) => {
  return (
    <ParallaxBlock image={image}>
      <Header>{text}</Header>
    </ParallaxBlock>
  );
};
export default Parallax;
