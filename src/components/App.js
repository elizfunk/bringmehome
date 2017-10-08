import React, { Component } from 'react';
import styled from 'styled-components';
import SplashHeader from './SplashHeader.js'
import Header from './Header.js'
import Navigation from './Navigation.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSplashHeader: true
    }
  }

  render() {
    return (
      <AppWrapper>
        { this.state.showSplashHeader && <SplashHeader></SplashHeader> }
        { !this.state.showSplashHeader && <Header></Header> }
        <Navigation></Navigation>
      </AppWrapper>
    )
  }
};

const AppWrapper = styled.div`
  position: relative;
  margin: 0;
  padding: 0;
`

export default App; 

