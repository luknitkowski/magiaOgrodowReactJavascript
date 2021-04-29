import { useState } from "react";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import Dialog from '@material-ui/core/Dialog';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import PropTypes from 'prop-types'

import Parallax from '../parallax';
import {
  PlantNurseryContainer, PlantNurseryBlockInfo, PlantNurserySubBlockInfo,
  TypeOfFlora, SubTypeOfFlora, PlantNurseryInfoToScrollDown, StyledIconButton, StyledKeyboardArrowDownIcon
} from "./styled"

import PlantNurseryConfig from '../../configuration/plantNurseryConfig';

import imagePlantNurseryParallax from '../../images/flowers.jpg';
import imagePlantNurseryTwoParallax from '../../images/plant/1-min.jpg';
import imagePlantNurseryThreeParallax from '../../images/plant/10-min.jpg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 250,
      width: 300,
    },
    control: {
      padding: theme.spacing(10),
    },
    gridWithImage: {
      margin: '20px',
      transition: 'transform 0.2s',
      '-webkit-box-shadow': '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
      '-moz-box-shadow': '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
      'box-shadow': '0px 0px 5px 0px rgba(0, 0, 0, 0.75)',
      cursor: 'pointer',
      'border-radius': '5px',
      '&:hover': {
        transform: 'scale(1.1)',
        '-webkit-box-shadow': '0px 0px 10px 2px rgba(0, 0, 0, 0.75)',
        '-moz-box-shadow': '0px 0px 10px 2px rgba(0, 0, 0, 0.75)',
        'box-shadow': ' 0px 0px 10px 2px rgba(0, 0, 0, 0.75)'
      }
    }
  }),
);


const PlantNursery = () => {
  const [isOpenDialog, setOpenDialog] = useState<boolean>(false);
  const [imageNumber, setImageNumber] = useState<number>(1);
  const classes = useStyles();

  const scrollDown = (): void => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  };

  const openDialogForImage = (imageNumber: number): void => {
    setImageNumber(imageNumber)
    setOpenDialog(true)
  };

  const closeDialogForImage = (): void => {
    setOpenDialog(false);
  };

  return (
    <PlantNurseryContainer>
      <Parallax image={imagePlantNurseryParallax} />
      <PlantNurseryBlockInfo>
        <Fade top cascade>
          <PlantNurserySubBlockInfo>
            <h2>{PlantNurseryConfig.titleMainInfo}</h2>
            <p>{PlantNurseryConfig.mainInfo}</p>
          </PlantNurserySubBlockInfo>
        </Fade>
      </PlantNurseryBlockInfo>
      <TypeOfFlora>
        <SubTypeOfFlora>
          <Slide left cascade>
            <h3>Posiadamy:</h3>
            <ul>
              {PlantNurseryConfig.bushesList.map((item, index) => {
                return (
                  <div key={index}>
                    <li>
                      <LocalFloristIcon />
                      <b>{item.type}</b>
                    </li>
                    <p>{item.description}</p>
                  </div>
                )
              })}
            </ul>
          </Slide>
        </SubTypeOfFlora>
      </TypeOfFlora>
      <Parallax image={imagePlantNurseryTwoParallax} />
      <Grid item xs={12}>
        <Grid container justify="center">
          <Bounce left cascade>
            {PlantNurseryConfig.plantImages.map((item) => {
              return (
                <Grid className={classes.gridWithImage} key={item} item onClick={() => openDialogForImage(item)}>
                  <Paper className={classes.paper}>
                    <img alt="plant" height="100%" width="100%" src={`/images/plant/${item}-min-min.jpg`} />
                  </Paper>
                </Grid>
              )
            })}
          </Bounce>
        </Grid>
      </Grid>
      <PlantNurseryInfoToScrollDown>
      <Bounce right cascade>
        <p>{PlantNurseryConfig.additionalInfo}</p>
        <StyledIconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={scrollDown}
        >
          <StyledKeyboardArrowDownIcon
            style={{ width: "100px", height: "100px" }}
          />
        </StyledIconButton>
        </Bounce>
      </PlantNurseryInfoToScrollDown>
      <Parallax image={imagePlantNurseryThreeParallax} />
      <SimpleDialog open={isOpenDialog} onClose={closeDialogForImage} imageNumber={imageNumber} />
    </PlantNurseryContainer>
  );
};

const SimpleDialog = (props: propsSimpleDialogType) => {
  const { onClose, open, imageNumber } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <IconButton aria-label="Scroll down" onClick={handleClose} style={{ position: 'absolute', right: '0' }}>
        <CloseIcon fontSize="large" />
      </IconButton>
      <img alt='plant' height="100%" width="100%" src={`/images/plant/${imageNumber}-min-min.jpg`} />
    </Dialog>
  );
}

type propsSimpleDialogType = {
  onClose: VoidFunction,
  open : boolean,
  imageNumber : number
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open : PropTypes.bool.isRequired,
  imageNumber : PropTypes.number.isRequired
}

export default PlantNursery;
