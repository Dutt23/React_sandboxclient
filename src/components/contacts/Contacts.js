import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../../context";

class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          let contactInfo;

          contactInfo = contacts.map((contact, i) => (
            <Contact key={i} contact={contact} />
          ));
          return (
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span>
                List
              </h1>
              {contactInfo}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
