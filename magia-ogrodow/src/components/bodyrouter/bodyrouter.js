import React, { memo } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/plantNursery" component={PlantNursery} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/gardening" component={Gardening} />
        <Route exact path="/gardenCare" component={GardenCare} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default memo(BodyRouter);

