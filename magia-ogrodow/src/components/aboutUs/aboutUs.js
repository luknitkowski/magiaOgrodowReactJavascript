import React, { memo } from "react";
import Parallax from '../parallax';
import imageAboutUsParallax from '../../images/dzialka.jpg';
import imageAboutUsOwnerPicture from '../../images/owner-picture.jpg';
import styled from "styled-components";


const AboutUsBlockInfo = styled.div`
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

const SubMainInfoBlock = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SubMainInfoBlockH5 = styled.h5`
  font-size: 20px;
  text-align: center;
`;

const MainInfoBlock = styled.div`
  max-width: 1000px;
  margin: auto;
  display: flex;
  @media only screen and (max-width: 650px) {
    display: block;
  }
`;

const MainInfoBlockIMG = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IMG = styled.img`
  transition: transform 0.2s;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  margin: auto;
`;


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

export default memo(AboutUs);
