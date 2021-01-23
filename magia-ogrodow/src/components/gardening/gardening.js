import React, { useState, useLayoutEffect } from "react";
import Parallax from '../parallax';
import Button from '@material-ui/core/Button';
import FullDialog from "../fullDialog";

import imageGardeningParallax from '../../images/garden-back.jpg';
import imageGardeningTwoParallax from '../../images/garden-house.jpg';

import {
  GardeningBlockInfo, SubBlockInfo, Signature, BlockWithExampleGardensForPC,
  SubBlockWithExampleGarden, SubBlockWithExampleGardenForMobile,
  ImageForExampleGarden, BlockWithImage, BlockWithImageForMobile,
  BlockWithTextAndButton, BlockWithTextAndButtonForMobile, BlockRecordForBorder, BlockWithExampleGardensForMobile
} from './style.js';
import Fade from 'react-reveal/Fade';

const TypeOfDevice = ({ widthDevice, handleClickOpen }) => {

  const handleClickOpenFromChild = (gardenToShow) => {
    handleClickOpen(gardenToShow)
  }
  if (widthDevice > 750) {
    return (<BlockWithExampleGardensForPC>
      <BlockRecordForBorder>
        <Fade left>
          <SubBlockWithExampleGarden>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/first/1-min.jpg' />
            </BlockWithImage>
            <BlockWithTextAndButton>
              <h2>Ogród przydomowy 845 m² – Rumia</h2>
              <h3>Projekt: Beata Kulling- Nitkowska</h3>
              <p>Ogród został zmodernizowany ze starego ogrodu. Część roślin została zaadaptowana, jak na przykład wysoki żywopłot, dzięki temu uzyskaliśmy zieloną ścianę i intymność. Drugim zachowanym elementem są średniej wysokości żywopłoty bukszpanowe, które wyznaczyły strefy. Punktem centralnym stał się kwadrat , w którym znajduje się mini fontanna otoczona różami, szałwią i trawami. Przestrzeń ta przyciąga wzrok widza przez cały czas. Pozostałe strefy to skalniak przy altanie i trawnik na którym może odbywać się aktywność dzieci. Wprowadziliśmy rośliny kwitnące , jak : liliowce, przetaczniki, hortensje, rudbekie , rododendrony. Od wczesnej wiosny do jesieni cały czas coś kwitnie.</p>
              <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('first')}>
                SPRAWDŻ PROJEKT
          </Button>
            </BlockWithTextAndButton>
          </SubBlockWithExampleGarden>
        </Fade>
      </BlockRecordForBorder>
      <BlockRecordForBorder>
        <Fade right>
          <SubBlockWithExampleGarden>
            <BlockWithTextAndButton>
              <h2>Ogród przydomowy 845 m² – Rumia</h2>
              <h3>Projekt: Beata Kulling- Nitkowska</h3>
              <p>Przekształcenie zaniedbanego , starego ogrodu polegało na uporządkowaniu przestrzeni. Wprowadzono linie proste i geometryczne donice, dzięki temu pozbyliśmy się chaosu i zastanego bałaganu. Jak to w starszych ogrodach pozostawiliśmy roślinność , którą można poprzez odpowiednią pielęgnację przywrócić do życia . Takim elementem był na pewno wysoki żywopłot. Na życzenie klienta zaproponowane rośliny na rabaty wymagają minimum pracy.</p>
              <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('second')}>
                SPRAWDŻ PROJEKT
          </Button>
            </BlockWithTextAndButton>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/second/1-min.jpg' />
            </BlockWithImage>
          </SubBlockWithExampleGarden>
        </Fade>
      </BlockRecordForBorder>
      <BlockRecordForBorder>
        <Fade left>
          <SubBlockWithExampleGarden>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/third/1-min.jpg' />
            </BlockWithImage>
            <BlockWithTextAndButton>
              <h2>Ogród przydomowy - Mrzezino</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>W tym ogrodzie byliśmy wykonawcami zaplanowanego już ogrodu przez naszą koleżankę , z którą współpracujemy Zofią Dzielińską. Zaproponowane owalne kształty , przenikające i stykające się z sobą dały spójność przestrzeni. Ogród kwitnący, tętniący kolorem i życiem wielu owadów. W tym ogrodzie nie posadziliśmy , ani jednego iglaka . Oprócz mnóstwa bylin, znalazł swoje miejsce warzywniak i szklarenka.</p>
              <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('third')}>
                SPRAWDŻ PROJEKT
          </Button>
            </BlockWithTextAndButton>
          </SubBlockWithExampleGarden>
        </Fade>
      </BlockRecordForBorder>
      <BlockRecordForBorder>
        <Fade right>
          <SubBlockWithExampleGarden>
            <BlockWithTextAndButton>
              <h2>Ogród nad jeziorem - Nadole</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>Pierwszy nasz tak duży ogród, dlatego na zawsze pozostanie w mojej pamięci. Przedstawiana działka ma kształt wąskiego prostokąta, z lekkim spadkiem w kierunku jeziora. Zastaliśmy już położone nawierzchnie . Musieliśmy wkomponować się w istniejące wygrodzone przestrzenie. Ogród podzieliliśmy na trzy strefy . Pierwsza to przedogródek, reprezentacyjny zapraszający do domu . Zaproponowana roślinność biegnie w kształcie fali wychodzącej z pierwszego podjazdu , biegnącej wzdłuż dwóch wejść do budynku. Znalazły tu miejsce róże okrywowe, berberysy , tuje kuliste. Druga strefa znajduje się z boku budynku i ma charakter leśny , gdyż została wkomponowana w już istniejące sosny. Znalazły tam miejsce rośliny tolerujące cień : Rododendrony, żurawki, hosty, rodgersje. Trzecia wydzielona przestrzeń znajduje się po drugiej stronie budynku, blisko jeziora. W tej części ogrodu przez spadek terenu stworzył się taras , który kończy mała skarpa Zagospodarowana ona została roślinami zadarniającymi : jałowce, skalniaki, runianka , żurawki.</p>
              <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('fourth')}>
                SPRAWDŻ PROJEKT
          </Button>
            </BlockWithTextAndButton>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/fourth/1-min.jpg' />
            </BlockWithImage>
          </SubBlockWithExampleGarden>
        </Fade>
      </BlockRecordForBorder>
      <BlockRecordForBorder>
        <Fade left>
          <SubBlockWithExampleGarden>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/fifth/1-min.jpg' />
            </BlockWithImage>
            <BlockWithTextAndButton>
              <h2>Przedogródek - Rumia</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>Mały przedogródek w kształcie litery L. Mały , ale dużo się się dzieje. Rabty wydzieliły łuki i dla ich podkreślenia zastosowano dwa rodzaje kamienia, ciemny i jasny. Jedna część skąpana w słońcu , dlatego miejsce znalazły tam trawy i w różnych okresach kwitnące byliny. Z drugiej strony budynku poprzez zastane drzewa i krzewy zamieszkały rośliny cienia i półcienia. Zakątek ten mieni się kolorami . Dwie części przedogródka połączył trawnik w kształcie księżyca.</p>
              <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('fifth')}>
                SPRAWDŻ PROJEKT
          </Button>
            </BlockWithTextAndButton>
          </SubBlockWithExampleGarden>
        </Fade>
      </BlockRecordForBorder>
      <BlockRecordForBorder>
        <Fade right>
          <SubBlockWithExampleGarden>
            <BlockWithTextAndButton>
              <h2>Przestrzeń publiczna przed blokiem - Rumia</h2>
              <h3>Projekt: Zofia Dzielińska</h3>
              <p>Czasami trzeba zaprojektować przestrzeń publiczną , która należy do Wszystkich. Takie miejsca oprócz funkcji dekoracyjnej muszą być funkcjonalne. Zadbane wejścia , czy przdogródki w blokach podnoszą atrakcyjność takiego miejsca i cieszą samych mieszkańców, wpływając pozytywnie na ich samopoczucie , klimat oraz różnorodność biologiczną. Proponowane rośliny powinny być samoobsługowe , jak i odporne na warunki pogodowe np. susze.</p>
              <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('sixth')}>
                SPRAWDŻ PROJEKT
          </Button>
            </BlockWithTextAndButton>
            <BlockWithImage>
              <ImageForExampleGarden src='/images/project-images/sixth/1-min.jpg' />
            </BlockWithImage>
          </SubBlockWithExampleGarden>
        </Fade>
      </BlockRecordForBorder>
    </BlockWithExampleGardensForPC>);
  } else {
    return (
      <BlockWithExampleGardensForMobile>
        <BlockRecordForBorder>
          <Fade left>
            <SubBlockWithExampleGardenForMobile>
              <BlockWithTextAndButtonForMobile>
                <h2>Ogród przydomowy 845 m² – Rumia</h2>
                <h3>Projekt: Beata Kulling- Nitkowska</h3>
                <p>Ogród został zmodernizowany ze starego ogrodu. Część roślin została zaadaptowana, jak na przykład wysoki żywopłot, dzięki temu uzyskaliśmy zieloną ścianę i intymność. Drugim zachowanym elementem są średniej wysokości żywopłoty bukszpanowe, które wyznaczyły strefy. Punktem centralnym stał się kwadrat , w którym znajduje się mini fontanna otoczona różami, szałwią i trawami. Przestrzeń ta przyciąga wzrok widza przez cały czas. Pozostałe strefy to skalniak przy altanie i trawnik na którym może odbywać się aktywność dzieci. Wprowadziliśmy rośliny kwitnące , jak : liliowce, przetaczniki, hortensje, rudbekie , rododendrony. Od wczesnej wiosny do jesieni cały czas coś kwitnie.</p>
                <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('first')}>
                  SPRAWDŻ PROJEKT
              </Button>
              </BlockWithTextAndButtonForMobile>
              <BlockWithImageForMobile>
                <ImageForExampleGarden src='/images/project-images/first/1-min.jpg' />
              </BlockWithImageForMobile>
            </SubBlockWithExampleGardenForMobile>
          </Fade>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <Fade right>
            <SubBlockWithExampleGardenForMobile>
              <BlockWithTextAndButtonForMobile>
                <h2>Ogród przydomowy 845 m² – Rumia</h2>
                <h3>Projekt: Beata Kulling- Nitkowska</h3>
                <p>Przekształcenie zaniedbanego , starego ogrodu polegało na uporządkowaniu przestrzeni. Wprowadzono linie proste i geometryczne donice, dzięki temu pozbyliśmy się chaosu i zastanego bałaganu. Jak to w starszych ogrodach pozostawiliśmy roślinność , którą można poprzez odpowiednią pielęgnację przywrócić do życia . Takim elementem był na pewno wysoki żywopłot. Na życzenie klienta zaproponowane rośliny na rabaty wymagają minimum pracy.</p>
                <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('second')}>
                  SPRAWDŻ PROJEKT
          </Button>
              </BlockWithTextAndButtonForMobile>
              <BlockWithImageForMobile>
                <ImageForExampleGarden src='/images/project-images/second/1-min.jpg' />
              </BlockWithImageForMobile>
            </SubBlockWithExampleGardenForMobile>
          </Fade>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <Fade left>
            <SubBlockWithExampleGardenForMobile>
              <BlockWithTextAndButtonForMobile>
                <h2>Ogród przydomowy - Mrzezino</h2>
                <h3>Projekt: Zofia Dzielińska</h3>
                <p>W tym ogrodzie byliśmy wykonawcami zaplanowanego już ogrodu przez naszą koleżankę , z którą współpracujemy Zofią Dzielińską. Zaproponowane owalne kształty , przenikające i stykające się z sobą dały spójność przestrzeni. Ogród kwitnący, tętniący kolorem i życiem wielu owadów. W tym ogrodzie nie posadziliśmy , ani jednego iglaka . Oprócz mnóstwa bylin, znalazł swoje miejsce warzywniak i szklarenka.</p>
                <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('third')}>
                  SPRAWDŻ PROJEKT
          </Button>
              </BlockWithTextAndButtonForMobile>
              <BlockWithImageForMobile>
                <ImageForExampleGarden src='/images/project-images/third/1-min.jpg' />
              </BlockWithImageForMobile>
            </SubBlockWithExampleGardenForMobile>
          </Fade>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <Fade right>
            <SubBlockWithExampleGardenForMobile>
              <BlockWithTextAndButtonForMobile>
                <h2>Ogród nad jeziorem - Nadole</h2>
                <h3>Projekt: Zofia Dzielińska</h3>
                <p>Pierwszy nasz tak duży ogród, dlatego na zawsze pozostanie w mojej pamięci. Przedstawiana działka ma kształt wąskiego prostokąta, z lekkim spadkiem w kierunku jeziora. Zastaliśmy już położone nawierzchnie . Musieliśmy wkomponować się w istniejące wygrodzone przestrzenie. Ogród podzieliliśmy na trzy strefy . Pierwsza to przedogródek, reprezentacyjny zapraszający do domu . Zaproponowana roślinność biegnie w kształcie fali wychodzącej z pierwszego podjazdu , biegnącej wzdłuż dwóch wejść do budynku. Znalazły tu miejsce róże okrywowe, berberysy , tuje kuliste. Druga strefa znajduje się z boku budynku i ma charakter leśny , gdyż została wkomponowana w już istniejące sosny. Znalazły tam miejsce rośliny tolerujące cień : Rododendrony, żurawki, hosty, rodgersje. Trzecia wydzielona przestrzeń znajduje się po drugiej stronie budynku, blisko jeziora. W tej części ogrodu przez spadek terenu stworzył się taras , który kończy mała skarpa Zagospodarowana ona została roślinami zadarniającymi : jałowce, skalniaki, runianka , żurawki.</p>
                <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('fourth')}>
                  SPRAWDŻ PROJEKT
          </Button>
              </BlockWithTextAndButtonForMobile>
              <BlockWithImageForMobile>
                <ImageForExampleGarden src='/images/project-images/fourth/1-min.jpg' />
              </BlockWithImageForMobile>
            </SubBlockWithExampleGardenForMobile>
          </Fade>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <Fade left>
            <SubBlockWithExampleGardenForMobile>
              <BlockWithTextAndButtonForMobile>
                <h2>Przedogródek - Rumia</h2>
                <h3>Projekt: Zofia Dzielińska</h3>
                <p>Mały przedogródek w kształcie litery L. Mały , ale dużo się się dzieje. Rabty wydzieliły łuki i dla ich podkreślenia zastosowano dwa rodzaje kamienia, ciemny i jasny. Jedna część skąpana w słońcu , dlatego miejsce znalazły tam trawy i w różnych okresach kwitnące byliny. Z drugiej strony budynku poprzez zastane drzewa i krzewy zamieszkały rośliny cienia i półcienia. Zakątek ten mieni się kolorami . Dwie części przedogródka połączył trawnik w kształcie księżyca.</p>
                <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('fifth')}>
                  SPRAWDŻ PROJEKT
          </Button>
              </BlockWithTextAndButtonForMobile>
              <BlockWithImageForMobile>
                <ImageForExampleGarden src='/images/project-images/fifth/1-min.jpg' />
              </BlockWithImageForMobile>
            </SubBlockWithExampleGardenForMobile>
          </Fade>
        </BlockRecordForBorder>
        <BlockRecordForBorder>
          <Fade right>
            <SubBlockWithExampleGardenForMobile>
              <BlockWithTextAndButtonForMobile>
                <h2>Przestrzeń publiczna przed blokiem - Rumia</h2>
                <h3>Projekt: Zofia Dzielińska</h3>
                <p>Czasami trzeba zaprojektować przestrzeń publiczną , która należy do Wszystkich. Takie miejsca oprócz funkcji dekoracyjnej muszą być funkcjonalne. Zadbane wejścia , czy przdogródki w blokach podnoszą atrakcyjność takiego miejsca i cieszą samych mieszkańców, wpływając pozytywnie na ich samopoczucie , klimat oraz różnorodność biologiczną. Proponowane rośliny powinny być samoobsługowe , jak i odporne na warunki pogodowe np. susze.</p>
                <Button variant="contained" color="primary" onClick={() => handleClickOpenFromChild('sixth')}>
                  SPRAWDŻ PROJEKT
          </Button>
              </BlockWithTextAndButtonForMobile>
              <BlockWithImageForMobile>
                <ImageForExampleGarden src='/images/project-images/sixth/1-min.jpg' />
              </BlockWithImageForMobile>
            </SubBlockWithExampleGardenForMobile>
          </Fade>
        </BlockRecordForBorder>
      </BlockWithExampleGardensForMobile>);
  }
}

