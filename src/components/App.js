import React, { Component } from 'react';
import styled from 'styled-components';
import SplashHeader from './SplashHeader.js'
import Header from './Header.js'
import Navigation from './Navigation.js'
import FormRegister from './FormRegister.js'
import FormReport from './FormReport.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showSplashHeader: true,
      showRegisterForm: false,
      showReportForm: false
    }
  }

  handleRegisterClick() {
    this.setState({showSplashHeader: false})
    this.setState({showRegisterForm: true})
    console.log("report button clicked")
  }

  handleReportClick() {
    this.setState({showSplashHeader: false})
    this.setState({showReportForm: true})
    console.log("report button clicked")
  }

  render() {
    return (
      <AppWrapper>
        { this.state.showSplashHeader && <SplashHeader></SplashHeader> }
        { !this.state.showSplashHeader && <Header></Header> }
        <Navigation register={this.handleRegisterClick.bind(this)} report={this.handleRegisterClick.bind(this)}></Navigation>
        { this.state.showRegisterForm && <FormRegister></FormRegister>}
        { this.state.showReportForm && <FormReport></FormReport>}
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

