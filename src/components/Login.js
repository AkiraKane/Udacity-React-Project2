import React from "react";
import { connect } from "react-redux";
import { Dropdown, Button, Form } from "semantic-ui-react";

import styled from "@emotion/styled";

import { userOptions } from "../utils/helper";
import { receivedAuth } from "../actions/authUser";

/*STYLED COMPONENTS */

const LoginContainer = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 600px;
  margin-top: -300px;
  margin-left: -300px;
  background-color: #ffbf00;
  padding: 30px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

class Login extends React.Component {
  state = {
    userId: "",
    logedin: false
  };

  handleUserChange = (e, data) => {
    const { value } = data;
    this.setState({
      userId: value
    });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    const { dispatch, history } = this.props;
    const { userId } = this.state;
    dispatch(receivedAuth(userId));
    this.setState({ userId: "", logedin: true });
    if (window.location.pathname === "/") {
      history.push("/home")
    } else {
      history.push(window.location.pathname);
    }
  };   

  render() {
    const { userId } = this.state;
    const { userOptions } = this.props;

    let btnDisable = true;
    if (userId !== "") {
      btnDisable = false;
    }

    let isLoading = true;
    if (userOptions.length > 0) {
      isLoading = false;
    }

    return (
      <LoginContainer>
        <h1 style={{ color: `black` }}>Welcome to Would You Rather App!</h1>
        <h3>Please sign in to continue</h3>
        <div style={{ textAlign: `center`, display: `block` }}>
          <img
            src="http://busyteacher.org/uploads/posts/2013-07/1373463210_would-you-rather-game-0.png"
            alt="would you rather logo"
            width="450px"
          />
        </div>
        <Form onSubmit={this.onSubmitHandler}>
          <Dropdown
            placeholder="Select User"
            clearable
            fluid
            selection
            options={userOptions}
            loading={isLoading}
            onChange={this.handleUserChange}
            style={{ marginBottom: `20px` }}
          />
          <Button fluid content="Sign In" disabled={btnDisable} type="submit" />
        </Form>
      </LoginContainer>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    userOptions: userOptions(users)
  };
}

export default connect(mapStateToProps)(Login);