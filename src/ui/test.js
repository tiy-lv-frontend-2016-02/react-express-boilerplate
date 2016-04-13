import React from 'react';
import {login} from 'api/data';
import {getUsers} from 'api/data';

var img = require('assets/images/img.jpg');

export default React.createClass({
  login: function() {
    login('mike', 'zse4%TGB')
  },
  testUser: function () {
    getUsers().then(function(resp){
      console.log(resp.data);
    })
  },
  render: function () {
    return (
      <div>
      <img src={img} />
      <button onClick={this.login}>Test</button>
      <button onClick={this.testUser}>Test User</button>
      </div>
    )
  }
})