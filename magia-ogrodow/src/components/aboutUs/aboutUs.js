import React from "react";
import Parallax from '../parallax';
import imageAboutUsParallax from '../../images/dzialka.jpg';
import imageAboutUsOwnerPicture from '../../images/owner-picture.jpg';
import {
  AboutUsBlockInfo, SubBlockInfo, Signature, SubMainInfoBlock,
  SubMainInfoBlockH5, MainInfoBlock, MainInfoBlockIMG, IMG
} from './style'

const AboutUs = () => {

  return (
    <div>
      <Parallax image={imageAboutUsParallax} />
      <AboutUsBlockInfo>
        <SubBlockInfo>
          <h2>Beata Kulling-Nitkowska</h2>
          <h3>inż. architekt krajobrazu</h3>
          <p>Praca w szkółce oraz zakładanie ogrodów nie jest dla mnie tylko pracą.... jest także pasją. Każdego
                klienta traktuję indywidualnie. Moją szkółkę i usługi cechuje wysoka jakość, a nie ilość.</p>
          <Signature className="signature">Beata Kulling-Nitkowska</Signature>
        </SubBlockInfo>
      </AboutUsBlockInfo>
      <MainInfoBlock>
        <MainInfoBlockIMG>
          <IMG width="300" height="500" alt="face image" src={imageAboutUsOwnerPicture} />
        </MainInfoBlockIMG>
        <SubMainInfoBlock>
          <p>Szkółka roślin ozdobnych Magia Ogrodów od 2010 roku zaprasza w świat roślin.
          Każdy miłośnik roślinności znajdzie u nas coś dla siebie, a osoby dopiero rozpoczynające przygodę z
          ogrodem dostaną od Nas uwagę i doświadczenie.
            </p>
          <p>Magia Ogrodów to przede wszystkim szkółka roślin w której można nabyć drzewa, krzewy, byliny , jak i
          kwiaty rabatowe. Prowadzimy sprzedaż roślin w doniczkach , które można sadzić przez cały okres
                wegetacyjny.</p>
          <p>Specjalizujemy się także w projektowaniu, zakładaniu oraz pielęgnacji ogrodów.</p>
          <p>Dołożymy wszelkich starań , aby Państwa ogrody były piękne i niepowtarzalne, dopasowane do indywidualnych
                potrzeb.</p>
          <SubMainInfoBlockH5>ZAPRASZAMY!</SubMainInfoBlockH5>
        </SubMainInfoBlock>
      </MainInfoBlock>
    </div>
  );
};

export default AboutUs;
