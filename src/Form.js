import React, { Component } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoginTab: true
    }
  }

  render() {
    return (
      <div>
        <h1>Forms</h1>
        <div className="row no-gutters navbar-margin mt-5">
          <div className="col-6"></div>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" onClick={() => { this.setState({ isLoginTab: true }) }}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" onClick={() => { this.setState({ isLoginTab: false }) }}>Profile</a>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
          {this.state.isLoginTab ? <Login /> : <Signup />}


        </div>
      </div>
    )
  }
}
