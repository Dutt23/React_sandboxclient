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
          return <React.Fragment>{contactInfo}</React.Fragment>;
        }}
      </Consumer>
    );
  }
}

export default Contacts;
