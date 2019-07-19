import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Nav extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }
  style= {
    marginLeft:1700

  }
  home = {
    marginLeft:-200
  }
  style1 = {
    background:"#B7F7F7"
  }

  render() {
    
    return (
      <nav style = {this.style1} className="navbar navbar-expand-lg navbar-dark bg-dark rounded">

     
      </nav>
    )
  }
}

export default withRouter(Nav)