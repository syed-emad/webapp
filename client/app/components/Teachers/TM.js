import React, { Component } from "react";
import "whatwg-fetch";
import { getFromStorage, setInStorage } from "../../utils/storage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const localStorageObjectName = "login_system_storage";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: "" // if they have a token, they are signed in
    };

    this.logout = this.logout.bind(this);
  }
  /**
   * Acquire token stored in local storage.
   * Use token to gather user information from DB.
   */
  componentDidMount() {
    // get the localstorage object
    const obj = getFromStorage(localStorageObjectName);
    if (obj && obj.token) {
      // get token from local storage
      const { token } = obj;

      // verify token
      fetch(`/api/account/verify?token=${token}`)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token,
              email: signInEmail,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      // there is no token
      this.setState({
        isLoading: false
      });
    }
  }

  logout() {
    this.setState({
      isLoading: true
    });
    // get the localstorage object
    const obj = getFromStorage(localStorageObjectName);
    if (obj && obj.token) {
      // get token from local storage
      const { token } = obj;

      // verify token
      fetch(`/api/account/logout?token=${token}`)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: "",
              isLoading: false
            });
          } else {
            // some error
            this.setState({
              isLoading: false
            });
          }
        });
    } else {
      // there is no token
      this.setState({
        isLoading: false,
        token: ""
      });
    }
  }

  render() {
    const { isLoading, token } = this.state;

    if (isLoading) {
      return <p>We are loading...</p>;
    }

    if (!token) {
      return (
        <>
          <p>xnck</p>
        </>
      );
    }

    return (
      <>
        <div>
          <p>Account</p>
          <Redirect to="/TM" />
          <button onClick={this.logout}>Logout</button>
        </div>
      </>
    );
  }
}

export default Home;
