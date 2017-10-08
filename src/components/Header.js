import React, { Component } from 'react';
import styled from 'styled-components';

export default class Header extends Component {

  render() {
    return (
      <Wrapper>
          <AppName>Bring Me Home!</AppName>
      </Wrapper>
    );
  }
}

const Wrapper = styled.header`

  background: #333;
  padding-left: 20px;
  height: 60px;
  width: 100%;
`

const AppName = styled.h1`
  color: rgba(235,235,235, 0.9);
  font-family: 'Pacifico', san-serif;
  text-align: center;
  font-weight: normal;
  font-size: 34px;
  line-height: 60px;
`