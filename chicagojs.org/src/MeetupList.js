import React, { Component } from 'react';
import './App.css';

function getMeetupList()
{
  return [{
    url : 'https://www.meetup.com/Chicago-Nodejs/',
    title: 'Chicago Node.js',
    description:'A group to discuss Node.js, its frameworks, and best practices.',
    nextMeetup:''
  },
  {
    url : 'https://www.meetup.com/React-Chicago/',
    title: 'React Chicago',
    description:'This meetup is focused on bringing everyone together who have an interest in React, React Native, and it\'s ecosystem.',
    nextMeetup:''
  },
  {
    url : 'https://www.meetup.com/AngularJS-Chicago/',
    title: 'AngularJS Chicago',
    description:'AngularJS meetup group in Chicago, IL discussing how to leverage and evolve the \'Superheroic JavaScript MVW Framework\'.',
    nextMeetup:''
  }];
}


function RenderRow({foo, rep}) {
var meetups =[]
 meetups = getMeetupList();
  return(
      <div className="lists">
        {meetups.map(({url , title, description},index) => (
      <div key ={index}> <h3> <a href={url}> {title} </a></h3>
            <p className='{title}'> {description} </p>
      </div>
      )
        )}
    </div>
    )
}


class MeetupList extends Component {
  render() {
    return (
        <div className="Meetup-list">
          <h2>Current Chicago Area JavaScript Meetups</h2>
         <RenderRow/>


        </div>
    );
  }
}

export default MeetupList;
