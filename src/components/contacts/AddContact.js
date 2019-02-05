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
      phone: "",
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = dispatch => e => {
    e.preventDefault();
    // Check for errors

    const { name, email, phone } = this.state;

    if (name === "") {
      this.setState({
        errors: {
          name: "Name is required"
        }
      });
      return;
    }

    if (email === "") {
      this.setState({
        errors: {
          email: "Email is required"
        }
      });
      return;
    }

    if (phone === "") {
      this.setState({
        errors: {
          phone: "Phone is required"
        }
      });
      return;
    }

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
      phone: "",
      errors: {}
    });
    this.props.history.push("/");
  };

  render() {
    const { name, email, phone, errors } = this.state;
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
                      error={errors.name}
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
                      error={errors.email}
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
                      error={errors.phone}
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
