/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const USER_REGISTER = gql`
  mutation Register($body: AuthRegisterInput!) {
    register(body: $body) {
      id
      token
    }
  }
`;

function Register() {
  const [registerMutation] = useMutation(USER_REGISTER);
  const [registerError, setRegisterError] = useState('');
  const history = useHistory();

  const register = async () => {
    setRegisterError('');
    try {
      const { data } = await registerMutation({
        variables: {
          body: {
            lastname: 'sam',
            firstname: 'bill',
            mail: 'billy02@hotmail.fr',
            password: 'azerty',
            role: 'admin',
            classroom: 'class 01',
          },
        },
      });
      Cookies.set('token', data.register.token);
      return history.push('/');
    } catch (error: any) {
      return setRegisterError(error.message);
    }
  };

  if (registerError) return <p>{registerError} </p>;

  return (
    <div>
      <button onClick={() => register()}>Register</button>
    </div>
  );
}

export default Register;
