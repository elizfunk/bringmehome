import React, { Component } from 'react';
import styled from 'styled-components';

export default class SplashHeader extends Component {

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <AppName>Bring Me Home!</AppName>
          <Byline>Register him now before he's lost forever.</Byline>
        </TitleWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`
  paddig-top: 60px;
  background-image: 
    radial-gradient(
      rgba(0,0,0, 0.3),
      rgba(0,0,0, 0.1)
    ),
    url(../images/lost_dog.jpg);
  background-size: cover;
  text-align: center;
  height: 100vh;
  display: table;
  width: 100%;
`

const TitleWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  display: table-cell;
  vertical-align: middle;
`

const AppName = styled.h1`
  color: rgba(235,235,235, 0.9);
  font-family: 'Pacifico', san-serif;
  text-align: center;
  font-weight: normal;
  font-size: 8vw;
  line-height: 1;
  margin-top: 50px;
  margin-bottom: 35px;
`

const Byline = styled.h2`
  color: rgba(240,240,240, 0.9);
  text-shadow:
   -1px -1px 0 #666,  
    1px -1px 0 #666,
   -1px 1px 0 #666,
    1px 1px 0 #666;
  font-family: 'Roboto', san-serif;
  font-weight: 700;
  font-size: 2.25vw;
  text-align: center;
  line-height: 2;
  margin-top: 10px;
`