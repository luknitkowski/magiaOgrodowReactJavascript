import React, { useState } from "react";
import Parallax from '../parallax';
import imagePlantNurseryParallax from '../../images/flowers.jpg';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import imagePlantNurseryTwoParallax from '../../images/plant/1-min.jpg';
import imagePlantNurseryThreeParallax from '../../images/plant/10-min.jpg';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import Dialog from '@material-ui/core/Dialog';
import Bounce from 'react-reveal/Bounce';

import {
  PlantNurseryContainer, PlantNurseryBlockInfo, PlantNurserySubBlockInfo,
  TypeOfFlora, SubTypeOfFlora, PlantNurseryInfoToScrollDown, StyledIconButton, StyledKeyboardArrowDownIcon
} from "./style"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

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
  const [isOpenDialog, setOpenDialog] = useState(false);
  const [imageNumber, setImageNumber] = useState(1);
  const classes = useStyles();

  const bushesList = [
    {
      type: 'Drzewa i krzewy iglaste',
      description: 'Większość roślin iglastych to gatunki zimozielone, ale można znaleźć gatunki gubiące igły na zimę. Różnorodność kształtów i kolorów jest ogromna. Iglaki są nieocenionym elementem ożywiającym krajobraz zimowy.'
    },
    {
      type: 'Drzewa i krzewy liściaste',
      description: 'Od zawsze zajmowały szczególne miejsce w otoczeniu ludzi. Tworzą urozmaiconą grupę. Są to rośliny o różnych formach pokrojowych, o barwnych i wymyślnych liściach, dekoracyjnych kwiatach i owocach. Zastosowanie ich to wprowadzenie życia do ogrodu, pozbycie się nudy i monotonii.'
    },
    {
      type: 'Drzewa i krzewy owocowe',
      description: 'Dostarczają smacznych owoców, które można wykorzystać na różne sposoby. Zbiory z własnych drzewek i krzewów smakują lepiej i sprawiają dużo radości. Większość drzewek zaszczepione są na podkładkach karłowych, które można wysadzać nawet w najmniejszych ogrodach.'
    },
    {
      type: 'Pnącza',
      description: 'To rośliny szczególne wytwarzające dużą masę zieleni lub kwiatów. Potrafią zdynamizować każdą przestrzeń, zapełniają trzeci wymiar tworząc kolorowe, pionowe ściany'
    },
    {
      type: 'Byliny',
      description: 'Są zielonymi roślinami wieloletnimi zimującymi w gruncie i wyrastającymi ponownie każdego roku. Różnorodność bylin pozwala zagospodarować każdy zakątek w ogrodzie. Można dobrać byliny dobrze czujące się w słońcu, cieniu, na glebach suchych i podmokłych.'
    },
    {
      type: 'Rośliny jednoroczne',
      description: 'Grupa roślin ozdobnych. Ich rozwój przebiega przez jeden sezon wegetacyjny, co oznacza, że potrzebują one więcej uwagi i naszego zaangażowania, dzięki temu pokażą nam swoje najpiękniejsze oblicze.'
    }
  ];

  const plantImages = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    11,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ];

  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  };

  const openDialogForImage = (imageNumber) => {
    setImageNumber(imageNumber)
    setOpenDialog(true)
  };

  const closeDialogForImage = () => {
    setOpenDialog(false);
  };

  return (
    <PlantNurseryContainer>
      <Parallax image={imagePlantNurseryParallax} />
      <PlantNurseryBlockInfo>
        <Fade top cascade>
          <PlantNurserySubBlockInfo>
            <h2>NASZA SZKÓŁKA</h2>
            <p>W naszej szkółce znajdziecie Państwo rośliny w pojemnikach, które można wysadzać przez cały okres wegetacyjny
            tj. od wczesnej wiosny do próżnej jesieni. Dokładamy wszelkich starań, aby nasz materiał roślinny był najwyższej jakości .
            Z każdym sezonem zwiększamy nasz asortyment o ciekawe gatunki i odmiany, których stale przybywa na rynku ogrodniczym.
            Zadowolenie i radość klientów to nasz priorytet.
          </p>
          </PlantNurserySubBlockInfo>
        </Fade>
      </PlantNurseryBlockInfo>
      <TypeOfFlora>

        <SubTypeOfFlora>
          <Slide left cascade>
            <h3>Posiadamy:</h3>
            <ul>
              {bushesList.map((item, index) => {
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
            {plantImages.map((item) => {
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
        <p>Jeśli chcesz zobaczyć wiecej zdjęć to zapraszamy na naszą stronę
        na facebooku! Link znajdziesz na dole strony.
        </p>
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

const SimpleDialog = (props) => {
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

export default PlantNursery;
