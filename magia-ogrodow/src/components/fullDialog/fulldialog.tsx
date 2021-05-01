import { forwardRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { TransitionProps } from '@material-ui/core/transitions';

import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Carousel from 'react-bootstrap/Carousel';

import {StyledDialog, StyledIconButton} from './styled';

type DialogConfigType = {
  isOpen: boolean,
  gardenToShow: string,
  listOfImages: string[]
};

type FullDialogTypeProps = {
  dialogConfig: DialogConfigType,
  closeFullDialog: Function
};

type olType = {
  lastElementChild: any,
  removeChild: Function
};

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FullDialog = ({ dialogConfig, closeFullDialog }: FullDialogTypeProps) => {
  const [index, setIndex] = useState<number>(0);
  const [listOfImages, setListOfImages] = useState([...dialogConfig.listOfImages]);
  const handleSelect = (selectedIndex: number) => {
    if(selectedIndex === listOfImages.length){
      if(index === 0){
        setIndex(listOfImages.length - 1);
      } else if(index === listOfImages.length - 1){
        setIndex(0);
      }
    } else {
      setIndex(selectedIndex);
    }
  };

  useEffect(() => {
    if(dialogConfig.isOpen){
      setListOfImages([...dialogConfig.listOfImages])
      setIndex(0);
      setTimeout(function(){ 
        let olList: any = document.getElementsByClassName('carousel-indicators')
        let ol: olType = olList[0] ? olList[0] : null;

        if(ol){
          ol.removeChild(ol.lastElementChild);
        }
       }, 100);
    }
  }, [dialogConfig.isOpen])

  const closeDialog = () => {
    closeFullDialog();
  };

  return (
      <StyledDialog
        fullScreen
        open={dialogConfig.isOpen}
        TransitionComponent={Transition}
      >
        <Carousel activeIndex={index} onSelect={handleSelect}>
          {[...listOfImages].map( (imagePath, index)  => {
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

FullDialog.propTypes = {
  dialogConfig: PropTypes.object.isRequired,
  closeFullDialog: PropTypes.func.isRequired
};

export default FullDialog;
