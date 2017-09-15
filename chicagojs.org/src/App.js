import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'
import Header from './Header'
import JobsContainer from './JobsContainer'
import AboutContainer from './AboutContainer'
import CommunityContainer from './CommunityContainer'
import EventsContainer from './EventsContainer'
import ResourcesContainer from './ResourcesContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {node: [], react:[], ang:[], js:[]};
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/meetup/node')
    .then((ok)=>{this.setState({node: ok.data})})
    
    axios.get('http://localhost:3001/api/meetup/js')
    .then((ok)=>{this.setState({js: ok.data})})
    
    axios.get('http://localhost:3001/api/meetup/react')
    .then((ok)=>{this.setState({react: ok.data})})
    
    axios.get('http://localhost:3001/api/meetup/ang')
    .then((ok)=>{this.setState({ang: ok.data})})
  }
  render(){
    var arr = this.state.node.concat(this.state.react, this.state.ang, this.state.js)

    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="App-intro">
            <Route exact path="/" component={AboutContainer}/>
            <Route exact path="/home" component={AboutContainer}/>
            <Route exact path="/events" component={EventsContainer} list={arr}/>
            <Route path="/jobs" component={JobsContainer}/>
            <Route path="/resources" component={ResourcesContainer}/>
            <Route path="/community" component={CommunityContainer}/>
            <Route path="/about" component={AboutContainer}/>
          </div>      
        </div>
      </Router>
    )
  }
}

export default App;