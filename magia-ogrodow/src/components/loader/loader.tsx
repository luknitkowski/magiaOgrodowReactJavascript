import { StyledLoader } from './styled';
import logo from '../../images/logo.png'

const Loader = () => {

  return (
    <StyledLoader > 
        <img alt="logo" height="100" src={logo} />
    </StyledLoader>
  );
};

export default Loader;
