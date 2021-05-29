import {ParallaxBlock,Header} from './styled';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

type PropsParallax = {
  text?: string,
  image: any,
  is404?: boolean
}

const Parallax = ({ text = "", image, is404 = false }: PropsParallax) => {

  let contentOfParallax = null;

  if(is404){
    contentOfParallax = <div>
      <Header>404</Header>
      <p>Nie znaleziono strony</p>
      <Link to="/">
      Go Home
    </Link>
    </div>
  } else {
    <Header>{text}</Header>
  }

  return (
    <ParallaxBlock image={image}>
      {contentOfParallax}
    </ParallaxBlock>
  );
};

Parallax.propTypes = {
  text: PropTypes.string,
  image: PropTypes.any,
};

export default Parallax;

