import { Component } from "preact";
import { connect } from "react-redux";

import { withRouter } from "react-router";

class AboutPage extends Component {
  render() {
    return (
      <div className="aboutpage-container">
        <h1>About Page</h1>
      </div>
    );
  }
}

export default connect(state => ({}))(AboutPage);
