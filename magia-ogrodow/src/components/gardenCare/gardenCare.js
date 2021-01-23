import React from "react";
import Parallax from '../parallax';
import imageGardenCareParallax from '../../images/garden-care.jpg';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import {GardenCareContainer,GardenCareBlockInfo,GardenCareSubBlockInfo,GardenCareExamplesExamples} from "./style"
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';

const GardenCare = () => {

  return (
    <GardenCareContainer>
      <Parallax image={imageGardenCareParallax} />
      <GardenCareBlockInfo>
        <GardenCareSubBlockInfo>
        <Fade top>
          <p>W czystym i zadbanym ogrodzie odpoczywa się znacznie przyjemniej. 
            W naszej ofercie znajdziecie Państwo także tę usługę. Koszt zalezy od indywidualnej oceny stanu ogrodu oraz nakładu pracy.
          </p>
          </Fade>
        </GardenCareSubBlockInfo>
      </GardenCareBlockInfo>
      <GardenCareExamplesExamples>
        <div>
        <LightSpeed right cascade>
          <h3>Usługi projektowe</h3>
          <ul>
            <li>
              <LocalFloristIcon  />
              opryski wiosenne i jesienne
            </li>
            <li>
              <LocalFloristIcon  />
              koszenie trawników
            </li>
            <li>
              <LocalFloristIcon  />
              napowietrzanie (wertykulacja) trawników
            </li>
            <li>
              <LocalFloristIcon  />
              formowanie żywopłotów
            </li>
            <li>
              <LocalFloristIcon  />
              nawożenie roślin
            </li>
            <li>
              <LocalFloristIcon  />
              ochrona roślin
            </li>
            <li>
              <LocalFloristIcon  />
              plewienie ( odchwaszczanie)
            </li>
            <li>
              <LocalFloristIcon  />
              spulchnianie gleby
            </li>
            <li>
              <LocalFloristIcon  />
              nasadzenia
            </li>
          </ul>
          </LightSpeed>
        </div>
      </GardenCareExamplesExamples>
    </GardenCareContainer>
  );
};

export default GardenCare;
