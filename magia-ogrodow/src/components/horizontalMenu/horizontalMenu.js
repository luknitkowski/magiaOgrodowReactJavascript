import React, {memo, useState } from 'react';
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
  const [value, setValue] = useState(0);
  return (
    <div className={classes.horizontalMenuContainer}>
      <img height="50" src={logo}/>
          <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} to="/aboutUs" label="O NAS" icon={<FaceIcon />} />
      <BottomNavigationAction component={Link} to="/plantNursery" label="SZKÓŁKA ROŚLIN" icon={<HomeWorkIcon />} />
      <BottomNavigationAction component={Link} to="/projects" label="PROJEKTY" icon={<CreateIcon />} />
      <BottomNavigationAction component={Link} to="/gardening" label="ZAKŁADANIE OGRODU" icon={<FilterVintageIcon />} />
      <BottomNavigationAction component={Link} to="/gardenCare" label="PIELĘGNACJA" icon={<LocalFloristIcon />} />
      <BottomNavigationAction component={Link} to="/contact" label="KONTAKT" icon={<PhoneIcon />} />
    </BottomNavigation>
    </div>
  );
}

export default memo(HorizontalMenu);
