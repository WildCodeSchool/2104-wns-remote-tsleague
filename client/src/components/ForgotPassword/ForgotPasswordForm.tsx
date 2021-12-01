import React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { StyledBox } from '../styles/ForgotPassword';
import Button from '../common/Button';
import Input from '../common/Input';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .min(4, 'Votre entrée est trop courte!')
    .email('Veuillez entrer un email')
    .required('Ce champ est obligatoire'),
});

function ForgotPasswordForm(): JSX.Element {
  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={validationSchema}
        onSubmit={() => {}}
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
            <Button text="CONTINUER" type="submit" buttonStyle="submit" />
          </Form>
        )}
      </Formik>
      <a href="/">Revenir sur la page d&apos;accueil </a>
    </StyledBox>
  );
}

export default ForgotPasswordForm;
