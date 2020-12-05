import React, { memo } from "react";
import styled from "styled-components";
import Parallax from '../parallax';
import imageGardenCareParallax from '../../images/garden-care.jpg';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';



const GardenCareContainer = styled.div`
`;

const GardenCareBlockInfo = styled.div`
  text-align: center;
  border-bottom: 1px solid rgb(198, 198, 198);
  padding: 40px;
  background-color: #e6e6e6;
`;

const GardenCareSubBlockInfo = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const GardenCareExamplesExamples = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 50px;

  ul {
    list-style-type: none;
  }
  li {
    margin: 20px;
  }
`;

const GardenCare = () => {

  return (
    <GardenCareContainer>
      <Parallax image={imageGardenCareParallax} />
      <GardenCareBlockInfo>
        <GardenCareSubBlockInfo>
          <p>W czystym i zadbanym ogrodzie odpoczywa się znacznie przyjemniej. 
            W naszej ofercie znajdziecie Państwo także tę usługę. Koszt zalezy od indywidualnej oceny stanu ogrodu oraz nakładu pracy.
          </p>
        </GardenCareSubBlockInfo>
      </GardenCareBlockInfo>
      <GardenCareExamplesExamples>
        <div>
          <h3>Usługi projektowe</h3>
          <ul>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              opryski wiosenne i jesienne
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              koszenie trawników
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              napowietrzanie (wertykulacja) trawników
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              formowanie żywopłotów
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              nawożenie roślin
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              ochrona roślin
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              plewienie ( odchwaszczanie)
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              spulchnianie gleby
            </li>
            <li>
              <LocalFloristIcon style={{ position: 'relative', top: '6px' }} />
              nasadzenia
            </li>
          </ul>
        </div>
      </GardenCareExamplesExamples>
    </GardenCareContainer>
  );
};

export default memo(GardenCare);
