import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form } from 'formik';
import { StyledBox, ErrorMsg } from '../styles/Authentication';
import { validationSchemaForgotPassword } from '../../form/validationSchema';

import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  email: string;
}

const USER_FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email) {
      mail
    }
  }
`;

function ForgotPasswordForm(): JSX.Element {
  const history = useHistory();
  const [registerMutation] = useMutation(USER_FORGOT_PASSWORD);
  const [requestError, setRequestError] = useState('');

  const forgotPassword = async ({ email }: FormData): Promise<void> => {
    try {
      await registerMutation({
        variables: {
          email,
        },
      });
      history.push('/');
    } catch (error: any) {
      setRequestError(error.message);
    }
  };

  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchemaForgotPassword}
        onSubmit={(data: FormData) => forgotPassword(data)}
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
            {requestError ? <ErrorMsg>{requestError}</ErrorMsg> : ''}
            <Button text="CONTINUER" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <Link to="/">Se connecter</Link>
    </StyledBox>
  );
}

export default ForgotPasswordForm;
