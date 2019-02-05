import React, { Component } from "react";

import Test from "./components/test/Test";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import AddContact1 from "./components/contacts/AddContact1";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    const branding = "Contact Manager";
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding={branding} />
            <div className="container">
              {/* <AddContact /> */}
              <Switch>
                <Route exact path="/" component={Contacts} />
                {/* <Route exact path="/about/:id/:name" component={About} /> */}
                <Route exact path="/about" component={About} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/test" component={Test} />
                <Route component={NotFound} />
              </Switch>

              {/* <AddContact1 /> */}
              {/* <Contacts /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
