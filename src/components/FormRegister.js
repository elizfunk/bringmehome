import React, { Component } from 'react';
import styled from 'styled-components';

export default class FormRegister extends Component {

  constructor(props) {
    super(props);
    this.state = {
      petName: '',
      ownerPhone: ''
    }

    handlePetNameChange = (event) => {
      this.setState({
        petName: event.target.value,
      });
    }

    handlePhoneChange = (event) => {
      this.setState({
        ownerPhone: event.target.value,
      });
    }
  }

  render() {
    return (
      <Form id="register">
        <Label></Label>
        <input type="text"
               name="pet-name" 
               value={this.state.petName}
               onChange={this.handlePetNameChange/>
        <Label></Label>
        <input type="text"
               name="owner-phone-number"
               value={this.state.ownerPhone}
               onChange={this.handlePhoneChange} />
        <UploadButton>Upload a photo of your pet</UploadButton>
      </Form>
    );
  }
}

const Form = styled.form`
  margin-top: 50px;
  padding: 20px;
  text-align: center;
`

const Label = styled.label`
  font-size: 12px;
  font-family: 'Roboto', san-serif;
  color: #333;
`

const UploadButton = styled.button`
  display: block;
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
  text-align: center;
`