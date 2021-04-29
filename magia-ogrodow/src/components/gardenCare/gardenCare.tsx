import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

import Parallax from '../parallax';
import {GardenCareContainer,GardenCareBlockInfo,GardenCareSubBlockInfo,GardenCareExamplesExamples} from "./styled";
import GardenCareConfig from '../../configuration/gardenCareConfig';

import imageGardenCareParallax from '../../images/garden-care.jpg';

const GardenCare = () => {

  return (
    <GardenCareContainer>
      <Parallax image={imageGardenCareParallax} />
      <GardenCareBlockInfo>
        <GardenCareSubBlockInfo>
        <Fade top>
          <p>{GardenCareConfig.mainInfo}</p>
          </Fade>
        </GardenCareSubBlockInfo>
      </GardenCareBlockInfo>
      <GardenCareExamplesExamples>
        <div>
        <LightSpeed right cascade>
          <h3>Usługi projektowe</h3>
          <ul>
            {GardenCareConfig.firstColumn.map((text, index) => {return (<li key={index}><LocalFloristIcon  />{text}</li>)})}
          </ul>
          </LightSpeed>
        </div>
      </GardenCareExamplesExamples>
    </GardenCareContainer>
  );
};

export default GardenCare;
