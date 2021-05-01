import { useState, useLayoutEffect } from "react";
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

import FullDialog from "../fullDialog";
import Parallax from '../parallax';
import {
  GardeningBlockInfo, SubBlockInfo, Signature, BlockWithExampleGardensForPC,
  SubBlockWithExampleGarden, SubBlockWithExampleGardenForMobile,
  ImageForExampleGarden, BlockWithImage, BlockWithImageForMobile,
  BlockWithTextAndButton, BlockWithTextAndButtonForMobile, BlockRecordForBorder, BlockWithExampleGardensForMobile
} from './styled';
import GardeningConfig from '../../configuration/gardeningConfig';

import imageGardeningParallax from '../../images/garden-back.jpg';
import imageGardeningTwoParallax from '../../images/garden-house.jpg';

type TypeOfDeviceType = {
  widthDevice: number,
  handleClickOpen: Function
}

const TypeOfDevice = ({ widthDevice, handleClickOpen }: TypeOfDeviceType) => {

  function isEven(value: number) {
    if (value % 2 === 0)
      return true;
    else
      return false;
  }

  const handleClickOpenFromChild = (gardenToShow: string): void => {
    handleClickOpen(gardenToShow);
  }
  if (widthDevice > 750) {
    return (<BlockWithExampleGardensForPC>
      {GardeningConfig.gardenExamples.map((gardenObj, index) => {
        if (isEven(index)) {
          return (
            <BlockRecordForBorder key={index}>
              <Fade left>
                <SubBlockWithExampleGarden>
                  <BlockWithImage>
                    <ImageForExampleGarden src={`/images/project-images/${gardenObj.keyForButton}/1-min.jpg`} />
                  </BlockWithImage>
                  <BlockWithTextAndButton>
                    <h2>{gardenObj.title}</h2>
                    <h3>Projekt: {gardenObj.author}</h3>
                    <p>{gardenObj.info}</p>
                    <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild(gardenObj.keyForButton)}>
                      SPRAWDŻ PROJEKT
            </Button>
                  </BlockWithTextAndButton>
                </SubBlockWithExampleGarden>
              </Fade>
            </BlockRecordForBorder>
          )
        } else {
          return (
            <BlockRecordForBorder key={index}>
              <Fade right>
                <SubBlockWithExampleGarden>
                  <BlockWithTextAndButton>
                    <h2>{gardenObj.title}</h2>
                    <h3>Projekt: {gardenObj.author}</h3>
                    <p>{gardenObj.info}</p>
                    <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild(gardenObj.keyForButton)}>
                      SPRAWDŻ PROJEKT
            </Button>
                  </BlockWithTextAndButton>
                  <BlockWithImage>
                    <ImageForExampleGarden src={`/images/project-images/${gardenObj.keyForButton}/1-min.jpg`} />
                  </BlockWithImage>
                </SubBlockWithExampleGarden>
              </Fade>
            </BlockRecordForBorder>
          )
        }
      })}
    </BlockWithExampleGardensForPC>);
  } else {
    return (
      <BlockWithExampleGardensForMobile>

        {GardeningConfig.gardenExamples.map((gardenObj, index) => {
          if (isEven(index)) {
            return (
              <BlockRecordForBorder key={index}>
                <Fade left>
                  <SubBlockWithExampleGardenForMobile>
                    <BlockWithTextAndButtonForMobile>
                      <h2>{gardenObj.title}</h2>
                      <h3>Projekt: {gardenObj.author}</h3>
                      <p>{gardenObj.info}.</p>
                      <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild(gardenObj.keyForButton)}>
                        SPRAWDŻ PROJEKT
                </Button>
                    </BlockWithTextAndButtonForMobile>
                    <BlockWithImageForMobile>
                      <ImageForExampleGarden src={`/images/project-images/${gardenObj.keyForButton}/1-min.jpg`} />
                    </BlockWithImageForMobile>
                  </SubBlockWithExampleGardenForMobile>
                </Fade>
              </BlockRecordForBorder>
            )
          } else {
            return (
              <BlockRecordForBorder key={index}>
                <Fade right>
                  <SubBlockWithExampleGardenForMobile>
                    <BlockWithTextAndButtonForMobile>
                      <h2>{gardenObj.title}</h2>
                      <h3>Projekt: {gardenObj.author}</h3>
                      <p>{gardenObj.info}.</p>
                      <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild(gardenObj.keyForButton)}>
                        SPRAWDŻ PROJEKT
                </Button>
                    </BlockWithTextAndButtonForMobile>
                    <BlockWithImageForMobile>
                      <ImageForExampleGarden src={`/images/project-images/${gardenObj.keyForButton}/1-min.jpg`} />
                    </BlockWithImageForMobile>
                  </SubBlockWithExampleGardenForMobile>
                </Fade>
              </BlockRecordForBorder>
            )
          }
        })
        }
      </BlockWithExampleGardensForMobile>);
  }
}

TypeOfDevice.propTypes = {
  widthDevice: PropTypes.number.isRequired,
  handleClickOpen: PropTypes.func.isRequired
}

type DialogConfigType = {
  isOpen: boolean,
  gardenToShow: string,
  listOfImages: string[]
}

const Gardening = () => {
  const [dialogConfig, setDialogConfig] = useState<DialogConfigType>({ isOpen: false, gardenToShow: '', listOfImages: [] });
  const [widthDevice, setWidthDevice] = useState<number>(0);

  useLayoutEffect(() => {
    function updateSize() {
      setWidthDevice(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleClickOpen = (gardenToShow: string): void => {
    setDialogConfig({ isOpen: true, gardenToShow: gardenToShow, listOfImages: [...GardeningConfig.pathsList[gardenToShow]] });
  };

  const closeFullDialog = (): void => {
    setDialogConfig({ isOpen: false, gardenToShow: '', listOfImages: [] });
  };

  return (
    <div>
      <Parallax image={imageGardeningParallax} />
      <GardeningBlockInfo>
        <SubBlockInfo>
          <Fade left>
            <p>{GardeningConfig.mainInfo}</p>
          </Fade>
          <Fade right>
            <Signature className="signature">{GardeningConfig.signature}</Signature>
          </Fade>
        </SubBlockInfo>
      </GardeningBlockInfo>
      <TypeOfDevice widthDevice={widthDevice} handleClickOpen={handleClickOpen} />
      <Parallax image={imageGardeningTwoParallax} />
      <FullDialog
        dialogConfig={dialogConfig}
        closeFullDialog={closeFullDialog}
      />
    </div>
  );
};

export default Gardening;
