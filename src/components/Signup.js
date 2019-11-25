import React, { Component } from 'react'

export default class Signup extends Component {
  constructor(props) {
    super(props)

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      password: '',
      phoneNumber: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit(e) {
    alert(`you typed: ${this.state.username}`)
    this.setState({ firstName: '' })
    this.setState({ lastName: '' })
    this.setState({ email: '' })
    this.setState({ password: '' })
    this.setState({ location: '' })
    this.setState({ phoneNumber: '' })
  }
  render() {
    return (
      <div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <div className='container'>
            <div className="row offset-md-2 offset-lg-4">
              <div className="col col-md-8 col-lg-6 ml-md-5">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="email">*Email Address:</label>
                      <input onChange={this.handleChange} value={this.state.email} name='email' type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="firstName">*First Name:</label>
                      <input onChange={this.handleChange} value={this.state.firstName} name='firstName' type="text" className="form-control" id="firstName" placeholder="First Name" />
                    </div>
                  </div>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="lastName">*Last Name:</label>
                      <input onChange={this.handleChange} value={this.state.lastName} name='lastName' type="text" className="form-control" id="lastName" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="location">*Location:</label>
                      <input onChange={this.handleChange} value={this.state.location} name='location' type="text" className="form-control" id="location" placeholder="Location" />
                    </div>
                  </div>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="password">*Password:</label>
                      <input onChange={this.handleChange} value={this.state.password} name='password' type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="phoneNumber">*Phone Number:</label>
                      <input onChange={this.handleChange} value={this.state.phoneNumber} name='phoneNumber' type="tel" className="form-control" id="phoneNumber" placeholder="Phone Number" />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-outline-primary">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
