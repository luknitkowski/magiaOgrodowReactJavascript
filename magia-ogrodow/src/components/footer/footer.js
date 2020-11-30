import React, { memo } from "react";
import Logo from '../../images/logo.png';
import DD from '../../images/dd.png';
import styled from "styled-components";


const FooterBlock = styled.footer`
  background-color: lightgrey;
  text-align: center;
`;

const FooterIMG = styled.img`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  top: -40px;
`;

const FooterMainBlock = styled.div`
  margin-bottom: 40px;
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  img {
    margin-left: 20px;
    margin-right: 20px;
  }

  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  padding: 20px;
  border-top: 1px solid gray;
`;

const Footer = () => {

  return (
    <FooterBlock>
      <FooterIMG width="90" alt="Magia ogrodów Logo" src={Logo} />
      <FooterMainBlock>
        <div>
          <h3>KONTAKT:</h3>
          <p>E-mail: magiaogrodow@wp.pl<br />Tel.: +48 606 652 317<br /></p>
          <p>Adres firmy:<br /> Dębogórska 8<br />84-230 Dębogórze Wybudowanie</p>
        </div>
        <div>
          <div>
            <h3>Punkt sprzedaży czynny:</h3>
            <p>poniedziałek - piątek: 9 - 18<br />sobota: 9 - 15<br />W okresie od 1 kwietnia do 30 listopada</p>
          </div>
          <div>
            <h3>Nasze Media:</h3>
            <a href="https://www.facebook.com/Magia-Ogrod%C3%B3w-141887419310359/" target="_blank" rel="noreferrer"
              style={{marginLeft: '20px',marginRight: '20px'}}>
              <img width="40" alt="dd" src={DD} />
            </a>
          </div>
        </div>
      </FooterMainBlock>
      <FooterCopyright>
        ©2020 Magia Ogrodów CREATED BY <a href="https://www.linkedin.com/in/lukasz-nitkowski-21025b132/" target="_blank" rel="noreferrer">Łukasz Nitkowski</a>
      </FooterCopyright>
    </FooterBlock>
  );
};

export default memo(Footer);
