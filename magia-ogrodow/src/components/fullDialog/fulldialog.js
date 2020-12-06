import React, { memo, useState, forwardRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Carousel from 'react-bootstrap/Carousel';

const useStyles = makeStyles((theme) => ({
  dialog: {
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    right: '20px',
    top: '10px',
    color: theme.palette.grey[500],
    zIndex: 3

  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  }
});

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullDialog = ({ dialogConfig, closeFullDialog }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const closeDialog = () => {
    closeFullDialog();
  };

  const handleClickOpen = (user) => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Dialog
        className={classes.dialog}
        fullScreen
        open={dialogConfig.isOpen}
        TransitionComponent={Transition}
        style={{maxHeight:'100vh'}}
      >
        <IconButton
              edge="end"
              color="inherit"
              onClick={closeDialog}
              aria-label="close"
              className={classes.closeButton}
            >
              <CloseIcon />
        </IconButton>
        <Carousel>
          {[...dialogConfig.listOfImages].map( (imagePath, index)  => {
            return (
              <Carousel.Item key={index} style={{maxHeight:'100vh'}}>
              <img
                className="d-block w-100"
                src={imagePath}
                alt={`${index} Image`}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })}
        </Carousel>
      </Dialog>
  );
};

export default memo(FullDialog);
