import { Suspense, lazy } from 'react';
import { Route, Switch } from "react-router-dom";

const AboutUs = lazy(() => import('../aboutUs'));
const PlantNursery = lazy(() => import('../plantNursery'));
const Projects = lazy(() => import('../projects'));
const Gardening = lazy(() => import('../gardening'));
const GardenCare = lazy(() => import('../gardenCare'));
const Contact = lazy(() => import('../contact'));
const NoMatch = lazy(() => import('../noMatch'));

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
          <Route path="*" component={NoMatch} />
        </Switch>
    </div>
  );
};

export default BodyRouter;

