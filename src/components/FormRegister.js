import React, { Component } from 'react';
import styled from 'styled-components';

export default class FormRegister extends Component {

  render() {
    return (
      <form>
        <input type="text" name="pet-name" />
        <input type="text" name="owner-phone-number" />
        <UploadButton></UploadButton>
      </form>
    );
  }
}

const UploadButton = styled.button`
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