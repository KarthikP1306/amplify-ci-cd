import { withOAuth } from 'aws-amplify-react';
//import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class OAuthButton extends React.Component {
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://ampkarthi.auth.eu-west-1.amazoncognito.com/oauth2/authorize?identity_provider=AzureAD&redirect_uri=https://master.dj464q5nsb6u9.amplifyapp.com/&response_type=TOKEN&client_id=4gd8fs90pmgr5fvlb48u996dsg');
  }

  render() {
    return (
      <div class='login'>
        <button onClick={this.handleClick}>Log into application</button>
      </div>
    )
  }
}

//export default OAuthButton;
export default withOAuth(OAuthButton);