import React from "react";
import imageProjectParallax from '../../images/project.jpg';
import Parallax from '../parallax';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import {ProjectBlockInfo,ProjectListAndExamples,BlockWithMovie} from "./style.js"

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
              <LocalFloristIcon  />
                    projekty koncepcyjne ogrodów i terenów zieleni
                </li>
            <li>
              <LocalFloristIcon  />
                    projekty zieleni przy firmach, hotelach, kawiarniach, restauracjach
                </li>
            <li>
              <LocalFloristIcon  />
                    projekty zieleni osiedlowej
                </li>
            <li>
              <LocalFloristIcon  />
                    projekty zieleni na tarasach, balkonach
                </li>
            <li>
              <LocalFloristIcon  />
              nadzór autorski podczas realizacji projektów
                </li>
            <li>
              <LocalFloristIcon  />
              wizualizacje
                </li>
          </ul>
        </div>
        <div>
          <h3>Przykładowy projekt zawiera</h3>
          <ul>
            <li>
              <LocalFloristIcon  />
              projekt koncepcyjny zagospodarowania terenu
                </li>
            <li>
              <LocalFloristIcon  />
              projekt techniczny  z doborem roślin
                </li>
            <li>
              <LocalFloristIcon  />
              wykaz roślinności z uwagami pielęgnacyjnymi
                </li>
            <li>
              <LocalFloristIcon  />
              wizualizacje
                </li>
          </ul>
        </div>
      </ProjectListAndExamples>
      <BlockWithMovie>
      <iframe title="project movie" src='https://www.youtube.com/embed/gtWyCMKXjMk' frameBorder="0" webkitallowfullscreen="true"  
        mozallowfullscreen="true"  allowFullScreen="true" >
      </iframe>
    </BlockWithMovie>
    </div>
  );
};

export default Projects;
