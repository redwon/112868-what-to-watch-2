import React, {PureComponent} from 'react';

import withApi from '../../hocs/with-api/with-api';

const MIN_PASSWORD_LENGTH = 4;

const emailErrorMessage = `Please enter a valid email address`;
const passwordErrorMessage = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;

const withFormSignIn = (Component) => {
  class WithFormSignIn extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        email: ``,
        isEmailValid: false,
        password: ``,
        isPasswordValid: false,
        isFormValid: false,
        isShowError: false,
      };

      this._userInputHandler = this._userInputHandler.bind(this);
      this._showErrorHandler = this._showErrorHandler.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        email={this.state.email}
        isEmailValid={this.state.isEmailValid}
        passwordErrorMessage={passwordErrorMessage}
        password={this.state.password}
        isPasswordValid={this.state.isPasswordValid}
        emailErrorMessage={emailErrorMessage}
        isFormValid={this.state.isFormValid}
        isShowError={this.state.isShowError}
        onShowError={this._showErrorHandler}
        onUserInput={this._userInputHandler}
      />;
    }

    _userInputHandler(evt) {
      const name = evt.target.name;
      const value = evt.target.value;
      this.setState({[name]: value}, () => this._validateFields(name, value));
    }

    _validateFields(name, value) {
      let isEmailValid = this.state.isEmailValid;
      let isPasswordValid = this.state.isPasswordValid;

      switch (name) {
        case `email`:
          isEmailValid = this._validateEmail(value);
          break;
        case `password`:
          isPasswordValid = value.length >= MIN_PASSWORD_LENGTH;
          break;
      }

      this.setState({
        isEmailValid,
        isPasswordValid,
        isFormValid: isEmailValid && isPasswordValid
      });
    }

    _showErrorHandler(state) {
      this.setState({isShowError: state});
    }

    _validateEmail(email) {
      const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(email);
    }
  }

  WithFormSignIn.propTypes = {};

  return withApi(WithFormSignIn);
};

export default withFormSignIn;
