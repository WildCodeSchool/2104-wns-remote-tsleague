import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import { StyledBox, ErrorMsg } from '../styles/Authentication';
import { validationSchemaResetPassword } from '../../form/validationSchema';
import useQuery from '../../utils/useQuery';

import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  email: string;
  password: string;
  token: string;
}

const USER_RESET_PASSWORD = gql`
  mutation Register($body: AuthRegisterInput!) {
    register(body: $body) {
      id
      token
    }
  }
`;

function ResetPasswordForm(): JSX.Element {
  const history = useHistory();
  const query = useQuery();
  const [registerMutation] = useMutation(USER_RESET_PASSWORD);
  const [requestError, setRequestError] = useState('');

  const resetPassword = async (formData: FormData) => {
    try {
      // const { data } = await registerMutation({
      //   variables: {
      //     body: formData,
      //   },
      // });
      return history.push('/');
    } catch (error: any) {
      return setRequestError(error.message);
    }
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: query.get('email') ?? '',
          password: '',
          token: query.get('token') ?? '',
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
