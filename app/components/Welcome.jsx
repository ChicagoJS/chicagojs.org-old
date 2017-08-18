import React, { Component } from 'react'

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Coming Soon - Chicago JS!</h1>

        <p>Chicago JS is an effort to organize all of the JavaScript related developer communities under a single umbrella in the Chicago Metro area</p>

        <p>This site is currently a placeholder while a site gets designed.  Feel free to contact <a href="http://mike-hostetler.com/contact">Mike Hostetler</a> and join our <a href="https://groups.google.com/forum/#!forum/chicago-js">Google Group.</a></p>

        <p>Our community currently lives on the <a href="http://chicagotechslack.com">Chicago Tech Slack</a> in the #nodejs and #javascript channels</p>

        <p>Source for this page is available in our <a href="https://github.com/ChicagoJS">Github Organization</a>.  PR's always welcome.</p>
      </div>
    )
  }
}