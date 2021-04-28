import { Route, Switch } from "react-router-dom";

import AboutUs from "../aboutUs";
import PlantNursery from "../plantNursery";
import Projects from "../projects";
import Gardening from "../gardening";
import GardenCare from "../gardenCare";
import Contact from "../contact";

const BodyRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" component={AboutUs} exact/>
        <Route path="/plantNursery" component={PlantNursery} />
        <Route path="/projects" component={Projects} />
        <Route path="/gardening" component={Gardening} />
        <Route path="/gardenCare" component={GardenCare} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={AboutUs} exact/>
      </Switch>
    </div>
  );
};

export default BodyRouter;

