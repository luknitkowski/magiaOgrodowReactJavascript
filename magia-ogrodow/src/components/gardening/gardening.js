import React, { memo, useState } from "react";
import Parallax from '../parallax';
import styled from "styled-components";
import Button from '@material-ui/core/Button';
import FullDialog from "../fullDialog";

import imageGardeningParallax from '../../images/garden-back.jpg';
import imageGardeningTwoParallax from '../../images/garden-house.jpg';

const GardeningBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding-top: 70px;
  padding-bottom: 70px;
  background-color: #e6e6e6;
`;

const SubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
  padding-bottom: 50px;
`;

const Signature = styled.p`
  -ms-transform: skewY(-5deg); /* IE 9 */
  transform: skewY(-5deg);
  font-family: "Herr Von Muellerhoff", cursive;
  font-size: 20px;
  float: right;
  right: 20%;
  position: relative;
`;

const BlockWithExampleGardensForPC = styled.div`
`;

const SubBlockWithExampleGarden = styled.div`
    display: flex;
    max-width: 1000px;
    margin: auto;
`;

const ImageForExampleGarden = styled.img`
  width: 250px;
  height: 250px;
`;

const BlockWithImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 5px;
    margin: auto;
    transition: transform 0.2s;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }
  
  img:hover {
    transform: scale(1.1);
    -webkit-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 16px 2px rgba(0, 0, 0, 0.75);
  }
`;

const BlockWithTextAndButton = styled.div`
  width: 50%;
  justify-content: center;
  text-align: center;

  p {
    text-align: left;
  }

  button {
    transition: transform 0.2s;
    max-width: 200px;
  }

  button:hover {
    transform: scale(1.05);
  }
`;

const BlockRecordForBorder = styled.div`
border-bottom: 1px solid rgb(198, 198, 198);
padding: 40px;
padding-top: 70px;
padding-bottom: 70px;

