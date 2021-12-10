import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

import { useDispatch } from 'react-redux';
import { StyledBox, ErrorMsg } from '../styles/Authentication';
import { validationSchemaLogin } from '../../form/validationSchema';
import Button from '../common/Button';
import Input from '../common/Input';

const USER_LOGIN = gql`
  mutation Login($body: AuthLoginInput!) {
    login(body: $body) {
      id
      firstname
      lastname
      classrooms {
        id
      }
      role
      token
    }
  }
`;

function LoginForm(): JSX.Element {
  const dispatch = useDispatch();
  const [loginMutation] = useMutation(USER_LOGIN);
  const [requestError, setRequestError] = useState('');
  const history = useHistory();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> => {
    try {
      const { data } = await loginMutation({
        variables: {
          body: {
            mail: email,
            password,
          },
        },
      });
      Cookies.set('token', data.login.token);
      delete data.login.token;
      dispatch({ type: 'USER_FETCH_DATA', payload: data.login });
      history.push('/game');
    } catch (error: any) {
      setRequestError(error.message);
    }
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchemaLogin}
        onSubmit={({ email, password }) => login({ email, password })}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="email"
              type="email"
              errors={errors.email}
              touched={touched.email}
              placeholder="Votre e-mail"
            />
            <Input
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              placeholder="Votre mot de passe"
            />
            {requestError ? <ErrorMsg>{requestError}</ErrorMsg> : ''}
            <Button text="Connectez-vous" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <Link to="/forgot-password">Vous avez oublié votre mot de passe ?</Link>
      <Link to="/register-teacher">Créer un compte</Link>
    </StyledBox>
  );
}

export default LoginForm;
