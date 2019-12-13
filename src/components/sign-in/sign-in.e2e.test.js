import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {SignIn} from './sign-in';

Enzyme.configure({adapter: new Adapter()});

it(`SignIn is correctly handled submit form`, () => {
  const handleErrorShow = jest.fn();
  const handlePostRequest = jest.fn();

  const wrapper = shallow(<SignIn
    email={`email@test.com`}
    isEmailValid={true}
    password={`test`}
    isPasswordValid={true}
    isFormValid={true}
    isShowError={true}
    onShowError={handleErrorShow}
    onUserInput={jest.fn()}
    onPost={handlePostRequest}
    isLoading={false}
  />);

  const form = wrapper.find(`.sign-in__form`);
  form.simulate(`submit`, {preventDefault: jest.fn()});
  expect(handleErrorShow).toHaveBeenCalledWith(true);
  expect(handlePostRequest).toHaveBeenCalledWith(
      `/login`,
      {email: `email@test.com`, password: `test`},
      expect.anything()
  );
});
