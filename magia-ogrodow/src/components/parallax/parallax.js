import React from "react";
import {ParallaxBlock,Header} from './style';

const Parallax = ({ text = "", image }) => {
  return (
    <ParallaxBlock image={image}>
      <Header>{text}</Header>
    </ParallaxBlock>
  );
};

export default Parallax;

