import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import styled from "@emotion/styled";

import LoginUser from "./LoginUser";

/*STYLE components */
const Header = styled.div`
width: 100%;
position:fixed; 
top: 0;
background: white;
`

const Nav = styled.nav`
  width: 80%;
  text-align: center;
  margin: auto;
  display: flex;
  flex-wrap: wrap-reverse;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 650px) { 
    width: 90%;
  }
`;

const Ul = styled.ul`
  text-decoration: none;
  display: flex;
  align-items: baseline;
  margin: 10px;
  padding: 0;
`;

const Li = styled.li`
  margin-right: 40px;
  list-style: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
`;

const UserLogout = styled.div`
  @media (max-width: 650px) {
    display: none;
  }
`;
/*STYLE components */

const activeLink = {
  fontWeight: "bold",
  paddingBottom: "5px",
  borderBottom: "3px solid #e03997"
};

class NavBar extends Component {
  render() {
    console.log(this.props)
    return (
      <Header>
      <Nav>
          <Ul>
            <Li>
              <NavLink
                exact
                to="/home"
                activeStyle={activeLink}
                style={{ color: `black` }}
              >
                Home
              </NavLink>
            </Li>
            <Li>
              <NavLink
                exact
                to="/add"
                activeStyle={activeLink}
                style={{ color: `black` }}
              >
                New question
              </NavLink>
            </Li>
            <Li>
              <NavLink
                exact
                to="/leaderboard"
                activeStyle={activeLink}
                style={{ color: `black` }}
              >
                Leader Board
              </NavLink>
            </Li>
          </Ul>
      
        <UserLogout>
          <LoginUser history={this.props.history} />
        </UserLogout>
      </Nav>
      </Header>
    );
  }
}

export default NavBar;