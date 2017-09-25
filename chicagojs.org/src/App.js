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

import HomeContainer from './HomeContainer'

const apiaddr = "https://sheltered-castle-51967.herokuapp.com/";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {node: [], react:[], ang:[], js:[]};
  }


  componentDidMount(){
    axios.get(apiaddr+'api/meetup/node')
    .then((evtInfo)=>{this.setState({node: evtInfo.data})})
    
    axios.get(apiaddr+'api/meetup/js')
    .then((evtInfo)=>{this.setState({js: evtInfo.data})})
    
    axios.get(apiaddr+'api/meetup/react')
    .then((evtInfo)=>{this.setState({react: evtInfo.data})})
    
    axios.get(apiaddr+'api/meetup/ang')
    .then((evtInfo)=>{this.setState({ang: evtInfo.data})})
  }

  render(){
    var arr = this.state.node.concat(this.state.react, this.state.ang, this.state.js)
    arr.sort(function(a, b){
      return a.time-b.time
    })


    const MyEventsContainer = (props) => {
      return (
        <EventsContainer 
          list={arr}
          {...props}
        />
      );
    }


    return (
      <Router>
        <div className="App">
          <Header/>
          <div className="App-intro">
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/home" component={HomeContainer}/>
            <Route exact path="/events" render={MyEventsContainer}/>
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