import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from '@material-ui/icons/Phone';
import CreateIcon from '@material-ui/icons/Create';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'

const useStyles = makeStyles({
  root: {
    width: '100%',
    backgroundColor: 'inherit',
    textAlign: 'center'
  },
  horizontalMenuContainer: {
    display: 'flex',
    width: '100%'
  }
});

const HorizontalMenu = () => {
  const classes = useStyles();
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.horizontalMenuContainer}>
      <img height="50" src={logo}/>
      <BottomNavigation
      value={value}
        onChange={handleChange}
        showLabels
        className={classes.root}
    >
      <BottomNavigationAction value='/aboutUs' component={Link} to="/aboutUs" label="O NAS" icon={<FaceIcon />} />
      <BottomNavigationAction value='/plantNursery' component={Link} to="/plantNursery" label="SZKÓŁKA ROŚLIN" icon={<HomeWorkIcon />} />
      <BottomNavigationAction value='/projects' component={Link} to="/projects" label="PROJEKTY" icon={<CreateIcon />} />
      <BottomNavigationAction value='/gardening' component={Link} to="/gardening" label="ZAKŁADANIE OGRODU" icon={<FilterVintageIcon />} />
      <BottomNavigationAction value='/gardenCare' component={Link} to="/gardenCare" label="PIELĘGNACJA" icon={<LocalFloristIcon />} />
      <BottomNavigationAction value='/contact' component={Link} to="/contact" label="KONTAKT" icon={<PhoneIcon />} />
    </BottomNavigation>
    </div>
  );
}

export default HorizontalMenu;
