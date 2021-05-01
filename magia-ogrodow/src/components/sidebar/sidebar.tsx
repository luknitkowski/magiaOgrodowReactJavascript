import React, { useState} from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from '@material-ui/icons/Phone';
import CreateIcon from '@material-ui/icons/Create';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type WhatStateResult = {
  top: boolean,
  left: boolean,
  bottom: boolean,
  right: boolean,
}

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  SideBarBlock: {
    padding: "25px",
    position: "fixed",
  },
  menuButton: {
    cursor: "pointer",
  },
  link: {
    color: "inherit",
    textDecoration: "inherit",
  },
});

const SideBar = () => {
  const classes = useStyles();

  const [state, setState] = useState<WhatStateResult>({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const scrollTop = (): void => {
    setTimeout(function(){ window.scrollTo(0, 0); }, 100);
  };

  const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/" className={classes.link} onClick={scrollTop}>
          <ListItem button key="AboutUs">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="O NAS" />
          </ListItem>
        </Link>
        <Link to="/plantNursery" className={classes.link} onClick={scrollTop}>
          <ListItem button key="plantNursery">
            <ListItemIcon>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="SZKÓŁKA ROŚLIN" />
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.link} onClick={scrollTop}>
          <ListItem button key="projects">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="PROJEKTY" />
          </ListItem>
        </Link>
        <Link to="/gardening" className={classes.link} onClick={scrollTop}>
          <ListItem button key="gardening">
            <ListItemIcon>
              <FilterVintageIcon />
            </ListItemIcon>
            <ListItemText primary="ZAKŁADANIE OGRODÓW" />
          </ListItem>
        </Link>
        <Link to="/gardenCare" className={classes.link} onClick={scrollTop}>
          <ListItem button key="gardenCare">
            <ListItemIcon>
              <LocalFloristIcon />
            </ListItemIcon>
            <ListItemText primary="PIELĘGNACJA OGRODÓW" />
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.link} onClick={scrollTop}>
          <ListItem button key="contact">
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText primary="KONTAKT" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  return (
    <div className={classes.SideBarBlock}>
      <React.Fragment key={"left"}>
        <Button
          onClick={toggleDrawer("left", true)}
          className={classes.menuButton}
        >
          <MenuIcon fontSize="large" />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SideBar;
