import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import history from "../common/history";
import Forbiden from "../pages/403";
import NotFound from "../pages/404";
import ISError from "../pages/500";
import Home from "../pages/home";
import About from "../pages/about";
import Rule from "../pages/rule";
import Contacts from "../pages/contacts";
import Helptopics from "../pages/helptopics";
import Services from "../pages/services";
import Transaction from "../pages/transaction";

export default function Routers() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/rule" component={Rule} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/helptopics" component={Helptopics} />
        <Route path="/services" component={Services} />
        <Route path="/transaction/success">
          <Transaction component="success" />
        </Route>
        <Route path="/transaction/waiting">
          <Transaction component="waiting" />
        </Route>
        <Route path="/transaction/failed">
          <Transaction component="failed" />
        </Route>
        <Route path="/403" component={Forbiden} />
        <Route path="/500" component={ISError} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
