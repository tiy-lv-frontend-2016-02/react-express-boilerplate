import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function () {
    return (
      <div>
        <Link to="/">Login</Link><br />
        <Link to="/test">Users</Link>
        {this.props.children}
      </div>
    )
  }
})