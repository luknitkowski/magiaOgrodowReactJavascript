import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

import Parallax from '../parallax';
import ContactConfig from '../../configuration/contactConfig';
import FooterConfig from '../../configuration/footerConfig';
import AboutUsConfig from '../../configuration/aboutUsConfig';
import {
  ContactBlockInfo, ContactSubBlockInfo, StyledIconButton,
  StyledKeyboardArrowDownIcon, BlockWithMap
} from './styled';

import imagePlantNurseryParallax from '../../images/contact.jpg';


const Contact = () => {

  const scrollDown = (): void => {
    window.scrollTo(0, document.body.scrollHeight || document.documentElement.scrollHeight);
  };

  return (
    <div>
      <Parallax image={imagePlantNurseryParallax} />
      <ContactBlockInfo>
        <ContactSubBlockInfo>
          <Fade top>
            <h2>DOJAZD I KONTAKT</h2>
            <p>{ContactConfig.howToGetThere}</p>
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
                <b>Magia Ogrodów. {AboutUsConfig.signature}</b><br />
    Adres:<br />
    {FooterConfig.street}<br />
    {FooterConfig.city}
    </Popup>
            </Marker>
          </MapContainer>
        </Zoom>
      </BlockWithMap>
    </div>
  );
};

export default Contact;
