import React, { Component } from 'react';
import MeetupList from './MeetupList'

class EventsContainer extends Component {
  render() {
  	console.log(this.props)
    return (
        <div>
          <MeetupList/>
        </div>
    );
  }
}

export default EventsContainer;