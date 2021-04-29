import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Zoom from 'react-reveal/Zoom';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

import Parallax from '../parallax';
import {ProjectBlockInfo,ProjectListAndExamples,BlockWithMovie} from "./styled";
import ProjectsConfig from  '../../configuration/projectsConfig'
import imageProjectParallax from '../../images/project.jpg';


const Projects = () => {

  return (
    <div>
      <Parallax image={imageProjectParallax} />
      <ProjectBlockInfo>
        <div>
        <Fade top>
          <p>{ProjectsConfig.mainInfo}</p>
        </Fade>
        </div>
      </ProjectBlockInfo>
      <ProjectListAndExamples>
        <div>
        <LightSpeed left cascade>
          <h3>{ProjectsConfig.firstColumn.title}</h3>
          <ul>
            {ProjectsConfig.firstColumn.list.map((text, index) => {
              return (<li key={index}> <LocalFloristIcon  />{text}</li>)
            })}
          </ul>
        </LightSpeed>
        </div>
        <div>
        <LightSpeed right cascade>
          <h3>{ProjectsConfig.secondColumn.title}</h3>
          <ul>
          {ProjectsConfig.secondColumn.list.map((text, index) => {
            return (<li key={index}> <LocalFloristIcon  />{text}</li>)
          })}
          </ul>
          </LightSpeed>
        </div>
      </ProjectListAndExamples>
      <BlockWithMovie>
      <Zoom bottom>
      <iframe title="project movie" src={ProjectsConfig.iframeLinkToYT} frameBorder="0" allowFullScreen={true} />
      </Zoom>
    </BlockWithMovie>
    </div>
  );
};

export default Projects;
