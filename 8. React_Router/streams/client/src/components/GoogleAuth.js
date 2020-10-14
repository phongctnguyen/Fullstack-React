import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '614529832980-pc063vfo5dnm24930sljrvg8btd872mi.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.handleAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.handleAuthChange);
        });
    });
  }

  handleAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  handleSignInClick = () => {
    this.auth.signIn();
  };

  handleSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          onClick={this.handleSignOutClick}
          className='ui red google button'
        >
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          onClick={this.handleSignInClick}
          className='ui red google button'
        >
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
