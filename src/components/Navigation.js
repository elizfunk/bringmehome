import React, { Component } from 'react';
import styled from 'styled-components';

export default class Navigation extends Component {

  render() {
    return (
      <ButtonWrapper>
        <LeftButton>Register a pet</LeftButton>
        <RightButton>Report a found pet</RightButton>
      </ButtonWrapper>
    );
  }
}

const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 16px;
`

const LeftButton = styled.button`
  color: rgba(255,255,255,0.9);
  font-family: 'Roboto', san-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  height: 46px;
  background: #9E8869;
  padding: 10px 12px;
  border: 3px solid rgba(255,255,255,0.9);
  border-radius: 3px;
`

const RightButton = styled.button`
  color: rgba(255,255,255,0.9);
  font-family: 'Roboto', san-serif;
  font-size: 16px;
  letter-spacing: 0.5px;
  margin-right: 20px;
  margin-left: 16px;
  height: 46px;
  background: #9E8869;
  padding: 10px 12px;
  border: 3px solid rgba(255,255,255,0.9);
  border-radius: 3px;
`