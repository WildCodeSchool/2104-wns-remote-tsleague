import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { StyledBox, ErrorMsg } from '../styles/Authentication';
import { validationSchemaLogin } from '../../form/validationSchema';
import Button from '../common/Button';
import Input from '../common/Input';
import useLogin from './useLogin';

function LoginForm(): JSX.Element {
  const { login, requestError } = useLogin();
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
