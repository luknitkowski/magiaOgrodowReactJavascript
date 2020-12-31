import React, { memo, useState, useReducer } from "react";
import Parallax from '../parallax';
import imagePlantNurseryParallax from '../../images/contact.jpg';
import styled, { keyframes } from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  padding-bottom: 80px;
  padding-top: 80px;
`;

const StyledFade = styled(Fade)`
height: 100px;
width: 100px;
position: fixed;
z-index: 10000;
bottom: calc(50vh - 50px);
left: calc(100vh - 50px);
`;



const StyledCircularProgress = styled(CircularProgress)``;

const formReducer = (state, event) => {
  if(event.reset) {
   return {
    nameAndSurname: '',
    email: '',
    message: ''
   }
 }
  return {
    ...state,
    [event.name]: event.value
  }
}

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useReducer(formReducer, {});
  const [toastConfig, setToastConfig] = useState({open: false, severity:'', message: '', autoHideDuration: 0});

  const sendMessage = async () => {
    const url = 'https://us-central1-magiaogrodow.cloudfunctions.net/sendMail?dest=luknitkowski@gmail.com';
    console.log(formData)
    try {
      const config = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
      }
      const response = await fetch(url, config)
      console.log(response)
      const json = await response.json()
      console.log(json)
      if (json.ok) {
          console.log(`ok`)
          setSubmitting(false);
          setFormData({reset: true})
          setToastConfig({open: true, severity:'success', message: 'Wiadomość została wysłana!', autoHideDuration: 6000});
          return response
      } else {
        console.log(`unkown error`)
        setSubmitting(false);
        setToastConfig({open: true, severity:'error', message: `Wiadomość nie została wysłana. Prosimy spóbować wysłać później wiadomość, albo skontaktować się bezpośrednio na email podany na dole strony.`, autoHideDuration: 60000});

      }
  } catch (error) {
    console.log(`error: ${error}`)
    setSubmitting(false);
    setToastConfig(true);
    setToastConfig({open: true, severity:'error', message: `Wiadomość nie została wysłana. Prosimy spóbować wysłać później wiadomość, albo skontaktować się bezpośrednio na email podany na dole strony.`, autoHideDuration: 60000});
  }  
  
  // let headers = new HttpHeaders();
  //   headers.append('Content-Type', 'application/json');
  //   this.http.post('https://us-central1-magiaogrodow.cloudfunctions.net/sendMail?dest=luknitkowski@gmail.com', JSON.stringify(formData), {headers : headers})
  //     .subscribe(
  //       (res) => console.log(res),
  //       (err) => console.log(err)
  //     )

}

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  const scrollDown = (e) => {
    let pageHeight = window.innerHeight;
    window.scrollBy(0, pageHeight);
  };

  const handleSubmit = (event) => {
    setSubmitting(true);
    event.preventDefault();
    console.log(formData)

    sendMessage()
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastConfig(false);
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
      <form onSubmit={handleSubmit}>
        <TextField disabled={submitting} id="outlined-basic" label="Twoje Imię i Nazwisko" variant="outlined" name="nameAndSurname" onChange={handleChange} value={formData.nameAndSurname} />
        <TextField disabled={submitting} id="outlined-basic" label="Adres e-mail" variant="outlined" name="email" onChange={handleChange} value={formData.email} />
        <TextField
          disabled={submitting}
          id="outlined-multiline-static"
          label="Wiadomość"
          multiline
          rows={20}
          variant="outlined"
          name="message" 
          onChange={handleChange}
          value={formData.message}
        />
        <Button type="submit" variant="contained" color="primary">
          Wyślij
</Button>
      </form>
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
      </ContactBlockInfo>
      <BlockWithMap>
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
      </BlockWithMap>
      <StyledFade
        in={submitting}
        style={{
          transitionDelay: submitting ? "800ms" : "0ms",
        }}
        size={"100px"}
        unmountOnExit
      >
        <StyledCircularProgress size={"100px"} color="secondary" />
      </StyledFade>
      <Snackbar open={toastConfig.open} autoHideDuration={toastConfig.autoHideDuration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={toastConfig.severity}>
          {toastConfig.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default memo(Contact);
