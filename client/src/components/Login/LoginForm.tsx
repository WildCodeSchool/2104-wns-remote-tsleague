import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { gql, useMutation } from '@apollo/client';
import Cookies from 'js-cookie';

import { StyledBox } from '../styles/Login';
import Button from '../common/Button';
import Input from '../common/Input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer votre email')
    .required('Ce champ est obligatoire'),
  password: Yup.string().required('Veuillez entrer votre mot de passe'),
});

const USER_LOGIN = gql`
  mutation Login($body: AuthLoginInput!) {
    login(body: $body) {
      id
      token
    }
  }
`;

function LoginForm(): JSX.Element {
  const [loginMutation] = useMutation(USER_LOGIN);
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    setLoginError('');
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
      return history.push('/game');
    } catch (error: any) {
      console.log(error.message);
      return setLoginError(error.message);
    }
  };
  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
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
            <Button text="Connectez-vous" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <a href="/forgotpassword">Vous avez oublié votre mot de passe ?</a>
    </StyledBox>
  );
}

export default LoginForm;
