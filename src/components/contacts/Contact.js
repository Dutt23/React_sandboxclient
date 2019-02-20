import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "../../context";
import { Link } from "react-router-dom";
import axios from "axios";

class Contact extends Component {
  state = {};

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);

      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    } catch (e) {
      dispatch({
        type: "DELETE_CONTACT",
        payload: id
      });
    }
  };
  render() {
    const { name, email, phone, id } = this.props.contact;

    const { showContactInfo } = this.state;

    let contactInfo;
    // let icon;

    if (showContactInfo) {
      contactInfo = (
        <ul className="list-group">
          <li className="list-group-item">Email : {email}</li>
          <li className="list-group-item">Number: {phone}</li>
        </ul>
      );
    }
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <span>
                <h4>
                  {name}{" "}
                  <span
                    onClick={() => {
                      this.setState({
                        showContactInfo: !this.state.showContactInfo
                      });
                    }}
                  >
                    <i
                      className="fa fa-sort-down"
                      style={{ cursor: "pointer" }}
                    />
                  </span>
                  <span onClick={this.onDeleteClick.bind(this, id, dispatch)}>
                    <i
                      className="fas fa-times"
                      style={{
                        float: "right",
                        color: "red",
                        cursor: "pointer"
                      }}
                    />
                    <Link to={`contact/edit/${id}`}>
                      <i
                        className="fas fa-pencil-alt"
                        style={{
                          cursor: "pointer",
                          float: "right",
                          color: "black",
                          marginRight: "1rem"
                        }}
                      />
                    </Link>
                  </span>
                  {contactInfo}
                </h4>
              </span>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired
};

export default Contact;
