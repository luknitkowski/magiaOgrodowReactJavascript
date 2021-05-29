import Parallax from '../parallax';
import image404sParallax from '../../images/404-background.jpg';

import {
  StyledNoMatchContainer
} from './styled';


const NoMatch = () => {

  return (
    <StyledNoMatchContainer>
      <Parallax image={image404sParallax} is404={true}  />
    </StyledNoMatchContainer>
  );
};

export default NoMatch;
