import React, { memo } from "react";
import imageProjectParallax from '../../images/project.jpg';
import styled from "styled-components";
import Parallax from '../parallax';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';


const ProjectBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: #e6e6e6;

  div {
    max-width: 1000px;
    margin: auto;
  }
`;

const ProjectListAndExamples = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 50px;
  display: flex;

  ul {
    list-style-type: none;
  }
  li {
    margin: 20px;
  }

@media only screen and (max-width: 560px) {
  display: block;
}
`;

const BlockWithMovie = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 80px;
  border-top: 1px solid #c6c6c6;

  iframe {
    border-radius: 10px;
    margin: auto;
    width:560px;
    height:315px;
  }

  @media only screen and (max-width: 560px) {
    iframe {
      border-radius: 10px;
      margin: auto;
      width:95vw;
      height:315px;
    }
  }
`;

const Projects = () => {

  return (
    <div>
      <Parallax image={imageProjectParallax} />
      <ProjectBlockInfo>
        <div>
          <p>Ładny ogród nie jest na ogól dziełem przypadku, lecz wynikiem dobrego planowania.
          Zarówno zakładanie ogrodu, jak i jego przekształcanie wymagają gruntownych rozważań.
          Na ogród nie można patrzeć jak na sumę poszczególnych części, należy go traktować jako całość ,
          zharmonizowaną z domem i otoczeniem. Zaprojektowanie ciekawego ogrodu z charakterem nie jest proste,
          dlatego warto powierzyć to zadanie fachowcom. Dzięki temu unikniemy wielu błędów i przypadkowości w ogrodzie,
          a później nie będziemy musieli przemeblowywać ogrodu przez kilka następnych lat.
          Do prac projektowych potrzebna będzie nam mapka do celów projektowych z naniesionymi budynkami lub
          tez nawierzchniami, jeżeli już takie istnieją. W czasie spotkania wysłuchamy Państwa życzeń i oczekiwań,
          dotyczących ogrodu. Na następnym spotkaniu przedstawie dwie koncepcie o których porozmawiamy wspólnie i
          wybierzemy jedną, na podstawie której powstanie projekt.
        </p>
        </div>
      </ProjectBlockInfo>
      <ProjectListAndExamples>
        <div>
          <h3>Usługi projektowe</h3>
          <ul>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
                    projekty koncepcyjne ogrodów i terenów zieleni
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
                    projekty zieleni przy firmach, hotelach, kawiarniach, restauracjach
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
                    projekty zieleni osiedlowej
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
                    projekty zieleni na tarasach, balkonach
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              nadzór autorski podczas realizacji projektów
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              wizualizacje
                </li>
          </ul>
        </div>
        <div>
          <h3>Przykładowy projekt zawiera</h3>
          <ul>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              projekt koncepcyjny zagospodarowania terenu
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              projekt techniczny  z doborem roślin
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              wykaz roślinności z uwagami pielęgnacyjnymi
                </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              wizualizacje
                </li>
          </ul>
        </div>
      </ProjectListAndExamples>
      <BlockWithMovie>
      <iframe src='https://www.youtube.com/embed/gtWyCMKXjMk' frameborder="0" webkitallowfullscreen 
        mozallowfullscreen allowfullscreen>
      </iframe>
    </BlockWithMovie>
    </div>
  );
};

export default memo(Projects);
