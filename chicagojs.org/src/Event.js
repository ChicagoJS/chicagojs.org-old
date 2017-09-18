import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';

class Event extends Component {

  componentDidMount(){
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

  convertDate(ms){
    var d = new Date(ms)
    var date = d.toDateString();
    var time = d.toLocaleTimeString();
    return {date, time}
  }

  render() {
    var date = this.convertDate(this.props.event.time).date||"Not Announced"
    var time = this.convertDate(this.props.event.time).time||"Not Announced"

    return (

            <div className="event">
              <h4>{this.props.event.name}</h4>
              {this.props.event.venue?<p>{this.props.event.venue.name} - {this.props.event.venue.address_1}</p>:null}
              <p>{date} @ {time}</p>
              <button className="accordion">Event Description</button>
              <div className="panel">
                <p className="description">{ReactHtmlParser(this.props.event.description)}</p>
              </div>
            </div>

    );
  }
}

export default Event;