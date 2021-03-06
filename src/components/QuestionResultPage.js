import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Progress, Button } from "semantic-ui-react";
import styled from "@emotion/styled";

import { responsePageData } from '../utils/helper'
import NavBar from "./NavBar";
import NoMatch from "./NoMatch";




const PageContainer = styled.div`
  padding-top: 120px;
`;

const CardContainer = styled.div`
  margin: auto;
  width: 70%;
  border: solid #e03997 1px;
  padding: 10px 20px 10px 20px;
  border-radius: 4px;
  text-align: center;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BtnContainer = styled.div`
  margin: auto;
  width: 70%;
  display: flex;
  justify-content: space-between;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 8px 5px 8px;
  margin: 10px;
  border-radius: 4px;
`;

const Avatar = styled.img`
  height: 80px;
`;

const Option = styled.img`
  height: 20px;
  margin-right: 10px;
  flex-basis: 10%;
`;

const H4 = styled.h4`
  margin: 0px 10px 0px 0px;
  flex-basis: 30%;
`;

//Styling for what the user selects
const userAnswerStyle = { backgroundColor: `lightgreen` };

const optionOneLogo = "https://image.flaticon.com/icons/svg/73/73207.svg";
const optionTwoLogo = "https://image.flaticon.com/icons/svg/91/91617.svg";

class QuestionResultsPage extends Component {
  handleClick = () => {
    const { history } = this.props;
    history.goBack();
  };

  render() {
    const {
      avatarURL,
      name,
      optionOne,
      optionTwo,
      userAnswer,
      optionOneVotes,
      optionTwoVotes,
      totalVotes,
      logedInUser,
      isIdTrue
    } = this.props;

    //checking what is the loged user to display her option
    let optionOneStyle = null;
    let optionTwoStyle = null;
    if (userAnswer === "optionOne") {
      optionOneStyle = userAnswerStyle;
      optionTwoStyle = null;
    } else {
      optionOneStyle = null;
      optionTwoStyle = userAnswerStyle;
    }

    return (
      <div>
        <NavBar history={this.props.history}/>
        {isIdTrue ? (
          <Fragment>
            <PageContainer>
              <CardContainer>
                <FlexColumn
                  stlstyle={{
                    backgroundColor: `#f9f9f9`,
                    padding: `25px`,
                    borderRadius: `5px`,
                    flex: `1 1 160px`
                  }}
                >
                  <Avatar src={avatarURL} alt={name} />
                  <h3 style={{ marginTop: `10px` }}>{name}</h3>
                </FlexColumn>
                <FlexColumn style={{ flex: `4 1 200px` }}>
                  <Flex style={optionOneStyle}>
                    <Option src={optionOneLogo} />
                    <H4>{optionOne}</H4>
                    <Progress
                      percent={Math.round((optionOneVotes / totalVotes) * 100)}
                      progress="percent"
                      style={{ flexBasis: `60%` }}
                    >{`${optionOneVotes} out of ${totalVotes}`}</Progress>
                  </Flex>
                  <Flex style={optionTwoStyle}>
                    <Option src={optionTwoLogo} />
                    <H4>{optionTwo}</H4>
                    <Progress
                      progress="percent"
                      percent={Math.round((optionTwoVotes / totalVotes) * 100)}
                      style={{ flexBasis: `60%` }}
                    >{`${optionTwoVotes} out of ${totalVotes}`}</Progress>
                  </Flex>
                </FlexColumn>
              </CardContainer>
            </PageContainer>
            <BtnContainer>
              <Button
                content="Back"
                color="green"
                basic
                onClick={this.handleClick}
              />
              {/* <div
                style={{ backgroundColor: `green`, padding: `10px` }}
              >{`${logedInUser} selection`}</div> */}
            </BtnContainer>
          </Fragment>
        ) : (
          <NoMatch />
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authUser }, {id}) {
  const {name,
    avatarURL,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    logedInUser,
    isIdTrue } = responsePageData(users, questions, authUser, id)
 

  return {
    name,
    avatarURL,
    optionOne,
    optionTwo,
    optionOneVotes,
    optionTwoVotes,
    totalVotes,
    userAnswer,
    logedInUser,
    isIdTrue
  };
}

export default connect(mapStateToProps)(QuestionResultsPage);