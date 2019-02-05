import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: "1",
        name: "Shatyaki Dutt",
        email: "s_dutt@hotmail.com",
        number: "777-777889"
      },
      {
        id: "2",
        name: "Kane Willaimson",
        email: "k_will@hotmail.com",
        number: "777-777889"
      },
      {
        id: "3",
        name: "Veronica Guptil",
        email: "v_guptil@hotmail.com",
        number: "777-7789"
      }
    ],

    dispatch: action => this.setState(state => reducer(state, action))
  };
  componentDidUpdate() {
    console.log("Component did update");
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
