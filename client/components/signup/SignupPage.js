import React from 'react';
import SignupForm from './SignupForm';

class SignupPage extends React.Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-4 col-md-offset-4">
      <h1>Join our community!</h1>
      <SignupForm />
      </div>
      </div>
    );
  }
}
export default SignupPage;
