// Import necessary dependencies from React and Wouter libraries.
import * as React from "react";
import { Switch, Route } from "wouter";

// Import the Home and About components from the pages directory.
import Home from "../pages/home";
import About from "../pages/about";

// Define and export an anonymous functional component.
export default () => (
  // Use the Switch component from the wouter library to handle routing.
  <Switch>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
  </Switch>
);
