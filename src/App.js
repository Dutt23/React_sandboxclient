import React, { Component } from "react";

import Header from "./components/layout/Header";
import Contacts from "./components/contacts/Contacts";
import AddContact from "./components/contacts/AddContact";
import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    const branding = "Contact Manager";
    return (
      <Provider>
        <div className="App">
          <Header branding={branding} />
          <div className="container">
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;