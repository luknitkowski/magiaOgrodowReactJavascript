import { func, string } from 'prop-types';

import { ToggleContainer } from './styled';
import ToggleType from './toggleType'

import { ReactComponent as MoonIcon } from '../../images/moon.svg';
import { ReactComponent as SunIcon } from '../../images/sun.svg';

const Toggle = ({ theme, toggleTheme }: ToggleType) => {
  const isLight: boolean = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;