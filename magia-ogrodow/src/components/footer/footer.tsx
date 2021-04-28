import React from "react";
import Flip from 'react-reveal/Flip';

import { FooterBlock, FooterIMG, FooterMainBlock, FooterCopyright } from './styled'
import FooterConfig from '../../configuration/footerConfig'

import Logo from '../../images/logo.png';
import DD from '../../images/dd.png';

const Footer = () => {

  return (
    <FooterBlock>
      <FooterIMG width="90" alt="Magia ogrodów Logo" src={Logo} />
      <FooterMainBlock>
        <Flip left>
          <div>
            <h3>KONTAKT:</h3>
            <p>E-mail: {FooterConfig.mail}<br />Tel.: {FooterConfig.phone}<br /></p>
            <p>Adres firmy:<br /> {FooterConfig.street}<br />{FooterConfig.city}</p>
          </div>
        </Flip>
        <Flip right>
          <div>
            <div>
              <h3>Punkt sprzedaży czynny:</h3>
              <p>poniedziałek - piątek: {FooterConfig.mondayToFridayTimeOfWork}<br />sobota: {FooterConfig.saturdayWork}<br />{FooterConfig.additionalInfo}</p>
            </div>
            <div>
              <h3>Nasze Media:</h3>
              <a href={FooterConfig.companyFacebookLink} target="_blank" rel="noreferrer"
                style={{ marginLeft: '20px', marginRight: '20px' }}>
                <img width="40" alt="dd" src={DD} />
              </a>
            </div>
          </div>
        </Flip>
      </FooterMainBlock>
      <Flip bottom>
        <FooterCopyright>
          ©{new Date().getFullYear()} Magia Ogrodów CREATED BY <a href={FooterConfig.developerLink} target="_blank" rel="noreferrer">{FooterConfig.developerName}</a>
        </FooterCopyright>
      </Flip>
    </FooterBlock>
  );
};

export default Footer;