`;

const Gardening = () => {
  const [dialogConfig, setDialogConfig] = useState({isOpen: false, gardenToShow: ''});

  const handleClickOpen = (gardenToShow) => {
    setDialogConfig({isOpen: true, gardenToShow: gardenToShow});
  };

  const closeFullDialog = () => {
    setDialogConfig({isOpen: false, gardenToShow: ''});
  };

  return (
    <div>
      <Parallax image={imageGardeningParallax} />
      <GardeningBlockInfo>
        <SubBlockInfo>
          <p>“Ogród powinien docierać do głębi. Odmienić serce, zasmucić, uszlachetnić. Jego rolą jest skłonić nas do zadumy nad przemijalnością wszystkiego, co nas otacza . Ten szczególny punkt w czasie, kiedy ostatni liść już-już ma opaść, gdy ostatni płatek już-już ma się osypać, ten moment zawiera wszystko, co w życiu piękne i bolesne.”</p>
          <Signature className="signature">Tan Twan Eng</Signature>
        </SubBlockInfo>
      </GardeningBlockInfo>
      <BlockWithExampleGardensForPC>
        <BlockRecordForBorder>
          <SubBlockWithExampleGarden>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/first/1-min.jpg' />
            </BlockWithImage>
            <BlockWithTextAndButton>
              <h2>Ogród przydomowy 845 m² – Rumia</h2>
              <h3>Projekt: Beata Kulling- Nitkowska</h3>
              <p>Ogród został zmodernizowany ze starego ogrodu. Część roślin została zaadaptowana, jak na przykład wysoki żywopłot, dzięki temu uzyskaliśmy zieloną ścianę i intymność. Drugim zachowanym elementem są średniej wysokości żywopłoty bukszpanowe, które wyznaczyły strefy. Punktem centralnym stał się kwadrat , w którym znajduje się mini fontanna otoczona różami, szałwią i trawami. Przestrzeń ta przyciąga wzrok widza przez cały czas. Pozostałe strefy to skalniak przy altanie i trawnik na którym może odbywać się aktywność dzieci. Wprowadziliśmy rośliny kwitnące , jak : liliowce, przetaczniki, hortensje, rudbekie , rododendrony. Od wczesnej wiosny do jesieni cały czas coś kwitnie.</p>
              <Button variant="contained" color="primary" onClick={ () => handleClickOpen('first')}>
                SPRAWDŻ PROJEKT
              </Button>
            </BlockWithTextAndButton>
          </SubBlockWithExampleGarden>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <SubBlockWithExampleGarden>
            <BlockWithTextAndButton>
              <h2>Ogród przydomowy 845 m² – Rumia</h2>
              <h3>Projekt: Beata Kulling- Nitkowska</h3>
              <p>Przekształcenie zaniedbanego , starego ogrodu polegało na uporządkowaniu przestrzeni. Wprowadzono linie proste i geometryczne donice, dzięki temu pozbyliśmy się chaosu i zastanego bałaganu. Jak to w starszych ogrodach pozostawiliśmy roślinność , którą można poprzez odpowiednią pielęgnację przywrócić do życia . Takim elementem był na pewno wysoki żywopłot. Na życzenie klienta zaproponowane rośliny na rabaty wymagają minimum pracy.</p>
              <Button variant="contained" color="primary" onClick={ () => handleClickOpen('second')}>
                SPRAWDŻ PROJEKT
              </Button>
            </BlockWithTextAndButton>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/second/1-min.jpg' />
            </BlockWithImage>
          </SubBlockWithExampleGarden>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <SubBlockWithExampleGarden>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/third/1-min.jpg' />
            </BlockWithImage>
            <BlockWithTextAndButton>
              <h2>Ogród przydomowy - Mrzezino</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>W tym ogrodzie byliśmy wykonawcami zaplanowanego już ogrodu przez naszą koleżankę , z którą współpracujemy Zofią Dzielińską. Zaproponowane owalne kształty , przenikające i stykające się z sobą dały spójność przestrzeni. Ogród kwitnący, tętniący kolorem i życiem wielu owadów. W tym ogrodzie nie posadziliśmy , ani jednego iglaka . Oprócz mnóstwa bylin, znalazł swoje miejsce warzywniak i szklarenka.</p>
              <Button variant="contained" color="primary" onClick={ () => handleClickOpen('third')}>
                SPRAWDŻ PROJEKT
              </Button>
            </BlockWithTextAndButton>
          </SubBlockWithExampleGarden>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <SubBlockWithExampleGarden>
            <BlockWithTextAndButton>
              <h2>Ogród nad jeziorem - Nadole</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>Pierwszy nasz tak duży ogród, dlatego na zawsze pozostanie w mojej pamięci. Przedstawiana działka ma kształt wąskiego prostokąta, z lekkim spadkiem w kierunku jeziora. Zastaliśmy już położone nawierzchnie . Musieliśmy wkomponować się w istniejące wygrodzone przestrzenie. Ogród podzieliliśmy na trzy strefy . Pierwsza to przedogródek, reprezentacyjny zapraszający do domu . Zaproponowana roślinność biegnie w kształcie fali wychodzącej z pierwszego podjazdu , biegnącej wzdłuż dwóch wejść do budynku. Znalazły tu miejsce róże okrywowe, berberysy , tuje kuliste. Druga strefa znajduje się z boku budynku i ma charakter leśny , gdyż została wkomponowana w już istniejące sosny. Znalazły tam miejsce rośliny tolerujące cień : Rododendrony, żurawki, hosty, rodgersje. Trzecia wydzielona przestrzeń znajduje się po drugiej stronie budynku, blisko jeziora. W tej części ogrodu przez spadek terenu stworzył się taras , który kończy mała skarpa Zagospodarowana ona została roślinami zadarniającymi : jałowce, skalniaki, runianka , żurawki.</p>
              <Button variant="contained" color="primary" onClick={ () => handleClickOpen('fourth')}>
                SPRAWDŻ PROJEKT
              </Button>
            </BlockWithTextAndButton>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/fourth/1-min.jpg' />
            </BlockWithImage>
          </SubBlockWithExampleGarden>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <SubBlockWithExampleGarden>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/fifth/1-min.jpg' />
            </BlockWithImage>
            <BlockWithTextAndButton>
              <h2>Przedogródek - Rumia</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>Mały przedogródek w kształcie litery L. Mały , ale dużo się się dzieje. Rabty wydzieliły łuki i dla ich podkreślenia zastosowano dwa rodzaje kamienia, ciemny i jasny. Jedna część skąpana w słońcu , dlatego miejsce znalazły tam trawy i w różnych okresach kwitnące byliny. Z drugiej strony budynku poprzez zastane drzewa i krzewy zamieszkały rośliny cienia i półcienia. Zakątek ten mieni się kolorami . Dwie części przedogródka połączył trawnik w kształcie księżyca.</p>
              <Button variant="contained" color="primary" onClick={ () => handleClickOpen('fifth')}>
                SPRAWDŻ PROJEKT
              </Button>
            </BlockWithTextAndButton>
          </SubBlockWithExampleGarden>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <SubBlockWithExampleGarden>
            <BlockWithTextAndButton>
              <h2>Przestrzeń publiczna przed blokiem - Rumia</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>Czasami trzeba zaprojektować przestrzeń publiczną , która należy do Wszystkich. Takie miejsca oprócz funkcji dekoracyjnej muszą być funkcjonalne. Zadbane wejścia , czy przdogródki w blokach podnoszą atrakcyjność takiego miejsca i cieszą samych mieszkańców, wpływając pozytywnie na ich samopoczucie , klimat oraz różnorodność biologiczną. Proponowane rośliny powinny być samoobsługowe , jak i odporne na warunki pogodowe np. susze.</p>
              <Button variant="contained" color="primary" onClick={ () => handleClickOpen('sixth')}>
                SPRAWDŻ PROJEKT
              </Button>
            </BlockWithTextAndButton>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/sixth/1-min.jpg' />
            </BlockWithImage>
          </SubBlockWithExampleGarden>
        </BlockRecordForBorder>
      </BlockWithExampleGardensForPC>
      <Parallax image={imageGardeningTwoParallax} />
      <FullDialog
          dialogConfig={dialogConfig}
          closeFullDialog={closeFullDialog}
        />
    </div>
  );
};

export default memo(Gardening);
