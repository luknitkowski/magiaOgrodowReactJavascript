import React, { useState } from 'react';
import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from '@material-ui/icons/Phone';
import CreateIcon from '@material-ui/icons/Create';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import {HorizontalMenuContainer,StyledBottomNavigation, StyledBottomNavigationAction} from './style.js'

const HorizontalMenu = () => {
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <HorizontalMenuContainer>
      <img alt="logo" height="50" src={logo}/>
      <StyledBottomNavigation
      value={value}
        onChange={handleChange}
        showLabels
    >
      <StyledBottomNavigationAction value='/' component={Link} to="/" label="O NAS" icon={<FaceIcon />} />
      <StyledBottomNavigationAction value='/plantNursery' component={Link} to="/plantNursery" label="SZKÓŁKA ROŚLIN" icon={<HomeWorkIcon />} />
      <StyledBottomNavigationAction value='/projects' component={Link} to="/projects" label="PROJEKTY" icon={<CreateIcon />} />
      <StyledBottomNavigationAction value='/gardening' component={Link} to="/gardening" label="ZAKŁADANIE OGRODU" icon={<FilterVintageIcon />} />
      <StyledBottomNavigationAction value='/gardenCare' component={Link} to="/gardenCare" label="PIELĘGNACJA" icon={<LocalFloristIcon />} />
      <StyledBottomNavigationAction value='/contact' component={Link} to="/contact" label="KONTAKT" icon={<PhoneIcon />} />
    </StyledBottomNavigation>
    </HorizontalMenuContainer>
  );
}

export default HorizontalMenu;
