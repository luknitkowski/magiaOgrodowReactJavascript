import React, { memo, useState } from "react";
import Parallax from '../parallax';
import imagePlantNurseryParallax from '../../images/flowers.jpg';
import styled from "styled-components";
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import imagePlantNurseryTwoParallax from '../../images/plant/1-min.jpg';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Paper2 from '../../images/plant/2-min-min.jpg';

const PlantNurseryContainer = styled.div`
  padding-bottom: 50px;
`;

const PlantNurseryBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #e6e6e6;
`;

const PlantNurserySubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const TypeOfFlora = styled.div`
  border-bottom: 1px solid rgb(198, 198, 198);
  border-padding: 50px;
`;

const SubTypeOfFlora = styled.div`
  max-width: 1000px;
  margin: auto;

  ul {
    list-style-type: none;
  }
`;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }),
);


const PlantNursery = () => {
  const [spacing, setSpacing] = useState(2);
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
    `../../images/plant/2-min-min.jpg`,
    `../../images/plant/3-min-min.jpg`,
    `../../images/plant/4-min-min.jpg`,
    `../../images/plant/5-min-min.jpg`,
    `../../images/plant/6-min-min.jpg`,
    `../../images/plant/7-min-min.jpg`,
    `../../images/plant/8-min-min.jpg`,
    `../../images/plant/9-min-min.jpg`,
    `../../images/plant/11-min-min.jpg`,
    `../../images/plant/13-min-min.jpg`,
    `../../images/plant/14-min-min.jpg`,
    `../../images/plant/15-min-min.jpg`,
    `../../images/plant/16-min-min.jpg`,
    `../../images/plant/17-min-min.jpg`,
    `../../images/plant/18-min-min.jpg`,
    `../../images/plant/19-min-min.jpg`,
    `../../images/plant/20-min-min.jpg`,
  ];

  return (
    <PlantNurseryContainer>
      <Parallax image={imagePlantNurseryParallax} />
      <PlantNurseryBlockInfo>
        <PlantNurserySubBlockInfo>
          <h2>NASZA SZKÓŁKA</h2>
          <p>W naszej szkółce znajdziecie Państwo rośliny w pojemnikach, które można wysadzać przez cały okres wegetacyjny
          tj. od wczesnej wiosny do próżnej jesieni. Dokładamy wszelkich starań, aby nasz materiał roślinny był najwyższej jakości .
          Z każdym sezonem zwiększamy nasz asortyment o ciekawe gatunki i odmiany, których stale przybywa na rynku ogrodniczym.
          Zadowolenie i radość klientów to nasz priorytet.
          </p>
        </PlantNurserySubBlockInfo>
      </PlantNurseryBlockInfo>
      <TypeOfFlora>
        <SubTypeOfFlora>
          <h3>Posiadamy:</h3>
          <ul>
            {bushesList.map((item, index) => {
              return (
                <div key={index}>
                  <li>
                    <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
                    <b>{item.type}</b>
                  </li>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </ul>
        </SubTypeOfFlora>
      </TypeOfFlora>
      <Parallax image={imagePlantNurseryTwoParallax} />
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {plantImages.map((item, index) => {
            console.log(item)
            const imageSRC = require('../../images/plant/2-min-min.jpg')
              return (
                <Grid key={index} item>
                <Paper className={classes.paper}>
                  <img src={require('../../images/plant/2-min-min.jpg')}></img>
                </Paper>
              </Grid>
              )
        })}
        </Grid>
      </Grid>
    </PlantNurseryContainer>
  );
};

export default memo(PlantNursery);
