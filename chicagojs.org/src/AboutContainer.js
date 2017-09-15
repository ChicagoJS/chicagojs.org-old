import React, { Component } from 'react';


class AboutContainer extends Component {
  render() {
    return (
		<div className="App-intro">
          <h1>Coming Soon - Chicago JS!</h1>

          <p>Chicago JS is an effort to organize all of the JavaScript-related developer
          communities under a single umbrella in the Chicago Metro area.</p>

          <p>This site is currently a placeholder while a site gets designed.  Feel free to
          contact <a href="http://mike-hostetler.com/contact">Mike Hostetler</a> and join
          our <a href="https://groups.google.com/forum/#!forum/chicago-js">Google Group</a>.</p>

          <p>Our community currently lives on the <a href="http://chicagotechslack.com">Chicago Tech Slack</a> in the <a href="slack://channel?team=T08UCAYN6&id=C0CJC2HPA">#nodejs</a> and <a href="slack://channel?team=T08UCAYN6&id=C08UN3E3W">#javascript</a> channels.</p>

          <p>Source for this page is available in our <a href="https://github.com/ChicagoJS">GitHub Organization</a>.
          PR's always welcome.</p>
        </div>
    );
  }
}

export default AboutContainer;