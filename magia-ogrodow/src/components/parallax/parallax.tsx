import {ParallaxBlock,Header} from './styled';
import PropTypes from "prop-types";

type PropsParallax = {
  text?: string,
  image: any
}

const Parallax = ({ text = "", image }: PropsParallax) => {
  return (
    <ParallaxBlock image={image}>
      <Header>{text}</Header>
    </ParallaxBlock>
  );
};

Parallax.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
};

export default Parallax;

