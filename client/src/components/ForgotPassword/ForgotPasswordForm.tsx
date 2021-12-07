import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { Formik, Form, Field } from 'formik';
import { StyledBox, ErrorMsg } from '../styles/Authentication';
import { validationSchemaForgotPassword } from '../../form/validationSchema';
import useQuery from '../../utils/useQuery';

import Button from '../common/Button';
import Input from '../common/Input';

interface FormData {
  email: string;
}

const USER_FORGOT_PASSWORD = gql`
  mutation Register($body: AuthRegisterInput!) {
    register(body: $body) {
      id
      token
    }
  }
`;

function ForgotPasswordForm(): JSX.Element {
  const history = useHistory();
  const query = useQuery();
  const [registerMutation] = useMutation(USER_FORGOT_PASSWORD);
  const [requestError, setRequestError] = useState('');

  const forgotPassword = async (formData: FormData): Promise<void> => {
    try {
      // const { data } = await registerMutation({
      //   variables: {
      //     body: formData,
      //   },
      // });
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
