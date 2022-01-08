import { Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Films from "./Films/Films";
import Investment from "./Investment/Investment";

export default function Layout() {
  return (
    <div className="contain">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/films">
          <Films />
        </Route>
        <Route path="/investment">
          <Investment />
        </Route>
      </Switch>
    </div>
  )
}