import { withOAuth } from 'aws-amplify-react';
//import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

class OAuthButton extends React.Component {
  handleClick() {
    // do something meaningful, Promises, if/else, whatever, and then
    window.location.assign('https://amplify-app.auth.eu-west-1.amazoncognito.com/oauth2/authorize?identity_provider=AzureAD&redirect_uri=https://master.dj464q5nsb6u9.amplifyapp.com/&response_type=TOKEN&client_id=tp05f01r71u8666c0jimnj779');
  }

  render() {
    return (
      <div class='login'>
        <button onClick={this.handleClick}>Log back into application with O365</button>
      </div>
    )
  }
}

//export default OAuthButton;
export default withOAuth(OAuthButton);