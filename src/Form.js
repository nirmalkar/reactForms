import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
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
    this.setState({ username: '' })
  }
  render() {
    return (
      <div>
        <h1>Forms</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder='Username' name='username' value={this.state.username} onChange={this.handleChange} />
          <input type="text" placeholder='Email' name='email' value={this.state.email} onChange={this.handleChange} />
          <input type="text" placeholder='Password' name='password' value={this.state.password} onChange={this.handleChange} />

          <button>submit</button>
        </form>
      </div>
    )
  }
}
