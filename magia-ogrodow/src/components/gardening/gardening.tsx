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

  const handleClickOpenFromChild = (gardenToShow: string): void => {
    handleClickOpen(gardenToShow);
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

  const handleClickOpen = (gardenToShow: string ): void => { 
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
