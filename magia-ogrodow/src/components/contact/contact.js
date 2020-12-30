import React, { memo } from "react";
import Parallax from '../parallax';
import imagePlantNurseryParallax from '../../images/contact.jpg';
import styled, {keyframes} from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const ContactBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: #e6e6e6;
`;

const ContactSubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const StyledIconButton = styled(IconButton)`
  width: 100px;
  height: 100px;
`;

const downarrow = keyframes`
  0% { -webkit-transform: translateY(0); opacity: 0.4 }
  100% { -webkit-transform: translateY(0.4em); opacity: 0.9 }
`;

const StyledKeyboardArrowDownIcon = styled(KeyboardArrowDownIcon)`
-webkit-animation: ${downarrow} 0.6s infinite alternate ease-in-out;
`;

const BlockWithMap = styled.div`

`;

const Contact = () => {

    const scrollDown = (e) => {
      let pageHeight = window.innerHeight;
      window.scrollBy(0, pageHeight);
    };

    return (
      <div>
        <Parallax image={imagePlantNurseryParallax} />
        <ContactBlockInfo>
          <ContactSubBlockInfo>
            <h2>NAPISZ DO NAS</h2>
            <p>Jeśli masz pytania to napisz do nas, a napewno Ci odpowiemy! Dane kontaktowe znajdują się u dołu strony.</p>
          </ContactSubBlockInfo>
        </ContactBlockInfo>
        <ContactBlockInfo>
          <ContactSubBlockInfo>
            <h2>DOJAZD</h2>
            <p>Szkółka zlokalizowana jest na granicy Rumi oraz Dębogórze Wybudowanie. Istnieje możliwość dojazdu autobusem z dworca PKP Rumia nr 86. Szczegółowe informacje jak numer telefonu, adres można znaleźć na dole strony.
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
          </ContactSubBlockInfo>
          <BlockWithMap>

          </BlockWithMap>
        </ContactBlockInfo>
      </div>
    );
  };

  export default memo(Contact);
