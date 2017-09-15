import React, { Component} from 'react';
import logo from './logo.svg';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Chicago JS</h2>
          <Link to={`/home`}>Home</Link>
          <Link to={`/events`}>Events</Link>          
          <Link to={`/jobs`}>Jobs</Link>
          <Link to={`/resources`}>Resources</Link>          
          <Link to={`/community`}>Community</Link>
          <Link to={`/about`}>About</Link>
        </div>

    );
  }
}

export default Header;