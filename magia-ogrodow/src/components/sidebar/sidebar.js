import React, {memo} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

import FaceIcon from "@material-ui/icons/Face";
import PhoneIcon from '@material-ui/icons/Phone';
import CreateIcon from '@material-ui/icons/Create';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

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

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/aboutUs" className={classes.link}>
          <ListItem button key="AboutUs">
            <ListItemIcon>
              <FaceIcon />
            </ListItemIcon>
            <ListItemText primary="O NAS" />
          </ListItem>
        </Link>
        <Link to="/plantNursery" className={classes.link}>
          <ListItem button key="plantNursery">
            <ListItemIcon>
              <HomeWorkIcon />
            </ListItemIcon>
            <ListItemText primary="SZKÓŁKA ROŚLIN" />
          </ListItem>
        </Link>
        <Link to="/projects" className={classes.link}>
          <ListItem button key="projects">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="PROJEKTY" />
          </ListItem>
        </Link>
        <Link to="/gardening" className={classes.link}>
          <ListItem button key="gardening">
            <ListItemIcon>
              <FilterVintageIcon />
            </ListItemIcon>
            <ListItemText primary="ZAKŁADANIE OGRODÓW" />
          </ListItem>
        </Link>
        <Link to="/gardenCare" className={classes.link}>
          <ListItem button key="gardenCare">
            <ListItemIcon>
              <LocalFloristIcon />
            </ListItemIcon>
            <ListItemText primary="PIELĘGNACJA OGRODÓW" />
          </ListItem>
        </Link>
        <Link to="/contact" className={classes.link}>
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

export default memo(SideBar);
