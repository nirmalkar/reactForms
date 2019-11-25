import React, { Component } from 'react'

export default class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit(e) {
    alert(`you typed: ${this.state.username}`)
    this.setState({ email: '' })
    this.setState({ password: '' })
  }
  render() {
    return (
      <div>
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
          <div className='container'>
            <div className="row offset-md-2 offset-lg-4 ">
              <div className="col col-md-8 col-lg-6 ml-md-5">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="username">Username</label>
                      <input onChange={this.handleChange} value={this.state.email} name='email' autocomplete="off" type="email" className="form-control" id="username" placeholder="Username" />
                    </div>
                  </div>
                  <div className="form-row text-left">
                    <div className="form-group col-md-12">
                      <label htmlFor="password">Password</label>
                      <input onChange={this.handleChange} value={this.state.password} name="password" type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-12">
                      <button type="submit" className="btn btn-outline-primary ">Sign in</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
