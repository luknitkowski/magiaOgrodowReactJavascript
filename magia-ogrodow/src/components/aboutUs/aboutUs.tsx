import React from "react";
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

import Parallax from '../parallax';
import {
  AboutUsBlockInfo, SubBlockInfo, Signature, SubMainInfoBlock,
  SubMainInfoBlockH5, MainInfoBlock, MainInfoBlockIMG, IMG
} from './styled';
import AboutUsConfig from '../../configuration';

import imageAboutUsParallax from '../../images/dzialka.jpg';
import imageAboutUsOwnerPicture from '../../images/owner-picture.jpg';

const AboutUs = () => {

  return (
    <div>
      <Parallax image={imageAboutUsParallax} />
      <AboutUsBlockInfo>
        <SubBlockInfo>
          <Fade top>
            <h2>{AboutUsConfig.signature}</h2>
            <h3>{AboutUsConfig.education}</h3>
            <p>{AboutUsConfig.infoAboutOwner}</p>
          </Fade>
          <LightSpeed bottom>
            <Signature className="signature">{AboutUsConfig.signature}</Signature>
          </LightSpeed>
        </SubBlockInfo>
      </AboutUsBlockInfo>
      <MainInfoBlock>
        <Fade left>
          <MainInfoBlockIMG>
            <IMG width="300" height="500" alt="face image" src={imageAboutUsOwnerPicture} />
          </MainInfoBlockIMG>
        </Fade>
        <Fade right>
          <SubMainInfoBlock>
            {AboutUsConfig.mainInfos.map((text, index) => {
              return (<p key={index}>{text}</p>)
            })}
            <SubMainInfoBlockH5>ZAPRASZAMY!</SubMainInfoBlockH5>
          </SubMainInfoBlock>
        </Fade>
      </MainInfoBlock>
    </div>
  );
};

export default AboutUs;
