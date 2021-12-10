import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form } from 'formik';
import { validationSchemaResetPassword } from '../../form/validationSchema';
import useQuery from '../../utils/useQuery';

import { StyledBox, ErrorMsg } from '../styles/Authentication';
import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  email: string;
  password: string;
}

const USER_RESET_PASSWORD = gql`
  mutation UpdateUserPassword($body: ResetPasswordInput!) {
    updateUserPassword(body: $body) {
      password
      mail
    }
  }
`;

function ResetPasswordForm(): JSX.Element {
  const history = useHistory();
  const query = useQuery();
  const [registerMutation] = useMutation(USER_RESET_PASSWORD);
  const [requestError, setRequestError] = useState('');
  Cookies.set('token', query.get('token') ?? '');

  const resetPassword = async ({
    email,
    password,
  }: FormData): Promise<void> => {
    try {
      await registerMutation({
        variables: {
          body: {
            mail: email,
            password,
          },
        },
      });
      Cookies.remove('token');
      history.push('/');
    } catch (error: any) {
      setRequestError(error.message);
    }
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: query.get('email') ?? '',
          password: '',
        }}
        validationSchema={validationSchemaResetPassword}
        onSubmit={(data: FormData) => resetPassword(data)}
      >
        {({ errors, touched }) => (
          <Form>
            <Input
              name="email"
              type="email"
              errors={errors.email}
              touched={touched.email}
              placeholder="E-mail"
            />
            <Input
              name="password"
              type="password"
              errors={errors.password}
              touched={touched.password}
              placeholder="Mot de passe"
            />
            {requestError ? <ErrorMsg>{requestError}</ErrorMsg> : ''}
            <Button text="CONTINUER" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <Link to="/">Se connecter</Link>
    </StyledBox>
  );
}

export default ResetPasswordForm;
