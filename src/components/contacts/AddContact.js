import React, { Component } from "react";
import { Consumer } from "../../context";
import TextInputGroup from "../common/TextInputGroup";
import uuid from "uuid";

class AddContact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = dispatch => e => {
    e.preventDefault();
    const { name, email, phone } = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    };
    dispatch({
      type: "ADD_CONTACT",
      payload: newContact
    });
    this.setState({
      name: "",
      email: "",
      phone: ""
    });
  };

  render() {
    const { name, email, phone } = this.state;
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;

          return (
            <div className="card mb-3">
              <div className="card-header">Add Contactt</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit(dispatch)}>
                  <div className="form-group">
                    <TextInputGroup
                      type="text"
                      name="name"
                      placeholder="Enter name"
                      onChange={this.onChange.bind(this)}
                      value={name}
                      label="Name"
                    />

                    {/* <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control form-control-lg"
                      placeholder="Enter name"
                      onChange={this.onChange.bind(this)}
                      value={name}
                    /> */}
                  </div>
                  <div className="form-group">
                    <TextInputGroup
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      onChange={this.onChange.bind(this)}
                      value={email}
                      label="Email"
                    />
                    {/* <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter email"
                      onChange={this.onChange.bind(this)}
                      value={email}
                    /> */}
                  </div>
                  <div className="form-group">
                    <TextInputGroup
                      type="text"
                      name="phone"
                      placeholder="Enter phone number"
                      onChange={this.onChange.bind(this)}
                      value={phone}
                      label="Phone"
                    />
                    {/* <label htmlFor="phone">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter phone number"
                      onChange={this.onChange.bind(this)}
                      value={phone}
                    /> */}
                  </div>
                  <input
                    type="submit"
                    value="Add Contact"
                    className="btn btn-block btn-light"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default AddContact;
