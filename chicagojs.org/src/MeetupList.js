import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Event from './Event'

class MeetupList extends Component {
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

  componentDidUpdate(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        }
    }
  }


  render() {


    return (
        <div className="Meetup-list">
          
          <div className="center">
          {this.state.js.map((event)=>{
            return (
              <Event event={event}/>
              )
          })}
          </div>

          <div className="center">
          {this.state.node.map((event)=>{
            return (
              <Event event={event}/>
              )
          })}
          </div>

          <div className="center">
          {this.state.react.map((event)=>{
            return (
              <Event event={event}/>
              )
          })}
          </div>

          <div className="center">
          {this.state.ang.map((event)=>{
            return (
              <Event event={event}/>
              )
          })}
          </div>
        </div>
    );
  }
}

export default MeetupList;