const Gardening = () => {
  const [dialogConfig, setDialogConfig] = useState({ isOpen: false, gardenToShow: '', listOfImages: [] });
  const [widthDevice, setWidthDevice] = useState(0);
  useLayoutEffect(() => {
    function updateSize() {
      setWidthDevice(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const pathsList = {
    'first': [
      '/images/project-images/first/1-min.jpg',
      '/images/project-images/first/2-min.jpg',
      '/images/project-images/first/3-min.jpg',
      '/images/project-images/first/4-min.jpg',
      '/images/project-images/first/5-min.jpg',
      '/images/project-images/first/6-min.jpg',
      '/images/project-images/first/7-min.jpg',
      '/images/project-images/first/8-min.jpg',
      '/images/project-images/first/9-min.jpg'
    ],
    'second': [
      '/images/project-images/second/1-min.jpg',
      '/images/project-images/second/2-min.jpg',
      '/images/project-images/second/3-min.jpg',
      '/images/project-images/second/4-min.jpg',
      '/images/project-images/second/5-min.jpg',
      '/images/project-images/second/6-min.jpg',
      '/images/project-images/second/7-min.jpg',
      '/images/project-images/second/8-min.jpg',
      '/images/project-images/second/9-min.jpg',
      '/images/project-images/second/10-min.jpg',
      '/images/project-images/second/11-min.jpg',
      '/images/project-images/second/12-min.jpg'
    ],
    'third': [
      '/images/project-images/third/1-min.jpg',
      '/images/project-images/third/2-min.jpg',
      '/images/project-images/third/3-min.jpg',
      '/images/project-images/third/4-min.jpg',
      '/images/project-images/third/5-min.jpg',
      '/images/project-images/third/6-min.jpg',
      '/images/project-images/third/7-min.jpg',
      '/images/project-images/third/8-min.jpg',
      '/images/project-images/third/9-min.jpg'
    ],
    'fourth': [
      '/images/project-images/fourth/1-min.jpg',
      '/images/project-images/fourth/2-min.jpg',
      '/images/project-images/fourth/3-min.jpg',
      '/images/project-images/fourth/4-min.jpg',
      '/images/project-images/fourth/5-min.jpg',
      '/images/project-images/fourth/6-min.jpg',
      '/images/project-images/fourth/7-min.jpg',
      '/images/project-images/fourth/8-min.jpg',
      '/images/project-images/fourth/9-min.jpg',
      '/images/project-images/fourth/10-min.jpg',
      '/images/project-images/fourth/11-min.jpg'
    ],
    'fifth': [
      '/images/project-images/fifth/1-min.jpg',
      '/images/project-images/fifth/2-min.jpg',
      '/images/project-images/fifth/3-min.jpg',
      '/images/project-images/fifth/4-min.jpg',
      '/images/project-images/fifth/5-min.jpg',
      '/images/project-images/fifth/6-min.jpg',
      '/images/project-images/fifth/7-min.jpg',
      '/images/project-images/fifth/8-min.jpg'
    ],
    'sixth': [
      '/images/project-images/sixth/1-min.jpg',
      '/images/project-images/sixth/2-min.jpg',
      '/images/project-images/sixth/3-min.jpg',
      '/images/project-images/sixth/4-min.jpg',
      '/images/project-images/sixth/5-min.jpg',
      '/images/project-images/sixth/6-min.jpg',
      '/images/project-images/sixth/7-min.jpg',
      '/images/project-images/sixth/8-min.jpg'
    ]
  }

  const handleClickOpen = (gardenToShow) => {
    setDialogConfig({ isOpen: true, gardenToShow: gardenToShow, listOfImages: [...pathsList[gardenToShow]] });
  };

  const closeFullDialog = () => {
    setDialogConfig({ isOpen: false, gardenToShow: '', listOfImages: [] });
  };

  return (
    <div>
      <Parallax image={imageGardeningParallax} />
      <GardeningBlockInfo>
        <SubBlockInfo>
          <Fade left>
            <p>“Ogród powinien docierać do głębi. Odmienić serce, zasmucić, uszlachetnić. Jego rolą jest skłonić nas do zadumy nad przemijalnością wszystkiego, co nas otacza . Ten szczególny punkt w czasie, kiedy ostatni liść już-już ma opaść, gdy ostatni płatek już-już ma się osypać, ten moment zawiera wszystko, co w życiu piękne i bolesne.”</p>
          </Fade>
          <Fade right>
            <Signature className="signature">Tan Twan Eng</Signature>
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
