import React, { Component } from 'react';
import './App.css';
import Event from './Event'

class EventsContainer extends Component {
   constructor(props) {
    super(props);
    this.state = {node: [], react:[], ang:[], js:[]};
  }


  render() {


    return (
        <div className="Meetup-list">
          
          <div className="center">
          {this.props.list.map((event, i)=>{
            return (
              <Event event={event} key={i}/>
              )
          })}
          </div>

        </div>
    );
  }
}

export default EventsContainer;