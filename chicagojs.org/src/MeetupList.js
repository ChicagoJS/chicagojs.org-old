import React, { Component } from "react";
import "./App.css";

class MeetupList extends Component {
  render() {
    return (
      <div className="Meetup-list">
        <h2>Current Chicago Area JavaScript Meetups</h2>
        <h3>
          <a href="https://www.meetup.com/js-chi/">
            Chicago JavaScript Meetup Group
          </a>
        </h3>
        <p>
          Meet other local JavaScript Developers to network, share knowledge, to
          review the state of the art, or to dream up new applications.
        </p>

        <h3>
          <a href="https://www.meetup.com/Chicago-Nodejs/">Chicago Node.js</a>
        </h3>
        <p>A group to discuss Node.js, its frameworks, and best practices.</p>

        <h3>
          <a href="https://www.meetup.com/React-Chicago/">React Chicago</a>
        </h3>
        <p>
          This meetup is focused on bringing everyone together who have an
          interest in React, React Native, and it's ecosystem.
        </p>

        <h3>
          <a href="https://www.meetup.com/AngularJS-Chicago/">
            AngularJS Chicago
          </a>
        </h3>
        <p>
          AngularJS meetup group in Chicago, IL discussing how to leverage and
          evolve the 'Superheroic JavaScript MVW Framework'.
        </p>

        <h3>
          <a href="https://www.meetup.com/Chicago-Ember-js/">
            Chicago Ember.js
          </a>
        </h3>
        <p>
          Chicago's Ember.js group is committed to creating a robust community
          built around the philosophy of building beautifully crafted web
          applications with the help of Ember.js.
        </p>

        <h3>
          <a href="https://www.meetup.com/Chicago-ReasonML/">
            Chicago ReasonML
          </a>
        </h3>
        <p>
          A new programming language from Facebook, ReasonML combines Javascript
          syntax with Ocaml's AST for high quality, fast javascript.
        </p>
      </div>
    );
  }
}

export default MeetupList;
