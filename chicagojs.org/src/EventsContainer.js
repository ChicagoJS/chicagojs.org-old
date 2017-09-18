import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Event from './Event'

class EventsContainer extends Component {
   constructor(props) {
    super(props);
    this.state = {node: [], react:[], ang:[], js:[]};
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