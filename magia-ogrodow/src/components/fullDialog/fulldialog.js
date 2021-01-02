import React, { forwardRef } from "react";

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Carousel from 'react-bootstrap/Carousel';

import {StyledDialog, StyledIconButton} from './style';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullDialog = ({ dialogConfig, closeFullDialog }) => {

  const closeDialog = () => {
    closeFullDialog();
  };

  return (
      <StyledDialog
        fullScreen
        open={dialogConfig.isOpen}
        TransitionComponent={Transition}
      >
        <Carousel>
          {[...dialogConfig.listOfImages].map( (imagePath, index)  => {
            return (
              <Carousel.Item key={index} style={{maxHeight:'100vh'}}>
              <img
                className="d-block w-100"
                src={imagePath}
                alt={`${index}`}
              />
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            )
          })}
                  <StyledIconButton
              edge="end"
              color="inherit"
              onClick={closeDialog}
              aria-label="close"
            >
              <CloseIcon />
        </StyledIconButton>
        </Carousel>
      </StyledDialog>
  );
};

export default FullDialog;
