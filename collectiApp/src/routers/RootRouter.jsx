import React from "react";
import { Router, Scene } from "react-native-router-flux";
import * as views from "../views";

const RootRouter = () => (
  <Router>
    <Scene key="root">
      <Scene
        key="home"
        component={views.HomeScene}
        title="Home"
        initial={true}
      />
      <Scene key="about" component={views.AboutScene} title="About" />
    </Scene>
  </Router>
);
export default RootRouter;
