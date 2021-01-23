import React from "react";
import Parallax from '../parallax';
import imagePlantNurseryParallax from '../../images/contact.jpg';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import {
  ContactBlockInfo, ContactSubBlockInfo, StyledIconButton,
  StyledKeyboardArrowDownIcon, BlockWithMap
} from './style';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Contact = () => {

  const scrollDown = () => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  };

  return (
    <div>
      <Parallax image={imagePlantNurseryParallax} />
      <ContactBlockInfo>
        <ContactSubBlockInfo>
          <Fade top>
            <h2>DOJAZD I KONTAKT</h2>
            <p>Szkółka zlokalizowana jest na granicy Rumi oraz Dębogórze Wybudowanie. Istnieje możliwość dojazdu autobusem z dworca PKP Rumia nr 86. Szczegółowe informacje jak numer telefonu, adres czy email można znaleźć na dole strony w stopce.
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
          </Fade>
        </ContactSubBlockInfo>
      </ContactBlockInfo>
      <BlockWithMap>
        <Zoom bottom>
          <MapContainer center={[54.572573, 18.429189]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[54.572573, 18.429189]}>
              <Popup>
                <b>Magia Ogrodów. Beata Kulling-Nitkowska</b><br />
    Adres:<br />
    Dębogórska 8<br />
    84-230 Dębogórze Wybudowanie
    </Popup>
            </Marker>
          </MapContainer>
        </Zoom>
      </BlockWithMap>
    </div>
  );
};

export default Contact;
